import Link from "next/link";
import { cookies } from "next/headers";

import VersionTag from "./VersionTag";
import FeatureMatrix from "./FeatureMatrix";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function Navbar() {
  const cookieStore = await cookies();
  const ratesFlag = cookieStore.get('ff_rates')?.value;
  const showRates = ratesFlag !== '0';
  
  const merchFlag = cookieStore.get('ff_merch')?.value;
  const showMerch = merchFlag !== '0';


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
          <FeatureMatrix />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          <Link href={`${basePath}/#condo`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.condo}
          </Link>
          <Link href={`${basePath}/#location`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.location}
          </Link>
          {showRates && (
            <Link href={`${basePath}/#pricing`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              {dict.navbar.rates}
            </Link>
          )}
          {showMerch && (
            <Link href={`${basePath}/#merch`} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              {dict.navbar.merch}
            </Link>
          )}
          <Link href="/guidebook" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.guidebook}
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <LanguageSwitcher />
          <Link
            href={`${basePath}/#book`}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all"
          >
            {dict.navbar.bookNow}
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav 
          dict={dict} 
          showRates={showRates} 
          showMerch={showMerch} 
           basePath={basePath} 
        />
      </div>
    </header>
  );
}
