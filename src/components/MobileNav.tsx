"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileNavProps {
  dict: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  basePath?: string;
}

export default function MobileNav({ dict, basePath = "" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-3">
      <LanguageSwitcher />
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-stone-600 hover:text-stone-900"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white border-b border-stone-200 shadow-lg py-4 px-6 flex flex-col gap-4 z-40">
          <Link href={`${basePath}/#condo`} onClick={() => setIsOpen(false)} className="text-base font-medium text-stone-900">
            {dict.navbar.condo}
          </Link>
          <Link href={`${basePath}/#location`} onClick={() => setIsOpen(false)} className="text-base font-medium text-stone-900">
            {dict.navbar.location}
          </Link>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/guidebook" onClick={() => setIsOpen(false)} className="text-base font-medium text-stone-900">
            {dict.navbar.guidebook}
          </a>
          
          <div className="pt-2 mt-2 border-t border-stone-100">
            <Link
              href={`${basePath}/#book`}
              onClick={() => setIsOpen(false)}
              className="inline-block rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm text-center w-full"
            >
              {dict.navbar.bookNow}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
