import Container from '@/components/container';
import GameDescriptionGenerator from '@/components/ai-tools/game-description-generator';
import PressReleaseGenerator from '@/components/ai-tools/press-release-generator';
import { BotMessageSquare } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function PrensaPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  const pressPageDict = dict.pressPage;

  return (
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
  );
}
