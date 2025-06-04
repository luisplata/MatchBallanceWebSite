import Container from '@/components/container';
import GameDescriptionGenerator from '@/components/ai-tools/game-description-generator';
import PressReleaseGenerator from '@/components/ai-tools/press-release-generator';
import { BotMessageSquare } from 'lucide-react';
import Head from 'next/head';

// Textos estáticos
const siteTitle = "Equilibrio Dinámico";
const pressPageDict = {
  title: "Herramientas de Prensa IA",
  subtitle: "Utiliza la inteligencia artificial para generar descripciones de juego y comunicados de prensa para 'Match Ballance'."
};

export default function PrensaPage() {
  return (
    <>
      <Head>
        <title>{`${pressPageDict.title} - ${siteTitle}`}</title>
      </Head>
      <Container className="py-12 md:py-16">
        <div className="text-center mb-12">
          <BotMessageSquare className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">{pressPageDict.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {pressPageDict.subtitle}
          </p>
        </div>
        
        <div className="space-y-12">
          <GameDescriptionGenerator />
          <PressReleaseGenerator />
        </div>
      </Container>
    </>
  );
}

// No getStaticProps o getStaticPaths necesarios
