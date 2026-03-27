import React, { useState, useMemo } from 'react';
import { homeData } from '../mocks/data';
import { LayoutGrid, List, ChevronRight } from 'lucide-react';

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
const Shop = () => {
    const { shop, shopProducts } = homeData;
    const [activePage, setActivePage] = useState(2);
    const [viewMode, setViewMode] = useState('grid');

    const currentProducts = useMemo(() => {
        if (activePage === 1 || activePage === 3) {
            return shuffleArray(shopProducts);
        }
        return shopProducts;
    }, [activePage, shopProducts]);

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

            {/* 2. CATEGORY CARDS */}
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

            {/* 3. FILTER BAR - */}
            <div className="py-6 px-8 lg:px-0">
                <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>

                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-4 border rounded-[5px] transition-all ${viewMode === 'grid' ? 'border-[#23A6F0] text-[#23A6F0]' : 'border-[#ECECEC] text-[#737373]'
                                    }`}
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-4 border rounded-[5px] transition-all ${viewMode === 'list' ? 'border-[#23A6F0] text-[#23A6F0]' : 'border-[#ECECEC] text-[#737373]'
                                    }`}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <select className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3.5 pl-5 pr-12 rounded-[5px] text-sm focus:outline-none cursor-pointer w-full font-normal">
                                <option>Popularity</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#737373]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>

                        <button className="bg-[#23A6F0] text-white px-10 py-3.5 rounded-[5px] font-bold text-sm hover:bg-[#1a8cd1] transition-colors">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. PRODUCT GRID / LIST - */}
            <div className="py-12 px-8 lg:px-0">
                <div className={`max-w-[1050px] mx-auto ${viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center'
                        : 'flex flex-col gap-8'
                    }`}>
                    {currentProducts.map((product, index) => (
                        <div
                            key={`${activePage}-${product.id}`}
                            className={`group cursor-pointer transition-all duration-300 ${index >= 4 ? 'hidden md:flex' : 'flex'
                                } ${viewMode === 'grid'
                                    ? 'flex-col items-center text-center w-full max-w-[239px]'
                                    : 'flex-row items-center gap-8 w-full border-b pb-8'
                                }`}
                        >
                            <div className={`${viewMode === 'grid' ? 'w-full aspect-[239/300] mb-6' : 'w-32 h-40 md:w-48 md:h-60'} overflow-hidden rounded-sm shrink-0`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className={viewMode === 'list' ? 'flex-1 text-left' : ''}>
                                <h5 className="text-[#252B42] font-bold text-base mb-2.5">{product.title}</h5>
                                <p className="text-[#737373] font-bold text-sm mb-2.5">{product.department}</p>
                                <div className={`flex gap-1.5 mb-2.5 font-bold text-base ${viewMode === 'grid' ? 'justify-center' : 'justify-start'}`}>
                                    <span className="text-[#BDBDBD]">{product.price}</span>
                                    <span className="text-[#23856D]">{product.salePrice}</span>
                                </div>
                                <div className={`flex gap-1.5 ${viewMode === 'grid' ? 'justify-center' : 'justify-start'}`}>
                                    {product.colors.map((color, i) => (
                                        <div key={i} className={`w-4 h-4 rounded-full ${color}`} />
                                    ))}
                                </div>
                                {viewMode === 'list' && (
                                    <p className="mt-4 text-[#737373] text-sm hidden md:block max-w-md">
                                        Bu ürün yüksek kaliteli malzemelerden üretilmiş olup şıklığı ve konforu bir arada sunar.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. PAGINATION - */}
                <div className="flex justify-center mt-20">
                    <div className="flex border border-[#BDBDBD] rounded-[7px] overflow-hidden font-bold text-sm shadow-sm bg-white">
                        <button
                            className="px-6 py-6 border-r border-[#BDBDBD] text-[#BDBDBD] bg-[#F3F3F3] hover:bg-[#ECECEC]"
                            onClick={() => setActivePage(Math.max(1, activePage - 1))}
                        >
                            First
                        </button>
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => setActivePage(num)}
                                className={`px-5 py-6 border-r border-[#BDBDBD] transition-all ${activePage === num ? 'text-white bg-[#23A6F0]' : 'text-[#23A6F0] hover:bg-[#f0f9ff]'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            className="px-6 py-6 text-[#23A6F0] hover:bg-[#f0f9ff]"
                            onClick={() => setActivePage(Math.min(3, activePage + 1))}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* 6. BRANDS SECTION */}
            <section className="bg-[#FAFAFA] py-16 px-8 lg:px-0">
                <div className="max-w-[1050px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center gap-12 lg:gap-8 justify-items-center">
                        {shop.brands.map((brand, i) => (
                            <div key={i} className="flex items-center justify-center h-20 w-full group">
                                <img
                                    src={brand.img}
                                    alt={brand.name}
                                    className="h-16 w-auto object-contain cursor-pointer transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
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