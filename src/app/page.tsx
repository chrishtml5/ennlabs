'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
      {isLoaded && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-10 scale-110 blur-[1px]"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/death.mp4" type="video/mp4" />
        </video>
      )}
      <div className="relative z-10 space-y-6 px-4">
        <Image 
          src="/ennlabs.svg" 
          alt="EnnLabs Logo" 
          width={162}
          height={48}
          className="h-auto w-28 sm:w-36 mx-auto transform hover:scale-105 transition-transform duration-300 select-none pointer-events-none"
          priority
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <p className="text-xs sm:text-sm font-light tracking-widest uppercase text-white/60 animate-fade-in select-none">
          venture studio
        </p>
        <h1 className="text-sm sm:text-base font-extralight text-white/80 max-w-[280px] mx-auto leading-relaxed select-none">
          focused on building a family of consumer products
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
