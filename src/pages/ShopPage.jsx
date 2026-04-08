import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopHeader from '../components/ShopHeader';
import ShopProductList from '../components/ShopProductList';
import ShopBrands from '../components/ShopBrands';
import { fetchProducts } from '../store/actions/productActions';
import { homeData } from '../mocks/data';

const ShopPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
    const productList = useSelector((state) => state.product.productList);
    const fetchState = useSelector((state) => state.product.fetchState);
    const total = useSelector((state) => state.product.total); 
    
    const [activePage, setActivePage] = useState(1);
    const [viewMode, setViewMode] = useState('grid');
    const limit = 12; 
    useEffect(() => {
        const offset = (activePage - 1) * limit;
        
        dispatch(fetchProducts({ 
            limit: limit, 
            offset: offset 
        }));

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [dispatch, activePage]); 

    const topCategories = useMemo(() => {
        if (!categories || categories.length === 0) return [];
        return [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
    }, [categories]);

    return (
        <div className="font-montserrat min-h-screen bg-white">
            <ShopHeader categories={topCategories} />
            
            <div className="container mx-auto px-4">
                {fetchState === "FETCHING" ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23A6F0]"></div>
                        <p className="text-[#737373] font-medium">Loading Page {activePage}...</p>
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
                    />
                )}
            </div>
            
            <ShopBrands brands={homeData.shop.brands} />
        </div>
    );
};

export default ShopPage;