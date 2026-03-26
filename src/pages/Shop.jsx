import React from 'react';
import { homeData } from '../mocks/data'; 
import { LayoutGrid, List, ChevronRight } from 'lucide-react';

const Shop = () => {
    const { shop, shopProducts } = homeData;

    return (
        <div className="font-montserrat">
            {/* 1. BREADCRUMB & PAGE TITLE */}
            <div className="bg-[#FAFAFA] py-6 px-8 lg:px-0">
                <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>
                    <div className="flex items-center gap-4 text-sm font-bold">
                        <span className="text-[#252B42]">Home</span>
                        <ChevronRight size={16} className="text-[#BDBDBD]" />
                        <span className="text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
            </div>

            {/* 2. CATEGORY CARDS (Top 5 Categories) */}
            <div className="bg-[#FAFAFA] pb-12 px-8">
                <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
                    {shop.categories.map((cat, index) => (
                        <div key={index} className="relative group cursor-pointer overflow-hidden h-[223px]">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                                <h5 className="font-bold text-base tracking-[0.1px]">{cat.name}</h5>
                                <p className="text-sm font-normal">{cat.items}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. FILTER BAR */}
            <div className="py-6 px-8 border-b border-[#ECECEC]">
                <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#737373] font-bold text-sm">Showing all {shopProducts.length} results</p>
                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-4">
                            <button className="p-4 border border-[#ECECEC] rounded-[5px] active:text-[#23A6F0] hover:bg-gray-50">
                                <LayoutGrid size={16} />
                            </button>
                            <button className="p-4 border border-[#ECECEC] rounded-[5px] text-[#737373] hover:bg-gray-50">
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <select className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3 px-4 rounded-[5px] text-sm focus:outline-none cursor-pointer">
                            <option>Popularity</option>
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-[5px] font-bold text-sm hover:bg-[#1a8cd1] transition-colors">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. PRODUCT GRID - */}
            <div className="py-12 px-8 lg:px-0">
                <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
                    {shopProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex flex-col items-center text-center group cursor-pointer w-full max-w-[239px] ${index >= 3 ? 'hidden md:flex' : 'flex'
                                }`}
                        >
                            {/* Ürün Görseli */}
                            <div className="w-full aspect-[239/300] mb-6 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Ürün Bilgileri */}
                            <h5 className="text-[#252B42] font-bold text-base mb-2.5">{product.title}</h5>
                            <p className="text-[#737373] font-bold text-sm mb-2.5">{product.department}</p>

                            {/* Fiyatlar */}
                            <div className="flex gap-1.5 mb-2.5 font-bold text-base justify-center w-full">
                                <span className="text-[#BDBDBD]">{product.price}</span>
                                <span className="text-[#23856D]">{product.salePrice}</span>
                            </div>

                            {/* Renk Seçenekleri */}
                            <div className="flex gap-1.5 justify-center w-full">
                                {product.colors.map((color, i) => (
                                    <div key={i} className={`w-4 h-4 rounded-full ${color}`} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. PAGINATION */}
                <div className="flex justify-center mt-20">
                    <div className="flex border border-[#BDBDBD] rounded-[7px] overflow-hidden font-bold text-sm shadow-sm">
                        <button className="px-6 py-6 border-r border-[#BDBDBD] text-[#BDBDBD] bg-[#F3F3F3] hover:bg-[#ECECEC]">First</button>
                        <button className="px-5 py-6 border-r border-[#BDBDBD] text-[#23A6F0] hover:bg-[#f0f9ff]">1</button>
                        <button className="px-5 py-6 border-r border-[#BDBDBD] text-white bg-[#23A6F0]">2</button>
                        <button className="px-5 py-6 border-r border-[#BDBDBD] text-[#23A6F0] hover:bg-[#f0f9ff]">3</button>
                        <button className="px-6 py-6 text-[#23A6F0] hover:bg-[#f0f9ff]">Next</button>
                    </div>
                </div>
            </div>

            <section className="bg-[#FAFAFA] py-16 px-8 lg:px-0">
                <div className="max-w-[1050px] mx-auto">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center gap-12 lg:gap-8 justify-items-center opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                        {shop.brands.map((brand, i) => (
                            <div key={i} className="flex items-center justify-center h-20 w-full">
                                <img
                                    src={brand.img}
                                    alt={brand.name}
                                    className="max-h-20 w-auto object-contain cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;