import React from 'react';
import { homeData } from '../mocks/data';

const NeuralUniverse = () => {
  const data = homeData.cart[0];

  if (!data) return null;

  return (
    <section className="bg-white w-full font-montserrat overflow-hidden">
      {/* Container Yapısı: 
          - Mobilde: flex-col (Üstte metin, altta görsel)
          - Masaüstü: lg:flex-row (Solda görsel, sağda metin)
          - items-center: Masaüstünde metni dikeyde görselin tam ortasına hizalar.
          - px-8: Diğer bölümlerle (Bestseller vb.) dikey hizayı korur.
      */}
      <div className="max-w-[1050px] mx-auto flex flex-col lg:flex-row items-center px-8 lg:px-0">
        
        {/* SOL TARAF (Masaüstü) / ALT TARAF (Mobil): GÖRSEL 
            - lg:order-1: Masaüstünde başa (sola) geçer.
            - order-2: Mobilde alta geçer.
        */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
          <img 
            src={data.img} 
            alt={data.title} 
            // - max-w-none: Görselin kısıtlanmadan büyük durmasını sağlar.
            // - scale-110: Mobildeki o dolgun ve taşan görüntüyü yakalar.
            className="w-full h-auto object-contain max-w-[450px] lg:max-w-none select-none scale-110 lg:scale-100"
          />
        </div>

        {/* SAĞ TARAF (Masaüstü) / ÜST TARAF (Mobil): METİN İÇERİĞİ 
            - order-1: Mobilde en üstte durur.
            - lg:pl-16: Masaüstünde görselle metin arasına estetik boşluk bırakır.
        */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-16 pb-12 lg:py-32 order-1 lg:order-2 lg:pl-16">
          
          <h5 className="text-[#BDBDBD] font-bold text-base tracking-[0.1px] mb-[30px] uppercase">
            {data.term}
          </h5>
          
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px] mb-[30px] max-w-[375px] ">
            {data.title}
          </h2>
          
          <p className="text-[#737373] text-xl leading-[30px] mb-[30px] max-w-[375px]">
            {data.description}
          </p>
          
          {/* BUTONLAR: 
              - Mobilde: Mavi (#23A6F0) ve Tam Genişlik (w-full)
              - Masaüstü: Yeşil (#2DC071) ve İçerik Kadar (lg:w-auto)
          */}
          <div className="flex flex-col sm:flex-row gap-[15px] w-full lg:w-auto">
            <button className="bg-[#23A6F0] lg:bg-[#2DC071] hover:opacity-90 text-white px-10 py-4 rounded-[5px] font-bold text-sm tracking-[0.2px] uppercase transition-all whitespace-nowrap w-full lg:w-auto">
              {data.buttonText}
            </button>
            
            <button className="border border-[#23A6F0] lg:border-[#2DC071] text-[#23A6F0] lg:text-[#2DC071] hover:bg-gray-50 px-10 py-4 rounded-[5px] font-bold text-sm tracking-[0.2px] uppercase transition-all whitespace-nowrap w-full lg:w-auto">
              {data.buttonText2 || "READ MORE"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeuralUniverse;