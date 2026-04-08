import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopProductList = ({
    products,
    viewMode,
    setViewMode,
    activePage,
    setActivePage,
    total,
    limit,
    setFilter,
    setSort
}) => {

    const [localFilter, setLocalFilter] = useState("");
    const [localSort, setLocalSort] = useState("");
    const categories = useSelector((state) => state.product.categories);

    if (!products || !Array.isArray(products)) return null;

    const startRange = (activePage - 1) * limit + 1;
    const endRange = Math.min(activePage * limit, total);
    const pageCount = Math.ceil(total / limit) || 1;

    const handleApplyFilters = (e) => {
        e.preventDefault();
        setFilter(localFilter);
        setSort(localSort);
    };

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

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const getCategoryName = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.title.toLowerCase() : "urunler";
    };

    return (
        <section className="py-12 px-4 md:px-8 lg:px-0">
            <div className="max-w-[1050px] mx-auto">

                {/* 1. FILTER & SEARCH BAR */}
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

                    {/* ARAMA VE SIRALAMA FORMU */}
                    <form onSubmit={handleApplyFilters} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Filter products..."
                            className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3.5 px-5 rounded-[5px] text-sm w-full md:w-40 focus:outline-[#23A6F0]"
                            value={localFilter}
                            onChange={(e) => setLocalFilter(e.target.value)}
                        />
                        <select
                            className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] py-3.5 px-5 rounded-[5px] text-sm cursor-pointer focus:outline-none"
                            value={localSort}
                            onChange={(e) => setLocalSort(e.target.value)}
                        >
                            <option value="">Sort By</option>
                            <option value="price:asc">Price: Low to High</option>
                            <option value="price:desc">Price: High to Low</option>
                            <option value="rating:asc">Rating: Low to High</option>
                            <option value="rating:desc">Rating: High to Low</option>
                        </select>
                        <button
                            type="submit"
                            className="bg-[#23A6F0] text-white px-10 py-3.5 rounded-[5px] font-bold text-sm hover:bg-[#1a8cd1] transition-colors"
                        >
                            Filter
                        </button>
                    </form>
                </div>

                {/* 2. PRODUCT GRID / LIST AREA */}
                <div className={viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16'
                    : 'flex flex-col gap-10'}>

                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/shop/${product.gender === 'k' ? 'kadin' : 'erkek'}/${getCategoryName(product.category_id)}/${product.category_id}/${createSlug(product.name)}/${product.id}`}
                            className={`group flex ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center gap-8 border-b pb-10'}`}
                        >
                            {/* Image Container */}
                            <div className={`${viewMode === 'grid' ? 'w-full aspect-[239/300] mb-6' : 'w-48 h-64'} overflow-hidden rounded-sm shrink-0 bg-gray-50`}>
                                <img
                                    src={product.images?.[0]?.url || 'https://via.placeholder.com/300x400'}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Details */}
                            <div className={`flex flex-col ${viewMode === 'grid' ? 'flex-grow items-center text-center' : 'flex-1 items-start justify-start'}`}>

                                <h5 className={`text-[#252B42] font-bold text-base mb-1 group-hover:text-[#23A6F0] transition-colors ${viewMode === 'grid' ? 'min-h-[2.5rem] flex items-center' : ''}`}>
                                    {product.name}
                                </h5>

                                <p className={`text-[#737373] font-bold text-sm mb-2 max-w-[500px] ${viewMode === 'grid' ? 'line-clamp-2 min-h-[2.5rem]' : ''}`}>
                                    {product.description}
                                </p>

                                <div className={`${viewMode === 'grid' ? 'mt-auto flex flex-col items-center' : 'mt-2 flex flex-col items-start'}`}>
                                    <p className="text-[#23856D] font-bold text-base mb-2">
                                        ${product.price}
                                    </p>

                                    <div className="flex gap-1.5">
                                        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                                        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                                        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                                        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                                    </div>
                                </div>
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
        </section >
    );
};

export default ShopProductList;