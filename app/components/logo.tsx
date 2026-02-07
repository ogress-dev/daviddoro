'use client';
import Image from 'next/image';

interface LogoProps {
  rotation?: number;
  isCenter?: boolean;
}

export default function Logo({ rotation = 0, isCenter = false }: LogoProps) {
  return (
    <div className="relative w-full p-5 flex justify-center items-center">
      <div className="text-start flex flex-row gap-10">

        {/* desktop one */}
        <div 
          className="hidden sm:flex flex-col"
          style={{ opacity: isCenter ? 0 : 1, transition: 'opacity 0.7s ease-in-out' }}
        >
          <h1 className="text-[64px] lg:text-[112px] text-black font-semibold leading-[1] tracking-[-0.02em]">
            David Doro <span className="text-[16px] lg:text-[20px] align-top">®</span>
          </h1>

          <div className="flex items-center gap-2">
            <span className="text-black text-[64px] lg:text-[112px] font-bold leading-none">
              Brand
            </span>
            <span className="text-black text-[64px] lg:text-[112px] leading-none">
              &
            </span>
            <span className="text-black text-[64px] lg:text-[112px] font-bold leading-none">
              Product Design
            </span>
          </div>
        </div>


        {/* mobile one */}
        <div 
          className="sm:hidden flex text-start flex-col items-start"
          style={{ opacity: isCenter ? 0 : 1, transition: 'opacity 0.7s ease-in-out' }}
        >
          <h1 className="text-[48px] text-black font-bold leading-none tracking-[-0.02em] pl-15">
            David
            <span className="relative inline-block">
              Doro
              <span className="text-[20px] align-top">®</span>
            </span>
          </h1>

          <div className="flex  items-start flex-col pl-15">
            <span className="text-black text-[48px] sm:text-[112px] whitespace-nowrap items-center tracking-[-0.02em]">
              <span className="font-bold tracking-[-0.02em]">Brand</span>
              <span className="font-normal opacity-80"> & <span className="font-bold">Product</span></span>
            </span>

            <span className="text-black text-[48px] sm:text-[112px] font-bold">Design</span>
          </div>
        </div>
        <Image
          src="/shaka.png"
          alt="Shaka"
          width={1000}
          height={1000}
          className="w-[86.545px] h-[136px] sm:w-[153px] sm:h-[240px] object-contain translate-y-[90%] sm:translate-y-[0%] translate-x-[-150%] sm:translate-x-[0%]"
          style={{ 
            aspectRatio: '7/11',
            transform: isCenter 
              ? `translate(calc(-50vw + 50%), calc(50vh)) rotate(${rotation}deg)`
              : `rotate(${rotation}deg)`,
            transition: 'transform 0.7s ease-in-out'
          }}
        />
      </div>
    </div>
  );
}
