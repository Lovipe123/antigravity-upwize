import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SearchResult } from '../types';

const MedicalSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const rawSources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      const sources = rawSources.map(chunk => ({
        web: chunk.web ? {
          uri: chunk.web.uri || '',
          title: chunk.web.title || ''
        } : undefined,
        maps: undefined // Explicitly undefined as we are using googleSearch only
      }));

      setResult({
        text: response.text || "No results found.",
        sources: sources,
      });
    } catch (error) {
      console.error("Search error:", error);
      alert("Failed to fetch information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="p-8 border-b border-slate-100">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about medical research, latest Indian health guidelines, or drug interactions..."
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-lg"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      <div className="p-8 bg-slate-50/50 min-h-[300px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400 py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="font-medium">Synthesizing medical data from Google Search...</p>
          </div>
        ) : result ? (
          <div className="prose prose-slate max-w-none">
            <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8 whitespace-pre-wrap leading-relaxed text-slate-700">
              {result.text}
            </div>
            
            {result.sources.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Sources Referenced</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {result.sources.map((source, idx) => {
                    const info = source.web || source.maps;
                    if (!info) return null;
                    return (
                      <a 
                        key={idx}
                        href={info.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-3"
                      >
                        <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700 line-clamp-2">{info.title}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 py-12">
            <svg className="w-16 h-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p>Enter a query to begin medical research</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalSearch;