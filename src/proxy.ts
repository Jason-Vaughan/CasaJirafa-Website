import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const i18nFlag = request.cookies.get('ff_i18n')?.value;
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  const locales = ['en', 'es', 'fr'];
  const hasLocale = locales.some(loc => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`);

  if (i18nFlag !== '1') {
    // If flag is off, just rewrite the root path to /en internally so it works
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/en', request.url));
    }
    // If they hit /en directly, let it pass (or rewrite other paths if needed)
    if (!hasLocale) {
        return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
    }
    return NextResponse.next();
  }

  // Flag is on
  if (!hasLocale) {
    const locale = locales.includes(cookieLocale) ? cookieLocale : 'en';
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
