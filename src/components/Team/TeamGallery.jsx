import React from 'react';

const TeamGallery = ({ images }) => {
    return (
        <section className="w-full flex flex-col lg:flex-row gap-2 h-auto lg:h-[530px]">
            {/* Ana Büyük Görsel */}
            <div className="flex-1 overflow-hidden group">
                <img
                    src={images.main}
                    alt="Team Main"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
            </div>

            {/* Küçük Görseller */}
            <div className="flex-1 grid grid-cols-2 gap-2">
                {[images.sideTopLeft, images.sideTopRight, images.sideBottomLeft, images.sideBottomRight].map((src, idx) => (
                    <div key={idx} className="overflow-hidden group">
                        <img 
                            src={src} 
                            alt={`Team side ${idx + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamGallery;