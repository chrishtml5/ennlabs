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
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        <Image 
          src="/ennlabs.svg" 
          alt="EnnLabs Logo" 
          width={250}
          height={75}
          className="h-auto w-28 sm:w-36 mx-auto hover-pop transition-transform duration-300 select-none pointer-events-none"
          priority
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <p className="text-xs sm:text-sm font-light tracking-widest uppercase text-white/60 animate-fade-in select-none">
          venture studio
        </p>
        <div className="relative z-10 flex flex-col items-center space-y-1 px-4">
          <h1 className="text-sm sm:text-base font-extralight text-white/80 max-w-[280px] mx-auto leading-relaxed select-none transform translate-y-[-20%]">
            focused on
          </h1>
          <h1 className="text-sm sm:text-base font-extralight text-white/80 max-w-[280px] mx-auto leading-relaxed select-none transform translate-y-[-10%]">
            building a family
          </h1>
          <h1 className="text-sm sm:text-base font-extralight text-white/80 max-w-[280px] mx-auto leading-relaxed select-none">
            of consumer products.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
