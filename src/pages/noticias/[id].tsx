import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Newspaper } from 'lucide-react';
import Link from 'next/link';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

// Textos estáticos
const siteTitle = "Equilibrio Dinámico";
const newsDetailDict = {
  titlePlaceholder: "Detalle de la Noticia",
  comingSoon: "El contenido detallado de esta noticia estará disponible pronto. ¡Vuelve a consultarlo más tarde!"
};
const navNews = "Noticias";

// Placeholder data for news items, needed for getStaticPaths
const newsItemsDataForPaths = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
];

interface NoticiaDetailPageProps {
  id: string;
  // En una app real, podrías pasar el contenido de la noticia aquí
  // newsItemContent?: any; 
}

export default function NoticiaDetailPage({ id }: NoticiaDetailPageProps) {
  return (
    <>
      <Head>
        <title>{`${newsDetailDict.titlePlaceholder} ID: ${id} - ${siteTitle}`}</title>
      </Head>
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href={`/noticias`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {navNews}
              </Link>
            </Button>
          </div>

          <article className="prose prose-lg dark:prose-invert mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <header className="mb-6 text-center">
              <Newspaper className="mx-auto h-16 w-16 text-primary mb-4" />
              <h1 className="text-3xl sm:text-4xl font-headline font-bold text-primary">
                {newsDetailDict.titlePlaceholder} ID: {id} 
              </h1>
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

export const getStaticProps: GetStaticProps<NoticiaDetailPageProps, { id: string }> = async (context) => {
  const id = context.params?.id as string;
  // Aquí buscarías el item de noticia específico por id si fuera necesario
  // const newsItemContent = await fetchNewsItemById(id); 
  return {
    props: {
      id,
      // newsItemContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = newsItemsDataForPaths.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
