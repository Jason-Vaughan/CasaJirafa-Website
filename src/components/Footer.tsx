import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/i18n/dictionaries";
import Link from "next/link";

export default async function Footer() {
  const cookieStore = await cookies();
  const translationsFlag = cookieStore.get('ff_translations')?.value;
  const showTranslations = translationsFlag === '1';
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);
  const basePath = showTranslations ? `/${locale}` : '';

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-stone-900">{dict.footer.brand}</h3>
            <p className="mt-2 text-sm text-stone-600">
              {dict.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900">{dict.footer.planStay}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={`${basePath}/#condo`} className="text-stone-600 hover:text-stone-900 transition-colors">
                  {dict.footer.links.condo}
                </Link>
              </li>
              <li>
                <Link href="/guidebook" className="text-stone-600 hover:text-stone-900 transition-colors">
                  {dict.footer.links.guidebook}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900">{dict.footer.book}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={`${basePath}/#book`} className="font-medium text-stone-900 hover:underline">
                  {dict.footer.checkAvailability}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
