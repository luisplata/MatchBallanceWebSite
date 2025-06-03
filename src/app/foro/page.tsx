import Container from '@/components/container';
import { MessageSquare } from 'lucide-react';

export default function ForoPage() {
  return (
    <Container className="text-center">
      <MessageSquare className="mx-auto h-24 w-24 text-primary mb-8" />
      <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl mb-6">Foro de la Comunidad</h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
        ¡Nuestro foro comunitario está en camino! Pronto podrás unirte a discusiones, compartir tus experiencias, obtener ayuda y conectar con otros jugadores de Match Ballance.
      </p>
      <p className="mt-6 text-lg text-foreground/80">
        Mientras tanto, puedes encontrarnos en nuestras redes sociales.
      </p>
      {/* Consider adding SocialLinks component here if desired */}
    </Container>
  );
}
