import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 group cursor-pointer font-montserrat">
        
      <div className="w-full h-[427px] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2.5 pb-8 px-6">
        <h5 className="text-[#252B42] font-bold text-base leading-6">
          {product.title}
        </h5>
        <p className="text-[#737373] font-bold text-sm leading-6">
          {product.department}
        </p>
        
        <div className="flex justify-center gap-2 font-bold text-base py-1">
          <span className="text-[#BDBDBD]">{product.price}</span>
          <span className="text-[#23856D]">{product.salePrice}</span>
        </div>

        <div className="flex justify-center gap-1.5 mt-2">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className={`w-4 h-4 rounded-full ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}