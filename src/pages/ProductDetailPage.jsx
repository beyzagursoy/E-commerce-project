import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronRight } from 'lucide-react';
import { fetchProducts } from '../store/actions/productActions'; 
import { homeData } from '../mocks/data';
import ProductDetailSlider from '../components/ProductDetailSlider';
import ProductDetailInfo from '../components/ProductDetailInfo';
import ProductDetailTabs from '../components/ProductDetailTabs';
import Bestseller from '../components/Bestseller';
import ShopBrands from '../components/ShopBrands';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('description');
    const [currentSlide, setCurrentSlide] = useState(0);

    const { productList, fetchState } = useSelector((state) => state.product);

    const product = productList.find(p => String(p.id) === String(productId));

    useEffect(() => {
        if (productList.length === 0 && fetchState !== 'FETCHING') {
            dispatch(fetchProducts());
        }

        window.scrollTo(0, 0);
        setCurrentSlide(0);
    }, [productId, dispatch, productList.length, fetchState]);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
                <p className="text-[#737373] font-bold font-montserrat">Loading Product...</p>
            </div>
        );
    }

    const sliderImages = product.images && product.images.length > 0 
        ? product.images 
        : [{ url: product.image }];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    return (
        <div className="bg-[#FAFAFA] font-montserrat">
            {/* 1. BREADCRUMB */}
            <div className="max-w-[1050px] mx-auto py-6 px-8">
                <nav className="flex items-center gap-3 text-sm font-bold">
                    <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0]">Shop</Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <span className="text-[#737373] truncate max-w-[200px]">{product.name}</span>
                </nav>
            </div>

            {/* 2. ANA ÜRÜN BÖLÜMÜ */}
            <section className="max-w-[1050px] mx-auto pb-12 px-8">
                <div className="flex flex-col md:flex-row gap-12">
                    <ProductDetailSlider 
                        images={sliderImages} 
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        productTitle={product.name}
                    />
                    <ProductDetailInfo product={product} />
                </div>
            </section>

            {/* 3. TABLAR (Açıklama vb.) */}
            <ProductDetailTabs 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                product={product}
                categoryImg={product.images?.[0]?.url || product.image} 
            />

            {/* 4. DİĞER ÜRÜNLER VE MARKALAR */}
            <div className="bg-white">
                <Bestseller showFullHeader={false} />
            </div>
            <div className="bg-[#FAFAFA] py-12">
                <ShopBrands brands={homeData.shop.brands} />
            </div>
        </div>
    );
};

export default ProductDetailPage;