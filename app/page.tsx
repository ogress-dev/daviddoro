"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircularText from "./components/circularText";
import Logo from "./components/logo";
import Contacts from "./components/contacts";

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

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [isCenter, setIsCenter] = useState(false);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
    setIsCenter(true);
  };

  const handleSlideToTop = () => {
    setIsTop((prev) => !prev);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % chapters.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + chapters.length) % chapters.length);

  return (
    <div className="min-h-screen w-screen bg-blue-100 overflow-hidden p-5 hero-bg flex flex-col items-center justify-center">
      
    <Logo rotation={rotation} isCenter={isCenter} />
      <div
        className={`flex flex-col sm:flex-row gap-10 items-center mt-4 transition-opacity duration-700 ${
          isCenter ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        
        <div className="flex flex-col items-center">
          <Image
            src="/daviddoro.jpg"
            alt="daviddoroimage"
            width={538}
            height={592}
            className="object-cover w-[327px] h-[400px] sm:w-[538px] sm:h-[592px] rounded-[32px] sm:rounded-[40px]"
          />

          {/* Mobile only: read me -> /chaptermobile */}
          <div className="sm:hidden mt-4 w-full flex flex-col items-center gap-3">
            <Link
              href="/chaptermobile"
              className="w-[327px] text-[24px] text-right z-2"
              style={{ fontFamily: "Gyst, serif", fontWeight: 400, fontStyle: "italic", lineHeight: "100%", letterSpacing: "0%", color: "#1E1E1D" }}
            >
              read me
            </Link>

            <CircularText text="Set design | industrial design | Brand Identity | Web Design | Photography | Design Direction | UX&UI | Strategy |"  spinDuration={20} className="custom-class" />

            <div className="flex gap-3 mt-12">
              <Link href="/contact" className=" z-2 w-[140px] h-[48px] rounded-[16px] bg-black shadow-sm flex items-center justify-center">
                <span className="text-[24px] font-bold italic" style={{ color: '#ffffff' }}>Contacts</span>
              </Link>
              <button
                onClick={handleRotate}
                className="z-2 w-[180px] h-[48px] rounded-[16px] bg-white shadow flex items-center justify-center"
              >
                <span className="text-[24px] font-bold italic" style={{ color: '#1E1E1D' }}>have a look</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop area */}
        <div className="hidden sm:flex flex-col justify-between w-[800px]">
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <button onClick={prevSlide} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>←</button>
            <button onClick={nextSlide} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>→</button>

            <div className="overflow-hidden bg-green-100">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {chapters.map((chapter, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <h2 className="text-4xl font-bold mb-6 text-black">{chapter.title}</h2>
                    <p className="text-lg leading-relaxed text-black">{chapter.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-2 space-x-2">
              {chapters.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-black w-6' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>

          <div className="flex flex-row items-end justify-between mt-6 bg-blue-100">
            <div className="w-64 text-sm text-black bg-transparent">
              <p className="text-[24px]">Contact</p>
              <p className="text-[24px] text-orange">hello@dorodavid.com</p>
              <p className="text-[24px]">+39 345 636 6497</p>
              <p className="text-[24px]">Instagram</p>
              <p className="text-[24px]">LinkedIn</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <CircularText text="Set design | industrial design | Brand Identity | Web Design | Photography | Design Direction | UX&UI | Strategy |"  spinDuration={20} className="custom-class" />
              <button onClick={handleRotate} className="z-2 w-[245px] h-[56px] rounded-[20px] bg-white shadow-xl flex items-center justify-center">
                <span style={{ color: '#1E1E1D' }} className="text-[24px]">have a look</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}