import NewsCard from '@/components/news-card';
import Container from '@/components/container';
import Head from 'next/head';
import type { GetStaticProps } from 'next';

// Textos estáticos
const siteTitle = "Equilibrio Dinámico";
const newsPageDict = {
  title: "Noticias y Actualizaciones",
  subtitle: "Mantente al día con las últimas novedades, eventos y anuncios sobre Match Ballance."
};

// Datos de noticias estáticos en español
const newsItemsData = [
  {
    id: '1',
    title: "¡Gran Actualización de Match Ballance!",
    date: '2024-07-15',
    summary: "Descubre los nuevos niveles, power-ups y desafíos que hemos añadido en la última versión de Match Ballance. ¡La diversión nunca termina!",
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game update'
  },
  {
    id: '2',
    title: "Torneo Comunitario: ¡Demuestra tu Habilidad!",
    date: '2024-07-01',
    summary: "Participa en nuestro primer torneo comunitario y gana premios increíbles. Inscríbete ahora y prepárate para la competencia.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game tournament'
  },
  {
    id: '3',
    title: "Conoce al Equipo Detrás de Match Ballance",
    date: '2024-06-20',
    summary: "Una entrevista exclusiva con los desarrolladores de Equilibrio Dinámico. Descubre la inspiración y el proceso creativo del juego.",
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'developer team'
  },
];

interface NoticiasPageProps {
  newsItems: typeof newsItemsData;
}

export default function NoticiasPage({ newsItems }: NoticiasPageProps) {
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
              title={item.title}
              date={item.date}
              summary={item.summary}
              imageUrl={item.imageUrl}
              imageAiHint={item.imageAiHint}
              link={`/noticias/${item.id}`}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<NoticiasPageProps> = async () => {
  // En una aplicación real, aquí podrías obtener los datos de noticias de un CMS o base de datos.
  // Por ahora, usamos los datos estáticos definidos arriba.
  return {
    props: {
      newsItems: newsItemsData,
    },
  };
};
