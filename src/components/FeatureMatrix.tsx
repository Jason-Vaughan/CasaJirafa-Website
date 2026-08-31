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
    <div className="relative ml-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 shadow-sm hover:bg-indigo-100 transition-colors"
      >
        Matrix
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black/10 z-50">
          <h3 className="text-sm font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Feature Flags</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-700">Merch Store</span>
              <button
                onClick={toggleMerch}
                className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${merchEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
              >
                <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${merchEnabled ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-700">Pricing / Rates</span>
              <button
                onClick={toggleRates}
                className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${ratesEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
              >
                <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${ratesEnabled ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-700">Translations</span>
              <button
                onClick={toggleTranslations}
                className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${translationsEnabled ? 'bg-[#c54b34]' : 'bg-stone-300'}`}
              >
                <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${translationsEnabled ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
