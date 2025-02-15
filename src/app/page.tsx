'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.log('Page mounted');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 sm:px-6 py-6 sm:py-8 bg-black relative overflow-hidden">
      {isLoaded && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-110 blur-[2px]"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/death.mp4" type="video/mp4" />
        </video>
      )}
      
      <div className="relative z-10 animate-fade-in w-full max-w-screen-sm px-4">
        <Image 
          src="/ennlabs.svg" 
          alt="EnnLabs Logo" 
          width={162}
          height={48}
          className="h-auto w-24 sm:w-32 mb-3 sm:mb-4 drop-shadow-lg mx-auto select-none pointer-events-none"
          priority
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <h1 className="text-[11px] sm:text-sm font-extralight tracking-wide text-center text-white/70">
          is a venture studio focused on building a family of consumer products
        </h1>
      </div>
    </div>
  );
}
