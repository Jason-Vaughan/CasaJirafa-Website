import Link from "next/link";
import { cookies } from "next/headers";

import VersionTag from "./VersionTag";
import FeatureMatrix from "./FeatureMatrix";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function Navbar() {
  const cookieStore = await cookies();
  const ratesFlag = cookieStore.get('ff_rates')?.value;
  const showRates = ratesFlag !== '0';
  
  const merchFlag = cookieStore.get('ff_merch')?.value;
  const showMerch = merchFlag !== '0';

  const translationsFlag = cookieStore.get('ff_translations')?.value;
  const showI18n = translationsFlag === '1';

  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center z-10">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-stone-900">
            {dict.navbar.title}
          </Link>
          <VersionTag />
          <FeatureMatrix />
        </div>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          <Link href="/#condo" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.condo}
          </Link>
          <Link href="/#location" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.location}
          </Link>
          {showRates && (
            <Link href="/#pricing" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              {dict.navbar.rates}
            </Link>
          )}
          {showMerch && (
            <Link href="/#merch" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              {dict.navbar.merch}
            </Link>
          )}
          <Link href="/guidebook" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            {dict.navbar.guidebook}
          </Link>
        </nav>
        <div className="flex items-center gap-4 z-10">
          {showI18n && <LanguageSwitcher />}
          <Link
            href="/#book"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all"
          >
            {dict.navbar.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
