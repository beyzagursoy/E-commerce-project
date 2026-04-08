import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetailSlider = ({ images, currentSlide, setCurrentSlide, nextSlide, prevSlide, productTitle }) => {
    
    const safeImages = Array.isArray(images) && images.length > 0 
        ? images.map(img => (typeof img === 'string' ? img : img.url))
        : ["https://via.placeholder.com/600"]; 

    return (
        <div className="flex-1 flex flex-col gap-4">
            {/* 1. ANA GÖRSEL ALANI */}
            <div className="relative group rounded-sm bg-white overflow-hidden aspect-[1/1.2]">
                <img
                    src={safeImages[currentSlide]}
                    alt={productTitle}
                    className="w-full h-full object-contain md:object-cover shadow-sm transition-all duration-500"
                />
                
                {safeImages.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-all z-10 drop-shadow-2xl"
                        >
                            <ChevronLeft size={48} strokeWidth={2} />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-all z-10 drop-shadow-2xl"
                        >
                            <ChevronRight size={48} strokeWidth={2} />
                        </button>
                    </>
                )}
            </div>

            {/* 2. THUMBNAILS (KÜÇÜK RESİMLER) */}
            <div className="flex gap-4">
                {safeImages.map((img, index) => (
                    <div 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-24 h-24 cursor-pointer transition-all overflow-hidden bg-gray-100 rounded border-2 ${
                            currentSlide === index 
                            ? 'opacity-100 border-[#23A6F0]' 
                            : 'opacity-50 hover:opacity-100 border-transparent'
                        }`}
                    >
                        <img
                            src={img}
                            alt={`thumb-${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetailSlider;