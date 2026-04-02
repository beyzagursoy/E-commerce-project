import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { homeData } from '../mocks/data';
import { ChevronRight } from 'lucide-react';
import ShopBrands from '../components/ShopBrands';
import ProductDetailSlider from '../components/ProductDetailSlider';
import ProductDetailInfo from '../components/ProductDetailInfo';
import ProductDetailTabs from '../components/ProductDetailTabs';
import Bestseller from '../components/Bestseller';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [activeTab, setActiveTab] = useState('description');
    const [currentSlide, setCurrentSlide] = useState(0);

    const product = homeData.shopProducts.find(p => p.id === parseInt(productId)) || homeData.shopProducts[0];
    const sliderImages = product.images || [product.image, homeData.shop.categories[0].img];

    const nextSlide = () => setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

    return (
        <div className="bg-[#FAFAFA]">
            {/* Breadcrumb */}
            <div className="max-w-[1050px] mx-auto py-6 px-8">
                <div className="flex items-center gap-3 text-sm font-bold">
                    <Link to="/" className="text-[#252B42]">Home</Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
                </div>
            </div>

            {/* Main Section */}
            <section className="max-w-[1050px] mx-auto pb-12 px-8">
                <div className="flex flex-col md:flex-row gap-12">
                    <ProductDetailSlider 
                        images={sliderImages} 
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        productTitle={product.title}
                    />
                    <ProductDetailInfo product={product} />
                </div>
            </section>

            <ProductDetailTabs 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                categoryImg={homeData.shop.categories[1].img} 
            />

            <Bestseller />
            <ShopBrands brands={homeData.shop.brands} />
        </div>
    );
};

export default ProductDetailPage;