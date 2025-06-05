
'use client';

import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

export default function DownloadButtons() {
  const { toast } = useToast();

  const handleAppStoreClick = () => {
    toast({
      title: "Próximamente",
      description: "Match Ballance estará disponible pronto en la App Store.",
    });
  };

  return (
    <div className="flex w-full items-start justify-center gap-x-2 px-1 sm:gap-x-4 sm:px-0">
      {/* App Store Button Wrapper */}
      <div className="w-1/2 max-w-[180px] sm:w-[200px] sm:max-w-none">
        <button
          onClick={handleAppStoreClick}
          className="w-full transform transition-transform hover:scale-105 focus:outline-none block"
          aria-label="Descargar en App Store (Próximamente)"
        >
          <Image
            src="/images/appstore.png" 
            alt="Descargar en App Store"
            width={200} 
            height={60}  
            layout="responsive"
            objectFit="contain"
            data-ai-hint="app store badge"
          />
        </button>
      </div>

      {/* Google Play Button Wrapper */}
      <div className="w-1/2 max-w-[180px] sm:w-[200px] sm:max-w-none">
        <a
          href="https://play.google.com/store/apps/dev?id=6489594376691621400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Disponible en Google Play"
          className="w-full transform transition-transform hover:scale-105 block"
        >
          <Image
            src="/images/playstore.png" 
            alt="Disponible en Google Play"
            width={200} 
            height={60}  
            layout="responsive"
            objectFit="contain"
            data-ai-hint="google play badge"
          />
        </a>
      </div>
    </div>
  );
}
