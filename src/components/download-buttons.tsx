
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
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      {/* App Store Button Image */}
      <button
        onClick={handleAppStoreClick}
        className="transform transition-transform hover:scale-105 focus:outline-none"
        aria-label="Descargar en App Store (Próximamente)"
      >
        <Image
          src="images/appstore.png" 
          alt="Descargar en App Store"
          width={240} 
          height={72}
          className="object-contain"
          data-ai-hint="app store badge"
        />
      </button>

      {/* Google Play Button Image */}
      <a
        href="https://play.google.com/store/apps/dev?id=6489594376691621400"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Disponible en Google Play"
        className="transform transition-transform hover:scale-105"
      >
        <Image
          src="images/playstore.png" 
          alt="Disponible en Google Play"
          width={240}
          height={72}
          className="object-contain"
          data-ai-hint="google play badge"
        />
      </a>
    </div>
  );
}
