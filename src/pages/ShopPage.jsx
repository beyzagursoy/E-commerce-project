import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import ShopHeader from '../components/Shop/ShopHeader';
import ShopProductList from '../components/Shop/ShopProductList';
import ShopBrands from '../components/Shop/ShopBrands';
import { fetchProducts } from '../store/actions/productActions';
import { homeData } from '../mocks/data';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams(); 
    
    const categories = useSelector((state) => state.product.categories);
    const productList = useSelector((state) => state.product.productList);
    const fetchState = useSelector((state) => state.product.fetchState);
    const total = useSelector((state) => state.product.total);

    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [activePage, setActivePage] = useState(1);
    const [viewMode, setViewMode] = useState('grid');
    const [limit, setLimit] = useState(window.innerWidth < 768 ? 4 : 12);

    useEffect(() => {
        const handleResize = () => {
            const newLimit = window.innerWidth < 768 ? 4 : 12;
            if (newLimit !== limit) {
                setLimit(newLimit);
                setActivePage(1); 
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [limit]);

    useEffect(() => {
        const offset = (activePage - 1) * limit;
        
        const queryParams = { limit, offset };
        
        if (categoryId) queryParams.category = categoryId;
        if (filter) queryParams.filter = filter;
        if (sort) queryParams.sort = sort;

        dispatch(fetchProducts(queryParams));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [dispatch, activePage, limit, categoryId, filter, sort]);

    useEffect(() => {
        setActivePage(1);
    }, [categoryId, filter, sort]);

    const topCategories = useMemo(() => {
        if (!categories || categories.length === 0) return [];
        return [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
    }, [categories]);

    return (
        <div className="font-montserrat min-h-screen bg-white">
            <ShopHeader categories={topCategories} />

            <div className="container mx-auto px-4">
                {fetchState === "FETCHING" ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
                        <p className="text-[#737373] font-bold text-lg animate-pulse">Loading products...</p>
                    </div>
                ) : (
                    <ShopProductList
                        products={productList}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                        activePage={activePage}
                        setActivePage={setActivePage}
                        total={total}
                        limit={limit}
                        setFilter={setFilter}
                        setSort={setSort}
                    />
                )}

                {fetchState === "FAILED" && (
                    <div className="text-center py-20 text-red-500 font-bold">
                        Failed to load products. Please refresh the page.
                    </div>
                )}
            </div>

            <ShopBrands brands={homeData.shop.brands} />
        </div>
    );
};

export default ShopPage;