import React from 'react';
import { homeData } from '../mocks/data';
import ProductCard from './ProductCard';

export default function Bestseller() {
  const products = homeData.products;

  return (
    <section className="py-20 px-4 lg:px-0 bg-white">
      <div className="max-w-[1050px] mx-auto">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-12 flex flex-col gap-2.5">
          <h4 className="text-xl text-[#737373] font-normal tracking-[0.2px]">
            Featured Products
          </h4>
          <h3 className="text-2xl font-bold text-[#252B42] uppercase">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-sm leading-5">
            Problems trying to resolve the conflict between 
          </p>
        </div>

        {/* Ürün Listesi - Grid Yapısı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}