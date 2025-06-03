import Container from '@/components/container';
import GameDescriptionGenerator from '@/components/ai-tools/game-description-generator';
import PressReleaseGenerator from '@/components/ai-tools/press-release-generator';
import { BotMessageSquare } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

interface PrensaPageProps {
  locale: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function PrensaPage({ dictionary }: PrensaPageProps) {
  const pressPageDict = dictionary.pressPage;
  const siteTitle = dictionary.siteTitle;

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

export const getStaticProps: GetStaticProps<PrensaPageProps, { locale: Locale }> = async ({ params }) => {
  const locale = params?.locale || i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  return {
    props: {
      locale,
      dictionary,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18n.locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};
