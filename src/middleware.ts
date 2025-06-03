import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import { i18n } from './i18n-config';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = i18n.locales as any; // Cast to string[]
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Construct the target path ensuring it starts with a slash if pathname is not empty
    let targetPath = `/${locale}${pathname === '/' ? '' : pathname}`;
    
    // Normalize slashes (e.g. /es//about -> /es/about)
    targetPath = targetPath.replace(/\/\/+/g, '/');

    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and files with extensions (e.g. .png)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|assets|.*\\..*).*)'],
};
