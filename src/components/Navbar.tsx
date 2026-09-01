import Link from "next/link";
import { cookies } from "next/headers";

import VersionTag from "./VersionTag";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function Navbar() {
  const cookieStore = await cookies();

  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);
  const basePath = `/${locale}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 z-10">
          <div className="flex flex-col">
            <Link href={`${basePath}/`} className="text-2xl font-semibold tracking-tight text-stone-900 leading-tight">
              {dict.navbar.title}
            </Link>
            <VersionTag />
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          <Link href={`${basePath}/#condo`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.condo}
          </Link>
          <Link href={`${basePath}/#location`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.location}
          </Link>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/guidebook" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.guidebook}
          </a>
        </nav>
        
        {/* Desktop Right side */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <LanguageSwitcher />
          <Link
            href={`${basePath}/#book`}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 transition-colors"
          >
            {dict.navbar.bookNow}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <MobileNav 
          dict={dict} 
          basePath={basePath} 
        />
      </div>
    </header>
  );
}
