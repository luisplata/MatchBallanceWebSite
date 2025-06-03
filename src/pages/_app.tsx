import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../app/globals.css'; // Ajustar ruta a globals.css
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getDictionary } from '@/lib/dictionaries'; // Asumimos que getDictionary puede funcionar síncrono si los JSON ya están cargados o se adapta
import type { Locale } from '@/i18n-config';
import { useEffect, useState } from 'react';

// Este tipo es un ejemplo, deberás ajustarlo según lo que realmente pasen tus getStaticProps
interface PagePropsWithLocale extends Record<string, any> {
  dictionary?: any; // El diccionario cargado por getStaticProps
}

function MyApp({ Component, pageProps }: AppProps<PagePropsWithLocale>) {
  const router = useRouter();
  const locale = router.locale as Locale || router.defaultLocale as Locale;
  
  // Los diccionarios ahora se pasan a través de pageProps desde getStaticProps en cada página
  const dict = pageProps.dictionary;

  // Si el diccionario no está en pageProps (ej. para páginas de error o casos especiales),
  // podrías tener un fallback, pero lo ideal es que siempre venga de la página.
  // Para este ejemplo, asumimos que 'dict' siempre estará presente si la página lo necesita.
  // Si no, Header y otros componentes que lo necesiten tendrían que manejar 'undefined'.
  // Una forma más robusta sería asegurar que getStaticProps siempre provea un diccionario.

  // Para evitar que Header intente acceder a dict.nav antes de que pageProps esté completamente listo
  // o si una página no devuelve 'dictionary' en sus props.
  const navDictionary = dict?.nav || { home: "Home", news: "News", forum: "Forum", press: "Press AI" }; // Fallback
  const langSwitchDictionary = dict?.languageSelector || { label: "Language:", es: "Español", en: "English" }; // Fallback


  return (
    <>
      <Header 
        locale={locale} 
        navDictionary={navDictionary} 
        langSwitchDictionary={langSwitchDictionary}
      />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default MyApp;
