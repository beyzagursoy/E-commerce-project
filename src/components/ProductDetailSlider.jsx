import React from 'react';

const ProductDetailSlider = ({ images, currentSlide, setCurrentSlide, nextSlide, prevSlide, productTitle }) => {
    return (
        <div className="flex-1">
            <div className="relative group overflow-hidden rounded-sm">
                <img
                    src={images[currentSlide]}
                    alt={productTitle}
                    className="w-full aspect-[1/1.1] object-cover shadow-sm transition-all duration-500"
                />
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100 z-10"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100 z-10"
                >
                    ›
                </button>
            </div>
            <div className="flex gap-4 mt-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-24 h-24 object-cover cursor-pointer transition-all ${
                            currentSlide === index ? 'opacity-100 border-2 border-[#23A6F0]' : 'opacity-50'
                        }`}
                        alt="thumb"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductDetailSlider;