import NewsCard from '@/components/news-card';
import Container from '@/components/container';

// Placeholder data for news items
const newsItems = [
  {
    id: '1',
    title: '¡Gran Actualización de Match Ballance!',
    date: '2024-07-15',
    summary: 'Descubre los nuevos niveles, power-ups y desafíos que hemos añadido en la última versión de Match Ballance. ¡La diversión nunca termina!',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game update'
  },
  {
    id: '2',
    title: 'Torneo Comunitario: ¡Demuestra tu Habilidad!',
    date: '2024-07-01',
    summary: 'Participa en nuestro primer torneo comunitario y gana premios increíbles. Inscríbete ahora y prepárate para la competencia.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'game tournament'
  },
  {
    id: '3',
    title: 'Conoce al Equipo Detrás de Match Ballance',
    date: '2024-06-20',
    summary: 'Una entrevista exclusiva con los desarrolladores de Equilibrio Dinámico. Descubre la inspiración y el proceso creativo del juego.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'developer team'
  },
];

export default function NoticiasPage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">Noticias y Actualizaciones</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mantente al día con las últimas novedades, eventos y anuncios sobre Match Ballance.
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
            link={`/noticias/${item.id}`} // Placeholder link to a detailed news page
          />
        ))}
      </div>
    </Container>
  );
}
