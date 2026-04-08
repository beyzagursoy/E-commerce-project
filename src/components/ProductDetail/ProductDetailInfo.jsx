import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, CheckCircle } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/shoppingCartActions';

const ProductDetailInfo = ({ product }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const title = product.name || product.title;
    const price = product.price || product.salePrice;
    const description = product.description || "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.";

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        setIsAdded(true);
        console.log("Sepete eklenen ürün:", product);

        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="flex-1 space-y-5 py-4">
            <h4 className="text-[#252B42] text-xl font-normal">{title}</h4>

            <div className="flex items-center gap-2">
                <div className="flex text-[#F3CD03]">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            fill={i < Math.floor(product.rating || 4) ? "currentColor" : "none"}
                        />
                    ))}
                </div>
                <span className="text-[#737373] font-bold text-sm">{product.sell_count || 10} Reviews</span>
            </div>

            <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">
                ${price}
            </h3>

            <div className="flex gap-2 text-sm font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className={product.stock > 0 ? "text-[#23A6F0]" : "text-[#E74C3C]"}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>

            <p className="text-[#858585] text-sm leading-6 max-w-[450px]">
                {description}
            </p>

            <hr className="border-[#BDBDBD] w-full" />

            <div className="flex gap-2.5">
                {['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'].map((color, i) => (
                    <div
                        key={i}
                        className={`w-8 h-8 rounded-full cursor-pointer border border-gray-200 shadow-inner ${color}`}
                    />
                ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
                <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#1a8cd1] transition-all active:scale-95">
                    Select Options
                </button>

                <div className="flex gap-2">
                    <button className="p-3 border rounded-full bg-white hover:bg-gray-50 transition-colors group">
                        <Heart size={20} className="text-[#252B42] group-hover:text-[#E74C3C] transition-colors" />
                    </button>

                    {/* SEPETE EKLE BUTONU */}
                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock <= 0}
                        className={`p-3 border rounded-full transition-all active:scale-95 flex items-center justify-center ${isAdded
                                ? "bg-[#2DC071] border-[#2DC071] text-white"
                                : "bg-white border-[#E8E8E8] text-[#252B42] hover:bg-gray-50"
                            } ${product.stock <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isAdded ? (
                            <CheckCircle size={20} className="animate-in zoom-in duration-300" />
                        ) : (
                            <ShoppingCart size={20} />
                        )}
                    </button>

                    <button className="p-3 border rounded-full bg-white hover:bg-gray-50 transition-colors">
                        <Eye size={20} className="text-[#252B42]" />
                    </button>
                </div>
            </div>

            {isAdded && (
                <p className="text-[#2DC071] text-xs font-bold animate-bounce absolute">
                    Product added to your cart!
                </p>
            )}
        </div>
    );
};

export default ProductDetailInfo;