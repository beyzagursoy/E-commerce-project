import React from 'react';
import { homeData } from '../mocks/data';

const NeuralUniverse = () => {
  const item = homeData.cart[0];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          <div className="w-full md:w-1/2">
            <img 
              src={item.img} 
              alt="Neural Universe" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xs font-medium text-gray-400 tracking-widest mb-4 uppercase">
              {item.term}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Part of the<br className="md:hidden" /> Neural<br className="hidden md:block" /> Universe
            </h2>
            
            <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md">
              {item.description}
            </p>
            
            <div className="flex flex-col items-center gap-3 md:hidden w-full">
              <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-3 px-10 rounded uppercase tracking-wide transition-colors duration-200 w-auto">
                {item.buttonText}
              </button>
              
              <button className="border border-sky-500 text-sky-500 hover:bg-sky-50 text-xs font-bold py-3 px-10 rounded uppercase tracking-wide transition-colors duration-200 w-auto">
                {item.buttonText2}
              </button>
            </div>

            <div className="hidden md:flex flex-wrap gap-4">
              <button className="bg-[#2DC071] hover:bg-[#28a761] text-white font-bold py-3 px-8 rounded transition-colors duration-200">
                {item.buttonText}
              </button>
              
              <button className="border border-[#2DC071] text-[#2DC071] hover:bg-[#2DC071] hover:text-white font-bold py-3 px-8 rounded transition-colors duration-200">
                {item.buttonText2}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;