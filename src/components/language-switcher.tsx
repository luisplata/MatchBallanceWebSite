'use client' 

import { useRouter } from 'next/router'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { type Locale } from '@/i18n-config' // No necesitamos i18n completo aquí

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

  const handleChange = (newLocale: Locale) => {
    const currentPath = router.asPath; // e.g., /es/noticias/un-id o /en/foro

    // Eliminar el prefijo del idioma actual del path
    let basePath = currentPath;
    if (currentPath.startsWith(`/${currentLocale}`)) {
      basePath = currentPath.substring(`/${currentLocale}`.length);
    }
    // Si basePath está vacío (porque estábamos en la raíz del idioma, ej: /es), asegurar que sea "/"
    if (basePath === '') {
      basePath = '/';
    }
    
    router.push(`/${newLocale}${basePath}`);
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
