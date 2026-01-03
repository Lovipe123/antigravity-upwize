
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { decode, encode, decodeAudioData } from '../utils/audioUtils';

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const sessionRef = useRef<any>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleAssistant = async () => {
    if (isActive) {
      stopSession();
      setIsOpen(false);
    } else {
      setIsOpen(true);
      await startSession();
    }
  };

  const startSession = async () => {
    setIsConnecting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsConnecting(false);
            
            // Setup recording
            inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            const source = inputAudioContextRef.current.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContextRef.current.destination);
          },
          onmessage: async (message: any) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              if (!outputAudioContextRef.current) {
                outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
              }

              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
              
              const audioBuffer = await decodeAudioData(
                decode(base64Audio),
                outputAudioContextRef.current,
                24000,
                1
              );
              
              const source = outputAudioContextRef.current.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputAudioContextRef.current.destination);
              source.onended = () => sourcesRef.current.delete(source);
              
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => console.error("Live error:", e),
          onclose: () => stopSession(),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
          systemInstruction: 'You are an AI assistant for Upwize, an Indian healthcare engagement platform. Help doctors manage their clinic or help patients book appointments. Be helpful, professional, and concise. Mention WhatsApp for communications.',
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (error) {
      console.error("Failed to start session:", error);
      setIsConnecting(false);
      setIsOpen(false);
    }
  };

  const stopSession = () => {
    sessionRef.current?.close();
    sessionRef.current = null;
    inputAudioContextRef.current?.close();
    inputAudioContextRef.current = null;
    outputAudioContextRef.current?.close();
    outputAudioContextRef.current = null;
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
    setIsActive(false);
    setIsConnecting(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in slide-in-from-bottom-4">
          <div className="bg-blue-600 p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {isActive ? (
                <div className="flex items-end gap-1 h-6">
                  <div className="w-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" style={{height: '60%'}}></div>
                  <div className="w-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" style={{height: '100%'}}></div>
                  <div className="w-1.5 bg-white rounded-full animate-bounce" style={{height: '40%'}}></div>
                </div>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
            </div>
            <h3 className="font-bold text-lg mb-1">
              {isConnecting ? "Connecting..." : isActive ? "Listening..." : "Upwize Assistant"}
            </h3>
            <p className="text-blue-100 text-sm">
              {isActive ? "I'm ready to help you." : "Real-time AI Voice Support"}
            </p>
          </div>
          <div className="p-6">
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              "Hi! I can help you check your schedule, find patient records, or look up medical guidelines."
            </p>
            <button 
              onClick={toggleAssistant}
              className={`w-full py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {isActive ? "End Conversation" : "Start Speaking"}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleAssistant}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${isActive ? 'bg-red-500 animate-pulse' : 'bg-blue-600'} text-white ring-8 ring-white`}
      >
        {isActive ? (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VoiceAssistant;
