import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopProductList = ({ products, viewMode, setViewMode, activePage, setActivePage, total, limit }) => {
    
    if (!products || !Array.isArray(products)) return null;

    const startRange = (activePage - 1) * limit + 1;
    const endRange = Math.min(activePage * limit, total);
    const pageCount = Math.ceil(total / limit) || 1;

    const getPaginationItems = () => {
        const items = [];
        const threshold = 1; 

        for (let i = 1; i <= pageCount; i++) {
            if (i === 1 || i === pageCount || (i >= activePage - threshold && i <= activePage + threshold)) {
                items.push(i);
            } else if (i === activePage - threshold - 1 || i === activePage + threshold + 1) {
                items.push("...");
            }
        }
        return items.filter((item, index, arr) => item !== "..." || arr[index - 1] !== "...");
    };

    return (
        <section className="py-12 px-4 md:px-8 lg:px-0">
            <div className="max-w-[1050px] mx-auto">
                
                {/* 1. FILTER BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    <p className="text-[#737373] font-bold text-sm text-center md:text-left">
                        {total > 0 
                            ? `Showing ${startRange} – ${endRange} of ${total} results`
                            : "No products found"}
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-[#737373] font-bold text-sm">Views:</span>
                        <div className="flex gap-3">
                            <button onClick={() => setViewMode('grid')} className={`p-4 border rounded-[5px] ${viewMode === 'grid' ? 'border-[#23A6F0] text-[#23A6F0]' : 'text-[#737373]'}`}>
                                <LayoutGrid size={16} />
                            </button>
                            <button onClick={() => setViewMode('list')} className={`p-4 border rounded-[5px] ${viewMode === 'list' ? 'border-[#23A6F0] text-[#23A6F0]' : 'text-[#737373]'}`}>
                                <List size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <select className="flex-1 md:flex-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3.5 px-5 rounded-[5px] text-sm">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white px-10 py-3.5 rounded-[5px] font-bold text-sm">Filter</button>
                    </div>
                </div>

                {/* 2. PRODUCT GRID */}
                <div className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center' 
                    : 'flex flex-col gap-8'}>
                    
                    {products.map((product) => (
                        <Link
                            to={`/shop/${product.id}`}
                            key={product.id}
                            className={`group cursor-pointer transition-all duration-300 no-underline text-inherit flex
                                ${viewMode === 'grid' ? 'flex-col items-center text-center w-full max-w-[239px]' : 'flex-row items-center gap-8 w-full border-b pb-8'}`}
                        >
                            <div className={`${viewMode === 'grid' ? 'w-full aspect-[239/427] mb-6' : 'w-32 h-40 md:w-48 md:h-60'} overflow-hidden rounded-sm shrink-0 bg-gray-50`}>
                                <img 
                                    src={product.images?.[0]?.url || 'https://via.placeholder.com/300x400'} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                            </div>

                            <div className={viewMode === 'list' ? 'flex-1 text-left' : ''}>
                                <h5 className="text-[#252B42] font-bold text-base mb-2.5">{product.name}</h5>
                                <p className="text-[#737373] font-bold text-sm mb-2.5 truncate max-w-[200px]">{product.description}</p>
                                <p className="text-[#23856D] font-bold text-base">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 3. PAGINATION */}
                <div className="flex justify-center mt-20 mb-10">
                    <div className="flex items-center border border-[#BDBDBD] rounded-[7px] bg-white shadow-sm overflow-hidden font-bold text-sm">
                        <button 
                            className={`px-4 py-4 md:px-6 border-r ${activePage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-blue-50'}`}
                            onClick={() => activePage > 1 && setActivePage(1)}
                            disabled={activePage === 1}
                        >First</button>

                        <div className="hidden md:flex">
                            {getPaginationItems().map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => typeof item === 'number' && setActivePage(item)}
                                    className={`px-5 py-4 border-r transition-all ${item === activePage ? 'bg-[#23A6F0] text-white' : 'text-[#23A6F0] hover:bg-blue-50'}`}
                                >{item}</button>
                            ))}
                        </div>

                        <div className="flex md:hidden px-6 py-4 border-r text-[#23A6F0]">
                            {activePage} / {pageCount}
                        </div>

                        <button 
                            className={`px-4 py-4 md:px-6 ${activePage === pageCount ? 'text-gray-300 cursor-not-allowed' : 'text-[#23A6F0] hover:bg-blue-50'}`}
                            onClick={() => activePage < pageCount && setActivePage(activePage + 1)}
                            disabled={activePage === pageCount}
                        >Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopProductList;