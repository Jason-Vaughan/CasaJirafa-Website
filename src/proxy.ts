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

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  const locales = ['en', 'es', 'fr'];
  const hasLocale = locales.some(loc => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`);

  // Translations are shipped, always redirect to locale
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
