import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function GameShowcase() {
  const screenshots = [
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 1 del juego Match Ballance", "data-ai-hint": "gameplay screenshot" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 2 del juego Match Ballance", "data-ai-hint": "game level" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 3 del juego Match Ballance", "data-ai-hint": "game character" },
    { src: "https://placehold.co/600x400.png", alt: "Captura de pantalla 4 del juego Match Ballance", "data-ai-hint": "gameplay action" },
  ];

  const youtubeVideoId = "tIZyxc79KZQ";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300">
        <CardContent className="p-0 aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={youtubeEmbedUrl}
            title="Gameplay de Match Ballance en YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            data-ai-hint="gameplay video"
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
