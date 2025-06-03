import Container from '@/components/container';
import SocialLinks from '@/components/social-links';
import { MessageSquare } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

interface ForoPageProps {
  locale: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function ForoPage({ dictionary }: ForoPageProps) {
  const forumDict = dictionary.forumPage;
  const siteTitle = dictionary.siteTitle;

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

export const getStaticProps: GetStaticProps<ForoPageProps, { locale: Locale }> = async ({ params }) => {
  const locale = params?.locale || i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  return {
    props: {
      locale,
      dictionary,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18n.locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};
