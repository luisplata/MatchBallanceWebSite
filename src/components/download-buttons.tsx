import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react'; // Play can represent Google Play Store

export default function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105 animate-subtle-bounce"
        style={{animationDelay: '0s'}}
      >
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Descargar en App Store">
          <Apple className="mr-3 h-7 w-7" />
          <div className="text-left">
            <p className="text-xs">Descargar en</p>
            <p className="text-xl font-semibold">App Store</p>
          </div>
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105 animate-subtle-bounce"
        style={{animationDelay: '0.2s'}}
      >
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Descargar en Google Play">
          <Play className="mr-3 h-7 w-7" /> {/* Using Play icon for generic Play Store */}
           <div className="text-left">
            <p className="text-xs">Disponible en</p>
            <p className="text-xl font-semibold">Google Play</p>
          </div>
        </a>
      </Button>
    </div>
  );
}
