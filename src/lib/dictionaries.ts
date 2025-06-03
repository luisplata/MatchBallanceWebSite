
import type { Locale } from '@/i18n-config';

// Definimos un tipo para la estructura esperada del diccionario
// Puedes hacerlo más específico si conoces la estructura exacta
type Dictionary = {
  [key: string]: any; 
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/locales/en/common.json').then((module) => module.default),
  es: () => import('@/locales/es/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.es();
};
