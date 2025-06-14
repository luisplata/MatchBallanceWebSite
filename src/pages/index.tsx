
import Head from 'next/head';
import Image from 'next/image';
import DownloadButtons from '@/components/download-buttons';

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  console.log('NEXT_PUBLIC_BASE_PATH:', basePath); // Added for validation

  return (
    <>
      <Head>
        <title>Match Ballance - The Game</title>
        <meta name="description" content="Match Ballance - The Game. Official Website." />
      </Head>
      <div
        className="relative min-h-screen w-full flex flex-col items-stretch justify-stretch bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: `url(${basePath}/images/MainBG.png)` }}
        data-ai-hint="game promotional background"
      >
        {/* Container for positioning elements and overall padding */}
        <div className="relative flex-grow flex flex-col p-4 md:p-8">

          {/* Main Content Area: Arranges Left Stack (Label + Logo) and Right (Mobile) */}
          <div className="flex-grow flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between w-full max-w-screen-xl mx-auto md:pt-12 pb-20 md:pb-24 md:px-12">

            {/* Left Stack: Label over Logo */}
            <div className="md:w-3/5 w-full flex flex-col items-center space-y-4 md:space-y-8 mb-8 md:mb-0">
              {/* Label Container */}
              <div className="w-full transform md:-ml-[50%]"> {/* Reverted to md:-ml-[50%] */}
                <Image
                  src="/images/Label.png"
                  alt="MatchBallance Studios"
                  width={270}
                  height={68}
                  layout="responsive"
                  data-ai-hint="studio logo banner"
                  priority
                />
              </div>
              {/* Logo Container */}
              <div className="w-full transform transition-transform hover:scale-105 md:flex md:flex-grow md:items-center md:justify-center">
                <Image
                  src="/images/LogoHero.png"
                  alt="Match Ballance The Game"
                  width={480}
                  height={270}
                  layout="responsive"
                  data-ai-hint="game title logo"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Phone Mockup */}
            <div className="md:w-2/5 flex justify-center transform transition-transform hover:scale-105">
              <Image
                src="/images/Movile.jpg"
                alt="Game on Phone Screen"
                width={270}
                height={550}
                data-ai-hint="phone mockup gameplay"
                className="object-contain h-full"
              />
            </div>
          </div>

          {/* Bottom Area: Download Buttons */}
          <div className="absolute bottom-4 md:bottom-8 inset-x-0 mx-auto max-w-xs sm:max-w-sm md:max-w-md z-10 px-4">
            <DownloadButtons />
          </div>
        </div>
      </div>
    </>
  );
}
