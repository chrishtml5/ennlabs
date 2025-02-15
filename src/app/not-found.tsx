import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
      <Image 
        src="/ennlabs.svg" 
        alt="EnnLabs Logo" 
        width={162}
        height={48}
        className="h-auto w-28 sm:w-36 mx-auto mb-6 select-none pointer-events-none"
        priority
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      <h1 className="text-sm sm:text-base font-extralight text-white/80">
        Page not found
      </h1>
    </div>
  );
} 