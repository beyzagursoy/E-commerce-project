import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchProductDetail } from '../store/actions/productActions'; 
import { homeData } from '../mocks/data';
import ProductDetailSlider from '../components/ProductDetail/ProductDetailSlider';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';
import ProductDetailTabs from '../components/ProductDetail/ProductDetailTabs';
import Bestseller from '../components/Home/Bestseller';
import ShopBrands from '../components/Shop/ShopBrands';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [activeTab, setActiveTab] = useState('description');
    const [currentSlide, setCurrentSlide] = useState(0);

    const { selectedProduct, fetchState } = useSelector((state) => state.product);

    useEffect(() => {
    if (productId) {
        window.scrollTo(0, 0);
        dispatch(fetchProductDetail(productId));
    }
}, [productId, dispatch]);

    if (fetchState === 'FETCHING' || !selectedProduct) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-white font-montserrat">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#23A6F0]"></div>
                <p className="text-[#737373] font-bold">Loading Product...</p>
            </div>
        );
    }

    const sliderImages = selectedProduct.images && selectedProduct.images.length > 0
        ? selectedProduct.images
        : [{ url: selectedProduct.image || 'https://via.placeholder.com/600x600' }];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    return (
        <div className="bg-[#FAFAFA] font-montserrat">
            {/* 1. BREADCRUMB & BACK BUTTON */}
            <div className="max-w-[1050px] mx-auto py-6 px-8 flex justify-between items-center">
                <nav className="flex items-center gap-3 text-sm font-bold">
                    <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0]">Shop</Link>
                    <ChevronRight size={16} className="text-[#BDBDBD]" />
                    <span className="text-[#737373] truncate max-w-[150px] md:max-w-none">
                        {selectedProduct.name}
                    </span>
                </nav>
                
                {/* Back Button */}
                <button 
                    onClick={() => history.goBack()}
                    className="flex items-center gap-1 text-[#23A6F0] font-bold text-sm hover:underline transition-all"
                >
                    <ChevronLeft size={18} />
                    Back
                </button>
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
                        productTitle={selectedProduct.name}
                    />
                    <ProductDetailInfo product={selectedProduct} />
                </div>
            </section>

            {/* 3. TABLAR  */}
            <ProductDetailTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                product={selectedProduct}
                categoryImg={selectedProduct.images?.[0]?.url || selectedProduct.image}
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