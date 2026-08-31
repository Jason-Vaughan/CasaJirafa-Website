/* eslint-disable react-hooks/set-state-in-effect, react-hooks/immutability */
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const localeMatch = document.cookie.match(new RegExp('(^| )NEXT_LOCALE=([^;]+)'));
    if (localeMatch) {
      setCurrentLocale(localeMatch[2]);
    } else {
      // Try to extract from pathname
      const pathLocale = pathname.split('/')[1];
      if (['en', 'es', 'fr'].includes(pathLocale)) {
        setCurrentLocale(pathLocale);
      }
    }
  }, [pathname]);

  const switchLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    setCurrentLocale(locale);
    
    // Check if current path has a locale, and replace it
    const segments = pathname.split('/');
    if (segments.length > 1 && ['en', 'es', 'fr'].includes(segments[1])) {
      segments[1] = locale;
      router.push(segments.join('/') || '/');
    } else {
      // If no locale in path, redirect to /locale
      router.push(`/${locale}${pathname === '/' ? '' : pathname}`);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {['en', 'es', 'fr'].map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`text-xs font-medium uppercase px-2 py-1 rounded transition-colors ${
            currentLocale === lang 
              ? "bg-stone-200 text-stone-900" 
              : "text-stone-500 hover:text-stone-900"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
