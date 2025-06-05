import type { AppProps } from 'next/app';
import '../app/globals.css';
import { Toaster } from "@/components/ui/toaster";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="flex-shrink-0"> {/* Changed from flex-grow to allow index page to control its height fully */}
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}

export default MyApp;
