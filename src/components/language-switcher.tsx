'use client'

import { usePathname, useRouter } from 'next/navigation'
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
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    if (!pathname) return;

    // Construct the new path
    let newPath;
    const isDefaultLocale = newLocale === i18n.defaultLocale;
    
    // Remove current locale prefix if it exists
    let pathWithoutLocale = pathname;
    if (pathname.startsWith(`/${currentLocale}`)) {
      pathWithoutLocale = pathname.substring(`/${currentLocale}`.length);
      if (pathWithoutLocale === '') pathWithoutLocale = '/'; // case /en -> /
    }

    if (isDefaultLocale) {
      newPath = pathWithoutLocale;
    } else {
      // Ensure pathWithoutLocale starts with a slash if it's not just the root
      newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    }
    
    // Ensure root path is just "/" for default locale, or "/<locale>" for others
    if (newPath === '') newPath = '/';
    if (!isDefaultLocale && newPath === `/${newLocale}/`) newPath = `/${newLocale}`;


    router.push(newPath);
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
