import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-6" role="banner" aria-label="David Doro Brand & Product Design">
      <div className="flex flex-col">
      {/* Main "David Doro®" */}
      <span 
        className="font-satoshi font-bold text-[112px] leading-[124px] tracking-[-0.02em]"
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 700,
          fontSize: '112px',
          lineHeight: '124px',
          letterSpacing: '-0.02em',
          color: '#1E1E1D'
        }}
      >
        David Doro<span className="text-[28px] align-top">®</span>
      </span>
      
      {/* Subtitle "Brand & Product Design" with Gyst ampersand */}
      <div className="flex items-baseline mt-[-16px]">
        <span 
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: '112px',
            lineHeight: '124px',
            letterSpacing: '-0.02em',
            color: '#1E1E1D'
          }}
        >
          Brand
        </span>
        
        {/* Gyst ampersand */}
        <span 
          className="mx-[-0.05em]" // Negative margin to account for letter spacing
          style={{
            fontFamily: 'Gyst, serif',
            fontWeight: 400,
            fontSize: '112px',
            lineHeight: '124px',
            letterSpacing: '-0.05em',
            color: '#1E1E1D',
            display: 'inline-block',
            transform: 'translateY(0.1em)' // Fine-tune vertical alignment
          }}
        >
          &
        </span>
        
        <span 
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: '112px',
            lineHeight: '124px',
            letterSpacing: '-0.02em',
            color: '#1E1E1D'
          }}
        >
          Product Design
        </span>
      </div>
      </div>

      {/* Shaka image placed to the right of the logo text. Put `shaka.png` in `public/shaka.png`. */}
      <img src="/shaka.png" alt="Shaka" className="w-[153px] h-[240px] object-contain" />
    </div>
  );
}