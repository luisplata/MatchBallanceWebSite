
'use client';

import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';
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
      <Button
        size="lg"
        className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105 animate-subtle-bounce"
        style={{animationDelay: '0s'}}
        onClick={handleAppStoreClick}
        aria-label="Próximamente en App Store"
      >
        <Apple className="mr-3 h-7 w-7" />
        <div className="text-left">
          <p className="text-xs">Descargar en</p>
          <p className="text-xl font-semibold">App Store</p>
        </div>
      </Button>
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105 animate-subtle-bounce"
        style={{animationDelay: '0.2s'}}
      >
        <a href="https://play.google.com/store/apps/dev?id=6489594376691621400" target="_blank" rel="noopener noreferrer" aria-label="Descargar en Google Play">
          <Play className="mr-3 h-7 w-7" />
           <div className="text-left">
            <p className="text-xs">Disponible en</p>
            <p className="text-xl font-semibold">Google Play</p>
          </div>
        </a>
      </Button>
    </div>
  );
}
