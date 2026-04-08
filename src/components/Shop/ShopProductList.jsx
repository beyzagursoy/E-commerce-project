import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';


const ShopProductList = ({ products, viewMode, setViewMode, activePage, setActivePage, total, limit }) => {
    
    if (!products || !Array.isArray(products)) {
        return (
            <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23A6F0]"></div>
            </div>
        );
    }

    const pageCount = Math.ceil(total / limit) || 1;

    const getPaginationItems = () => {
        const items = [];
        const showThreshold = 1; 

        for (let i = 1; i <= pageCount; i++) {
            if (
                i === 1 || 
                i === pageCount || 
                (i >= activePage - showThreshold && i <= activePage + showThreshold)
            ) {
                items.push(i);
            } else if (
                i === activePage - showThreshold - 1 || 
                i === activePage + showThreshold + 1
            ) {
                items.push("...");
            }
        }
        return items.filter((item, index, arr) => item !== "..." || arr[index - 1] !== "...");
    };

    return (
        <section className="py-12 px-4 md:px-8 lg:px-0">
            <div className="max-w-[1050px] mx-auto">
                
                {/* 1. FİLTRELEME VE GÖRÜNÜM ÇUBUĞU */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <p className="text-[#737373] font-bold text-sm">
                        Showing all {products.length} results
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-4 border rounded-[5px] transition-all ${viewMode === 'grid' ? 'border-[#23A6F0] text-[#23A6F0]' : 'border-[#ECECEC] text-[#737373]'}`}
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-4 border rounded-[5px] transition-all ${viewMode === 'list' ? 'border-[#23A6F0] text-[#23A6F0]' : 'border-[#ECECEC] text-[#737373]'}`}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <select className="flex-1 md:flex-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3.5 px-5 rounded-[5px] text-sm focus:outline-none">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white px-10 py-3.5 rounded-[5px] font-bold text-sm hover:bg-[#1a8cd1] transition-colors">
                            Filter
                        </button>
                    </div>
                </div>

                {/* 2. ÜRÜN LİSTESİ */}
                <div className={viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center'
                    : 'flex flex-col gap-8'}>
                    
                    {products.map((product, index) => {
                        const productImage = product.images?.[0]?.url || 'https://via.placeholder.com/300x400';
                        
                        return (
                            <Link
                                to={`/shop/${product.id}`}
                                key={product.id}
                                className={`group cursor-pointer transition-all duration-300 no-underline text-inherit
                                    /* MOBİL SINIRLAMASI: İlk 4 üründen sonrasını mobilde gizle */
                                    ${index >= 4 ? 'hidden sm:flex' : 'flex'}
                                    
                                    ${viewMode === 'grid' 
                                        ? 'flex-col items-center text-center w-full max-w-[239px]' 
                                        : 'flex-row items-center gap-8 w-full border-b pb-8'}`}
                            >
                                <div className={`${viewMode === 'grid' ? 'w-full aspect-[239/300] mb-6' : 'w-32 h-40 md:w-48 md:h-60'} overflow-hidden rounded-sm shrink-0 bg-gray-50`}>
                                    <img 
                                        src={productImage} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                    />
                                </div>

                                <div className={viewMode === 'list' ? 'flex-1 text-left' : ''}>
                                    <h5 className="text-[#252B42] font-bold text-base mb-2.5">{product.name}</h5>
                                    <p className="text-[#737373] font-bold text-sm mb-2.5 truncate max-w-[200px] mx-auto sm:mx-0">
                                        {product.description || "English Department"}
                                    </p>
                                    <div className={`flex gap-1.5 mb-2.5 font-bold text-base ${viewMode === 'grid' ? 'justify-center' : 'justify-start'}`}>
                                        <span className="text-[#23856D]">${product.price}</span>
                                    </div>
                                    <div className={`flex gap-1.5 ${viewMode === 'grid' ? 'justify-center' : 'justify-start'}`}>
                                        <div className="w-4 h-4 rounded-full bg-[#23A6F0]" />
                                        <div className="w-4 h-4 rounded-full bg-[#23856D]" />
                                        <div className="w-4 h-4 rounded-full bg-[#E77C40]" />
                                        <div className="w-4 h-4 rounded-full bg-[#252B42]" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* 3. MODERN SAYFALAMA (PAGINATION) */}
                <div className="flex justify-center mt-20 mb-10">
                    <div className="flex items-center border border-[#BDBDBD] rounded-[7px] bg-white shadow-sm overflow-hidden font-bold text-sm">
                        
                        {/* FIRST BUTONU */}
                        <button 
                            className={`px-4 py-4 md:px-6 border-r border-[#BDBDBD] transition-colors ${activePage === 1 ? 'text-gray-300 bg-gray-50 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-blue-50'}`}
                            onClick={() => activePage > 1 && setActivePage(1)}
                            disabled={activePage === 1}
                        >
                            First
                        </button>

                        {/* MASAÜSTÜ SAYFA NUMARALARI */}
                        <div className="hidden md:flex">
                            {getPaginationItems().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => typeof item === 'number' && setActivePage(item)}
                                    disabled={item === "..."}
                                    className={`px-5 py-4 border-r border-[#BDBDBD] transition-all ${
                                        item === activePage 
                                        ? 'bg-[#23A6F0] text-white' 
                                        : item === "..." 
                                            ? 'text-[#737373] cursor-default' 
                                            : 'text-[#23A6F0] hover:bg-blue-50'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* MOBİL SAYFA BİLGİSİ */}
                        <div className="flex md:hidden px-6 py-4 border-r border-[#BDBDBD] text-[#23A6F0]">
                            {activePage} / {pageCount}
                        </div>

                        {/* NEXT BUTONU */}
                        <button 
                            className={`px-4 py-4 md:px-6 transition-colors ${activePage === pageCount ? 'text-gray-300 bg-gray-50 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-blue-50'}`}
                            onClick={() => activePage < pageCount && setActivePage(activePage + 1)}
                            disabled={activePage === pageCount}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopProductList;