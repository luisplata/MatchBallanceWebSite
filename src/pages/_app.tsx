import type { AppProps } from 'next/app';
import '../app/globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Definición de textos estáticos para el Header (antes en el diccionario)
const navDictionary = {
  home: "Inicio",
  news: "Noticias",
  forum: "Foro",
  press: "Prensa IA"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header navDictionary={navDictionary} />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default MyApp;
