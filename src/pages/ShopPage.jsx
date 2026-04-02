import React, { useState, useMemo } from 'react';
import { homeData } from '../mocks/data';
import ShopHeader from '../components/ShopHeader';
import ShopProductList from '../components/ShopProductList';
import ShopBrands from '../components/ShopBrands';

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const ShopPage = () => {
    const { shop, shopProducts } = homeData;
    const [activePage, setActivePage] = useState(2);
    const [viewMode, setViewMode] = useState('grid');

    const currentProducts = useMemo(() => {
        if (activePage === 1 || activePage === 3) return shuffleArray(shopProducts);
        return shopProducts;
    }, [activePage, shopProducts]);

    return (
        <div className="font-montserrat">
            <ShopHeader categories={shop.categories} />
            <ShopProductList
                products={currentProducts} 
                viewMode={viewMode} 
                setViewMode={setViewMode}
                activePage={activePage}
                setActivePage={setActivePage}
            />
            <ShopBrands brands={shop.brands} />
        </div>
    );
};

export default ShopPage;