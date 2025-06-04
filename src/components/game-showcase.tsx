import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function GameShowcase() {
  const screenshots = [
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 1 del juego Match Ballance", "data-ai-hint": "gameplay screenshot" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 2 del juego Match Ballance", "data-ai-hint": "game level" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 3 del juego Match Ballance", "data-ai-hint": "game character" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 4 del juego Match Ballance", "data-ai-hint": "gameplay action" },
  ];

  const soundCloudEmbedUrl = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bellseboss/00-presentacion&color=%23B0F247&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300">
        <CardContent className="p-0">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={soundCloudEmbedUrl}
            title="Presentación Match Ballance SoundCloud"
            data-ai-hint="audio presentation"
          ></iframe>
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
