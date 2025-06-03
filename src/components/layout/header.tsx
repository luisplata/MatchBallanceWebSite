import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';
import { type Locale, i18n } from '@/i18n-config'; // i18n importado aquí
import { useRouter } from 'next/router'; // Necesario para el LanguageSwitcher en Pages Router

interface NavItemLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface HeaderProps {
  locale: Locale; // locale vendrá de pageProps o router
  navDictionary: {
    home: string;
    news: string;
    forum: string;
    press: string;
  };
  langSwitchDictionary: {
    label: string;
    es: string;
    en: string;
  }
}

export default function Header({ locale, navDictionary, langSwitchDictionary }: HeaderProps) {
  const router = useRouter(); // Para asegurar que el locale es el actual en Pages Router
  const currentLocale = router.locale as Locale || router.defaultLocale as Locale;

  const navItems: NavItemLink[] = [
    { href: '/', label: navDictionary.home },
    { href: '/noticias', label: navDictionary.news },
    { href: '/foro', label: navDictionary.forum },
    { href: '/prensa', label: navDictionary.press },
  ];

  // En Pages Router, Link maneja automáticamente el prefijo del locale
  // si la configuración i18n está en next.config.js

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" locale={currentLocale} className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="m12 22 V 12"/></svg>
          <span className="font-bold font-headline text-lg">Equilibrio Dinámico</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              locale={currentLocale} // Asegurar que el Link usa el locale correcto
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <LanguageSwitcher currentLocale={currentLocale} dictionary={langSwitchDictionary} />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" locale={currentLocale} className="mb-6 flex items-center space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="m12 22 V 12"/></svg>
                  <span className="font-bold font-headline text-lg">Equilibrio Dinámico</span>
                </Link>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      locale={currentLocale}
                      className="text-lg transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
