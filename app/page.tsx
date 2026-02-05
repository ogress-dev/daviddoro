// components/HeroSection.tsx
"use client"
import React from "react";
import Image from "next/image";
import Logo from "./components/logo"; // Your logo component
import CircularText from "./components/circularText";
import { style } from "motion/react-client";

const chapters = [
  {
    title: "chapter 1",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
              Pellentesque commodo lacus at sodales sodales. 
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.`
  },
  {
    title: "chapter 2",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
              Pellentesque commodo lacus at sodales sodales. 
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.`
  },
  {
    title: "chapter 3",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. 
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. 
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. 
              Pellentesque commodo lacus at sodales sodales. 
              Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.`
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [showArrows, setShowArrows] = React.useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % chapters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (

    <div className="h-screen p-8 bg-blue-100 w-screen"
      style={{
        backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.3), rgba(188, 184, 184, 0.3)),
    url("/bg.png")
  `,
        backgroundColor: 'lightgray',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}


    >
      {/* Logo */}
      <Logo />

      <div className="flex flex-row gap-10">
        <div className="flex bg-blue-100 ">
          <Image
            src="/daviddoro.jpg"
            alt="daviddoroimage"
            width={1000}
            height={1000}
            className="object-cover h-[480px] w-[592px] rounded-[40px]"
            priority
          />
        </div>
        {/* chapter and */}
        <div className="flex  flex-col justify-between w-[800px]">
          <div

            className="items-center flex flex-col"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            {/* Navigation Arrows (hidden by default, visible on hover) */}
            <button
              onClick={prevSlide}
              className={`
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
            w-10 h-10 flex items-center justify-center
            text-gray-400 hover:text-gray-800 transition-all duration-300
            ${showArrows ? 'opacity-100' : 'opacity-0'}
          `}
              aria-label="Previous chapter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className={`
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
            w-10 h-10 flex items-center justify-center
            text-gray-400 hover:text-gray-800 transition-all duration-300
            ${showArrows ? 'opacity-100' : 'opacity-0'}
          `}
              aria-label="Next chapter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Current Chapter Content */}
            <div className="transition-opacity duration-500 ease-in-out">
              <h2
                className="text-[24px] font-bold mb-2"
                style={{
                  fontFamily: 'gyst, san-serif',
                  fontWeight: 700,
                  color: '#1E1E1D',
                  letterSpacing: '0%',
                  lineHeight: '100%'
                }}
              >
                {chapters[currentSlide].title}
              </h2>

              <p
                className="text-lg leading-relaxed text-black"
              // style={{
              //   fontFamily: 'Satoshi, sans-serif',
              //   fontWeight: 400,
              //   color: '#1E1E1D',
              //   letterSpacing: '0%',
              //   lineHeight: '100%'
              // }}
              >
                {chapters[currentSlide].content}
              </p>
            </div>

            {/* Chapter Indicators */}
            <div className="flex space-x-3 h-10 bg-blue-300 mt-4 justify-center"
              style={{
                width: '56px',
                height: '8px',
                top: '626px',
                left: '1044px'
              }}
            >
              {chapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}

                  className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-gray-800'
                    : 'bg-white hover:bg-gray-400'
                    }`}
                  aria-label={`Go to chapter ${index + 2}`}
                />
              ))}
            </div>
          </div>
          {/* contacts and circle */}
          <div className="flex flex-row items-end justify-between ">
            <div className="w-64 text-sm text-black bg-transparent">
              <p className="mb-2 text-[24px]">Contact</p>

              <p className="mb-2 text-[24px] text-orange">hello@dorodavid.com</p>

              <p className="mb-2 text-[24px]">+39 345 636 6497</p>

              <p className="mb-2 text-[24px]">Instagram</p>
              <p className="mb-2 text-[24px]">LinkedIn</p>
            </div>
            <div className="flex items-center justify-center">
              <CircularText
                text="Set design | industrial design | Brand Identity | Web Design | Photography | Design Direction | UX&UI | Strategy |"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
              <button
                className="w-[245px] h-[56px] rounded-[20px] bg-white shadow-xl"
              >
                <span
                  style={{
                    color: '#1E1E1D'
                  }}

                  className="text-[24px]"
                >have a look</span>
                <Image src="/uparrow.png"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="inline-block ml-2"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}