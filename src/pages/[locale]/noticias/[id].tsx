import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import { ArrowLeft, Newspaper } from 'lucide-react';
import Link from 'next/link';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

// Placeholder data for news items, needed for getStaticPaths
const newsItemsData = [
  { id: '1', titleKey: 'newsItem1Title' },
  { id: '2', titleKey: 'newsItem2Title' },
  { id: '3', titleKey: 'newsItem3Title' },
];

interface NoticiaDetailPageProps {
  locale: Locale;
  id: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  // newsItem: any; // Deberías definir un tipo para tu item de noticia
}

export default function NoticiaDetailPage({ locale, id, dictionary }: NoticiaDetailPageProps) {
  const newsDetailDict = dictionary.newsDetailPage;
  const siteTitle = dictionary.siteTitle;
  // En una app real, buscarías el newsItem basado en 'id' y 'locale' aquí o lo pasarías desde getStaticProps
  // const currentNewsItem = newsItemsData.find(item => item.id === id);
  // const title = currentNewsItem ? dictionary.newsPageContent[currentNewsItem.titleKey] : newsDetailDict.titlePlaceholder;


  return (
    <>
      <Head>
        <title>{`${newsDetailDict.titlePlaceholder} ID: ${id} - ${siteTitle}`}</title>
      </Head>
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href={`/${locale}/noticias`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {dictionary.nav.news}
              </Link>
            </Button>
          </div>

          <article className="prose prose-lg dark:prose-invert mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <header className="mb-6 text-center">
              <Newspaper className="mx-auto h-16 w-16 text-primary mb-4" />
              <h1 className="text-3xl sm:text-4xl font-headline font-bold text-primary">
                {newsDetailDict.titlePlaceholder} ID: {id} 
              </h1>
              {/* <p className="text-muted-foreground text-sm">
                Fecha de Publicación: Placeholder Date
              </p> */}
            </header>
            
            <div className="text-center text-lg">
              <p>{newsDetailDict.comingSoon}</p>
            </div>
            
          </article>
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<NoticiaDetailPageProps, { locale: Locale; id: string }> = async (context) => {
  const locale = context.params?.locale || i18n.defaultLocale;
  const id = context.params?.id as string;
  const dictionary = await getDictionary(locale);
  // Aquí deberías buscar el item de noticia específico por id y locale si fuera necesario
  // const newsItem = await fetchNewsItemById(id, locale);
  return {
    props: {
      locale,
      id,
      dictionary,
      // newsItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = i18n.locales.flatMap((locale) =>
    newsItemsData.map((item) => ({
      params: { locale, id: item.id },
    }))
  );

  return {
    paths,
    fallback: false, // O 'blocking' o true si tienes muchas noticias y no quieres pre-renderizar todas
  };
};
