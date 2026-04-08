import React, { useState } from 'react';
import { homeData } from './../../mocks/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClassicSection() {
  const [current, setCurrent] = useState(0);
  const slides = homeData.slider2;

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="relative bg-[#23856D] w-full min-h-[800px] lg:h-[712px] overflow-hidden font-montserrat text-white flex items-center">
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="max-w-[1050px] mx-auto px-8 lg:px-0 flex flex-col lg:flex-row items-center justify-between w-full h-full pt-16 lg:pt-0">
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 flex-1 order-1 lg:order-none pt-10">
              <h5 className="text-xl font-normal tracking-[0.1px] mb-8 lg:mb-10 ">
                {slide.term}
              </h5>
              <h1 className="text-4xl lg:text-[58px] font-bold leading-[50px] lg:leading-[80px] mb-8 lg:mb-10 max-w-[280px] lg:max-w-none ">
                {slide.title}
              </h1>
              <h4 className="text-sm lg:text-xl font-normal mb-8 lg:mb-10 max-w-[300px] lg:max-w-[440px] leading-6">
                {slide.description}
              </h4>
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[34px] mb-12 lg:mb-0">
                <span className="text-2xl font-bold">{slide.price}</span>
                <button className="bg-[#2DC071] hover:bg-[#28a761] px-10 py-4 rounded-md font-bold text-sm uppercase transition-all tracking-[0.2px]">
                  {slide.buttonText}
                </button>
              </div>
            </div>

            <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-end h-full relative z-10 mt-auto order-2 lg:order-none">
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="w-[90%] lg:w-full max-w-[443px] lg:max-w-none object-contain lg:translate-y-[80px]" 
              />
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-[55%] lg:top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-[55%] lg:top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 gap-2">
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