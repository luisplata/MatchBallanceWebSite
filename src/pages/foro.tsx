import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { MessageSquare } from 'lucide-react';
import Head from 'next/head';

// Textos estáticos
const siteTitle = "Match Ballance";
const forumDict = {
  title: "Foro de la Comunidad",
  subtitle: "¡Nuestro foro comunitario está en camino! Pronto podrás unirte a discusiones, compartir tus experiencias, obtener ayuda y conectar con otros jugadores de Match Ballance.",
  infoText: "Mientras tanto, puedes encontrarnos en nuestras redes sociales."
};

export default function ForoPage() {
  return (
    <>
      <Head>
        <title>{`${forumDict.title} - ${siteTitle}`}</title>
      </Head>
      <Container className="py-12 md:py-20 text-center">
        <MessageSquare className="mx-auto h-24 w-24 text-primary mb-8" />
        <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl mb-6">
          {forumDict.title}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          {forumDict.subtitle}
        </p>
        <p className="mt-6 text-lg text-foreground/80">
          {forumDict.infoText}
        </p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </Container>
    </>
  );
}

// No getStaticProps o getStaticPaths necesarios