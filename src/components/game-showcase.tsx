import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function GameShowcase() {
  const screenshots = [
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 1 del juego Match Ballance", "data-ai-hint": "gameplay screenshot" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 2 del juego Match Ballance", "data-ai-hint": "game level" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 3 del juego Match Ballance", "data-ai-hint": "game character" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 4 del juego Match Ballance", "data-ai-hint": "gameplay action" },
  ];

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300">
        <CardContent className="p-0">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative group cursor-pointer" data-ai-hint="gameplay video">
            <PlayCircle className="h-24 w-24 text-primary opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 z-10" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
            <p className="absolute bottom-4 left-4 text-primary-foreground font-semibold bg-primary/80 px-3 py-1 rounded-md z-10">
              Ver Trailer del Juego
            </p>
             <Image src="https://placehold.co/1280x720.png" alt="Video placeholder" layout="fill" objectFit="cover" className="opacity-50" data-ai-hint="gameplay video" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((ss, index) => (
          <Card key={index} className="overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
            <CardContent className="p-0">
              <Image
                src={ss.src}
                alt={ss.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={ss['data-ai-hint']}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
