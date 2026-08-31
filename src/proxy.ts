import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/guidebook') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  const locales = ['en', 'es', 'fr'];
  const hasLocale = locales.some(loc => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`);

  // Translations are shipped, always redirect to locale
  if (!hasLocale) {
    let locale = 'en'; // default

    if (cookieLocale && locales.includes(cookieLocale)) {
      locale = cookieLocale;
    } else {
      // Auto-detect from Accept-Language header
      const acceptLanguage = request.headers.get('accept-language');
      if (acceptLanguage) {
        // e.g. "es-MX,es;q=0.9,en-US;q=0.8" -> try to find "es" or "fr"
        const preferredLocales = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().split('-')[0].toLowerCase());
        const match = preferredLocales.find(lang => locales.includes(lang));
        if (match) {
          locale = match;
        }
      }
    }
    
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }



  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
