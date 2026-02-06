"use client"
import { useState } from "react";

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

interface ChapterMobileProps {
  onBack?: () => void;
}

export default function ChapterMobile({ onBack }: ChapterMobileProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-[327px] flex flex-col">
      <h3 className="text-[24px] font-bold mb-2 text-left" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 700, color: '#1E1E1D', lineHeight: '100%' }}>
        {chapters[currentIndex].title}
      </h3>
      <p className="text-[24px] leading-relaxed text-left text-black mb-4">{chapters[currentIndex].content}</p>
      
      {/* Indicators */}
      <div className="flex gap-2 justify-center mb-4">
        {chapters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Back button */}
      <button 
        onClick={onBack}
        className="text-[24px] text-center border border-black rounded-2xl py-2 w-full"
        style={{ fontFamily: 'Gyst, serif', fontWeight: 400, fontStyle: 'italic', lineHeight: '100%', letterSpacing: '0%', color: '#1E1E1D' }}
      >
        back
      </button>
    </div>
  );
}