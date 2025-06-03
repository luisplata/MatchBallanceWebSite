import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';
import type { Locale } from '@/i18n-config';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  imageAiHint: string;
  link: string;
  locale: Locale;
  readMoreText: string;
}

export default function NewsCard({ title, date, summary, imageUrl, imageAiHint, link, locale, readMoreText }: NewsCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[16/9] relative w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={imageAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <CardTitle className="text-xl font-headline text-primary hover:text-primary/80 transition-colors">
          <Link href={link}>{title}</Link>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <p className="text-foreground/80 leading-relaxed">
          {summary}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" asChild className="w-full sm:w-auto group">
          <Link href={link}>
            {readMoreText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
