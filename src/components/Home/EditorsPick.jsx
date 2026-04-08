import React from 'react';
import { homeData } from './../../mocks/data';

export default function EditorsPick() {
  const categories = homeData.categories;

  return (
    <section className="bg-[#FAFAFA] py-20 px-4 lg:px-0 font-montserrat">
      <div className="max-w-[1050px] mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-[#252B42]">EDITOR'S PICK</h2>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between 
          </p>
        </div>

        {/* Kategoriler Grid Yapısı */}
        <div className="flex flex-col lg:flex-row gap-[30px] h-auto lg:h-[500px]">
          
          {/* 1. MEN - Büyük Kart */}
          <div className="relative group overflow-hidden flex-1 h-[500px] lg:h-full">
            <img 
              src={categories[0].img} 
              alt={categories[0].name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <button className="bg-white px-12 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                {categories[0].name}
              </button>
            </div>
          </div>

          {/* 2. WOMEN - Orta Kart */}
          <div className="relative group overflow-hidden flex-1 h-[500px] lg:h-full">
            <img 
              src={categories[1].img} 
              alt={categories[1].name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <button className="bg-white px-12 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                {categories[1].name}
              </button>
            </div>
          </div>

          {/* 3. ACCESSORIES & KIDS - Sağdaki İkili Sütun */}
          <div className="flex-1 flex flex-col gap-[30px] h-auto lg:h-full">
            
            {/* Accessories */}
            <div className="relative group overflow-hidden flex-1 h-[242px]">
              <img 
                src={categories[2].img} 
                alt={categories[2].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <button className="bg-white px-6 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                  {categories[2].name}
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="relative group overflow-hidden flex-1 h-[242px]">
              <img 
                src={categories[3].img} 
                alt={categories[3].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <button className="bg-white px-10 py-3 font-bold text-[#252B42] hover:bg-gray-100 transition-colors">
                  {categories[3].name}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}