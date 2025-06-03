import GameShowcase from '@/components/game-showcase';
import DownloadButtons from '@/components/download-buttons';
import SocialLinks from '@/components/social-links';
import Container from '@/components/container';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <Container className="text-center">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Equilibrio Dinámico
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl md:max-w-2xl mx-auto">
            ¡Bienvenido al vibrante mundo de <span className="font-bold text-primary">Match Ballance</span>! Prepárate para una experiencia de juego adictiva donde tu precisión y estrategia se ponen a prueba.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform transition-transform hover:scale-105">
              <Link href="#descargas">
                Descargar Ahora
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md transform transition-transform hover:scale-105">
              <Link href="#showcase">
                Ver Gameplay <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Game Showcase Section */}
      <section id="showcase" className="py-12 md:py-20">
        <Container>
          <h2 className="text-3xl font-headline font-bold text-center text-primary mb-2">Showcase del Juego</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Sumérgete en la acción con videos e imágenes que capturan la esencia de Match Ballance.
          </p>
          <GameShowcase />
        </Container>
      </section>

      <Separator />

      {/* Download Buttons Section */}
      <section id="descargas" className="py-12 md:py-20 bg-primary/5">
        <Container>
          <h2 className="text-3xl font-headline font-bold text-center text-primary mb-2">Descargas Directas</h2>
           <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Obtén Match Ballance para tu dispositivo iOS o Android y comienza la aventura.
          </p>
          <DownloadButtons />
        </Container>
      </section>
      
      <Separator />

      {/* Social Connection Section */}
      <section className="py-12 md:py-20">
        <Container>
          <h2 className="text-3xl font-headline font-bold text-center text-primary mb-2">Únete a la Comunidad</h2>
           <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            Comparte tus logros, desafíos y conecta con otros jugadores en nuestras redes sociales.
          </p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </Container>
      </section>
    </div>
  );
}
