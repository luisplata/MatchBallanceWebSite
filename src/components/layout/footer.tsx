import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import SocialLinks from '@/components/social-links'; // Re-using SocialLinks for consistency

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © {currentYear} Equilibrio Dinámico. Todos los derechos reservados.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
