import React, { useState } from 'react';
import { homeData } from './../../mocks/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slides = homeData.slider;

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative w-full h-[716px] overflow-hidden font-montserrat text-white bg-[#23A6F0]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img 
            src={slide.img} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover select-none"
          />

          <div className="relative z-20 max-w-[1050px] mx-auto h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-0">
            <h5 className="font-bold tracking-[0.1px] mb-[35px] uppercase">
              {slide.term}
            </h5>
            <h1 className="text-4xl lg:text-[58px] font-bold mb-[35px] leading-tight uppercase">
              {slide.title}
            </h1>
            <h4 className="text-xl font-normal mb-[35px] max-w-[370px]">
              {slide.description}
            </h4>
            <button className="bg-[#2DC071] hover:bg-[#28a761] px-10 py-4 rounded-md font-bold text-2xl uppercase transition-all">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* OK TUŞLARI */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-2 hover:scale-110 transition-transform opacity-80 hover:opacity-100"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-2 hover:scale-110 transition-transform opacity-80 hover:opacity-100"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* ALT GÖSTERGE ÇİZGİLERİ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[10px] w-[60px] cursor-pointer transition-all ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}