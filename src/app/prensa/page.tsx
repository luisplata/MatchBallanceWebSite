import Container from '@/components/container';
import GameDescriptionGenerator from '@/components/ai-tools/game-description-generator';
import PressReleaseGenerator from '@/components/ai-tools/press-release-generator';
import { BotMessageSquare } from 'lucide-react';

export default function PrensaPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <BotMessageSquare className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">Herramientas de Prensa IA</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Utiliza la inteligencia artificial para generar descripciones de juego y comunicados de prensa para 'Match Ballance'.
        </p>
      </div>
      
      <div className="space-y-12">
        <GameDescriptionGenerator />
        <PressReleaseGenerator />
      </div>
    </Container>
  );
}
