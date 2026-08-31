/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FeatureMatrix() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStaging, setIsStaging] = useState(false);
  const [merchEnabled, setMerchEnabled] = useState(true);
  const [ratesEnabled, setRatesEnabled] = useState(true);
  const [translationsEnabled, setTranslationsEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show on preview/staging domains
    if (window.location.hostname !== "casajirafapv.com") {
      setIsStaging(true);
      // Read initial cookie state
      const merchMatch = document.cookie.match(new RegExp('(^| )ff_merch=([^;]+)'));
      setMerchEnabled(merchMatch ? merchMatch[2] !== "0" : true);
      
      const ratesMatch = document.cookie.match(new RegExp('(^| )ff_rates=([^;]+)'));
      setRatesEnabled(ratesMatch ? ratesMatch[2] !== "0" : true);

      const translationsMatch = document.cookie.match(new RegExp('(^| )ff_translations=([^;]+)'));
      setTranslationsEnabled(translationsMatch ? translationsMatch[2] === "1" : false);
    }
  }, []);

  if (!isStaging) return null;

  const toggleMerch = () => {
    const newState = !merchEnabled;
    setMerchEnabled(newState);
    document.cookie = `ff_merch=${newState ? "1" : "0"}; path=/; max-age=31536000`;
    router.refresh();
  };

  const toggleRates = () => {
    const newState = !ratesEnabled;
    setRatesEnabled(newState);
    document.cookie = `ff_rates=${newState ? "1" : "0"}; path=/; max-age=31536000`;
    router.refresh();
  };

  const toggleTranslations = () => {
    const newState = !translationsEnabled;
    setTranslationsEnabled(newState);
    document.cookie = `ff_translations=${newState ? "1" : "0"}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <>
      <div className="relative">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 shadow-sm hover:bg-indigo-100 transition-colors"
        >
          Matrix
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]" onClick={() => setIsOpen(false)} />
          
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/10 z-[101]">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-5">
              <h3 className="text-base font-bold text-stone-900">Feature Flags</h3>
              <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-600 transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Merch Store</span>
                <button
                  onClick={toggleMerch}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${merchEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${merchEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Pricing / Rates</span>
                <button
                  onClick={toggleRates}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${ratesEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${ratesEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-700">Translations</span>
                <button
                  onClick={toggleTranslations}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${translationsEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${translationsEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
