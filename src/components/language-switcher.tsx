'use client' // Esta directiva no es necesaria en Pages Router para componentes que usan hooks de router

import { useRouter } from 'next/router' // Cambiado de next/navigation a next/router
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type Locale, i18n } from '@/i18n-config'

interface LanguageSwitcherProps {
  currentLocale: Locale;
  dictionary: {
    label: string;
    es: string;
    en: string;
  };
}

export default function LanguageSwitcher({ currentLocale, dictionary }: LanguageSwitcherProps) {
  const router = useRouter();
  // En Pages Router, router.pathname es la ruta sin el locale (e.g., /news/[id])
  // router.asPath es la ruta completa con el locale (e.g., /en/news/my-post)

  const handleChange = (newLocale: Locale) => {
    // router.push(pathname, asPath, { locale })
    // pathname: la ruta de la página en el sistema de archivos (e.g., /news/[id])
    // asPath: la ruta que se muestra en el navegador (e.g., /es/news/my-post)
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-muted-foreground hidden sm:inline">{dictionary.label}</span>
      <Select value={currentLocale} onValueChange={(value) => handleChange(value as Locale)}>
        <SelectTrigger className="w-auto h-9 text-xs sm:text-sm py-1 px-2 sm:px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="es">{dictionary.es}</SelectItem>
          <SelectItem value="en">{dictionary.en}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
