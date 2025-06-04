import type { AppProps } from 'next/app';
import '../app/globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Definición de textos estáticos para el Header (actualizada)
const navDictionary = {
  home: "Inicio",
  news: "Noticias",
  forum: "Foro",
  // "press" ha sido eliminado
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // Manejar el locale para _app.tsx, necesario para el Header si no se pasa desde pageProps.
  // En un sitio solo en español, esto es menos crítico pero bueno tenerlo si se reintroduce i18n.
  const currentLocale = 'es'; // Forzado a español

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
