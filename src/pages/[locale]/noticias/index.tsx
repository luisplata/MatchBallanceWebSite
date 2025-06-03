import NewsCard from '@/components/news-card';
import Container from '@/components/container';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

// Placeholder data for news items
const newsItems = [
  {
    id: '1',
    titleKey: 'newsItem1Title', // Key for dictionary
    date: '2024-07-15',
    summaryKey: 'newsItem1Summary', // Key for dictionary
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game update'
  },
  {
    id: '2',
    titleKey: 'newsItem2Title',
    date: '2024-07-01',
    summaryKey: 'newsItem2Summary',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game tournament'
  },
  {
    id: '3',
    titleKey: 'newsItem3Title',
    date: '2024-06-20',
    summaryKey: 'newsItem3Summary',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'developer team'
  },
];

interface NoticiasPageProps {
  locale: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function NoticiasPage({ locale, dictionary }: NoticiasPageProps) {
  const newsPageDict = dictionary.newsPage;
  const siteTitle = dictionary.siteTitle;

  return (
    <>
      <Head>
        <title>{`${newsPageDict.title} - ${siteTitle}`}</title>
      </Head>
      <Container className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">{newsPageDict.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {newsPageDict.subtitle}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              // Traducir título y resumen usando el diccionario
              title={dictionary.newsPageContent[item.titleKey] || item.titleKey}
              date={item.date}
              summary={dictionary.newsPageContent[item.summaryKey] || item.summaryKey}
              imageUrl={item.imageUrl}
              imageAiHint={item.imageAiHint}
              link={`/${locale}/noticias/${item.id}`} 
              locale={locale}
              readMoreText={newsPageDict.readMore}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<NoticiasPageProps, { locale: Locale }> = async ({ params }) => {
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
