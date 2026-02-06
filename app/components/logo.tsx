import React from "react";
import Image from "next/image";
export default function Logo() {
  return (

    <>
      <div className="text-start flex flex-row gap-10">

        {/* desktop one */}
        <div className="hidden sm:flex flex-col">
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
        <div className="sm:hidden flex text-start flex-col items-start">
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
          style={{ aspectRatio: '7/11' }}
        />
      </div>
    </>
    // <div className="flex items-center gap-6" role="banner" aria-label="David Doro Brand & Product Design">
    //   <div className="flex flex-col">
    //     {/* Main name: mobile lowercase, desktop capitalized with ® */}
    //     <span className="sm:hidden font-satoshi font-bold text-[48px] leading-[56px] tracking-[-0.02em] lowercase text-center" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D' }}>
    //       daviddoro<span className="text-[28px] align-top">®</span>
    //     </span>

    //     <span className="hidden sm:inline font-satoshi font-bold text-[112px] leading-[124px] tracking-[-0.02em]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D' }}>
    //       David Doro<span className="text-[28px] align-top">®</span>
    //     </span>

    //     {/* Subtitle: mobile stacked, desktop single line */}
    //     <div className="mt-[-2px]">
    //       {/* Mobile: "brand & product" on one line, "design" on second line */}
    //       <div className="sm:hidden ">
    //         <div className="text-[45px] font-satoshi font-bold leading-[56px] tracking-[-0.02em] lowercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D' }}>
    //           brand <span className="inline-block" style={{ fontFamily: 'Gyst, serif', fontWeight: 400 }}>&</span> product
    //         </div>
    //         <div className="text-[48px] font-satoshi font-bold leading-[56px] tracking-[-0.02em] lowercase" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D' }}>
    //           design
    //         </div>
    //       </div>

    //       {/* Desktop: single line "Brand & Product Design" */}
    //       <div className="hidden sm:block">
    //         <span className="text-[112px] font-satoshi font-bold leading-[124px] tracking-[-0.02em]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D' }}>
    //           Brand <span className="mx-[-0.05em]" style={{ fontFamily: 'Gyst, serif', fontWeight: 400 }}>&</span> Product Design
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Shaka image placed to the right of the logo text. Put `shaka.png` in `public/shaka.png`. */}
    //   <img
    //     src="/shaka.png"
    //     alt="Shaka"
    //     className="w-[86.545px] h-[136px] sm:w-[153px] sm:h-[240px] object-contain translate-y-[70%] sm:translate-y-[0%] translate-x-[-80%] sm:translate-x-[0%]"
    //     style={{ aspectRatio: '7/11' }}
    //   />
    // </div>
  );
}