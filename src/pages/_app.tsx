import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../app/globals.css'; // Ajustar ruta a globals.css
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import type { Locale } from '@/i18n-config';
import { i18n as i18nConfig } from '@/i18n-config'; // Importar para defaultLocale

// Este tipo es un ejemplo, deberás ajustarlo según lo que realmente pasen tus getStaticProps
interface PagePropsWithLocale extends Record<string, any> {
  dictionary?: any; // El diccionario cargado por getStaticProps
  locale?: Locale; // Asegurar que locale viene de pageProps
}

function MyApp({ Component, pageProps }: AppProps<PagePropsWithLocale>) {
  const router = useRouter();

  // Derivar el locale actual:
  // 1. De pageProps.locale (establecido por getStaticProps)
  // 2. De router.query.locale (si se navega directamente a /es/pagina)
  // 3. Como fallback, el defaultLocale de nuestra configuración i18n
  const currentLocale = pageProps.locale || (router.query.locale as Locale) || i18nConfig.defaultLocale;
  
  const dict = pageProps.dictionary;

  const navDictionary = dict?.nav || { home: "Home", news: "News", forum: "Forum", press: "Press AI" };
  const langSwitchDictionary = dict?.languageSelector || { label: "Language:", es: "Español", en: "English" };


  return (
    <>
      <Header 
        locale={currentLocale} 
        navDictionary={navDictionary} 
        langSwitchDictionary={langSwitchDictionary}
      />
      <main className="flex-grow">
        {/* Pasamos currentLocale también por si el componente lo necesita directamente */}
        <Component {...pageProps} locale={currentLocale} />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default MyApp;
