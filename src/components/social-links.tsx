import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialPlatforms = [
  { name: 'Facebook', Icon: Facebook, href: '#', color: 'text-blue-600 hover:text-blue-700' },
  { name: 'Twitter', Icon: Twitter, href: '#', color: 'text-sky-500 hover:text-sky-600' },
  { name: 'Instagram', Icon: Instagram, href: '#', color: 'text-pink-500 hover:text-pink-600' },
  { name: 'YouTube', Icon: Youtube, href: '#', color: 'text-red-600 hover:text-red-700' },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-4">
      {socialPlatforms.map((platform) => (
        <Button key={platform.name} variant="ghost" size="icon" asChild className="transform transition-transform hover:scale-110">
          <Link href={platform.href} target="_blank" rel="noopener noreferrer" aria-label={`Visita nuestro ${platform.name}`}>
            <platform.Icon className={`h-7 w-7 ${platform.color}`} />
          </Link>
        </Button>
      ))}
    </div>
  );
}
