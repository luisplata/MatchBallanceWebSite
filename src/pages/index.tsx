import Head from 'next/head';
import Image from 'next/image';
import DownloadButtons from '@/components/download-buttons';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Match Ballance - The Game</title>
        <meta name="description" content="Match Ballance - The Game. Official Website." />
      </Head>
      <div
        className="relative min-h-screen w-full flex flex-col items-stretch justify-stretch bg-cover bg-center bg-no-repeat text-white overflow-hidden"
        style={{ backgroundImage: "url('https://storage.googleapis.com/altarr_nextjs_app_images/6bb4b9c3-f10a-4a43-9368-5b12b8c56711.png')" }}
        data-ai-hint="game promotional background"
      >
        {/* Container for positioning elements */}
        <div className="relative flex-grow flex flex-col p-4 md:p-8">

          {/* Top Left: Studio Label */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
            <Image
              src="/images/Label.png" 
              alt="MatchBallance Studios"
              width={280} 
              height={50}  
              data-ai-hint="studio logo banner"
              priority 
            />
          </div>

          {/* Main Content Area: Game Logo and Phone */}
          <div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl mx-auto pt-16 md:pt-24 pb-24 md:pb-32">
            {/* Left/Top on mobile: Game Logo */}
            <div className="w-full md:w-3/5 lg:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 transform transition-transform hover:scale-105">
              <Image
                src="/images/LogoHero.png" 
                alt="Match Ballance The Game"
                width={480} 
                height={270} 
                data-ai-hint="game title logo"
                priority
              />
            </div>

            {/* Right/Bottom on mobile: Phone Mockup */}
            <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 flex justify-center md:justify-end transform transition-transform hover:scale-105">
              <Image
                src="/images/Movile.jpg" 
                alt="Game on Phone Screen"
                width={270} 
                height={550} 
                data-ai-hint="phone mockup gameplay"
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Area: Download Buttons */}
          <div className="absolute bottom-4 md:bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:w-full sm:max-w-sm md:max-w-md mx-auto z-10">
            <DownloadButtons />
          </div>
        </div>
      </div>
    </>
  );
}
