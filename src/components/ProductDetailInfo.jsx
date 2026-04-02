import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductDetailInfo = ({ product }) => {
    return (
        <div className="flex-1 space-y-5 py-4">
            <h4 className="text-[#252B42] text-xl font-normal">{product.title}</h4>

            <div className="flex items-center gap-2">
                <div className="flex text-[#F3CD03]">
                    {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    <Star size={18} />
                </div>
                <span className="text-[#737373] font-bold text-sm">10 Reviews</span>
            </div>

            <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">{product.salePrice}</h3>

            <div className="flex gap-2 text-sm font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className="text-[#23A6F0]">In Stock</span>
            </div>

            <p className="text-[#858585] text-sm leading-6 max-w-[450px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                RELIT official consequent door ENIM RELIT Mollie.
            </p>

            <hr className="border-[#BDBDBD] w-full" />

            <div className="flex gap-2.5">
                {product.colors?.map((color, i) => (
                    <div
                        key={i}
                        className={`w-8 h-8 rounded-full cursor-pointer border border-gray-200 shadow-inner ${color}`}
                    />
                ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
                <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#1a8cd1] transition-all">
                    Select Options
                </button>
                <div className="flex gap-2">
                    <button className="p-3 border rounded-full bg-white hover:bg-gray-50 transition-colors">
                        <Heart size={20} className="text-[#252B42]" />
                    </button>
                    <button className="p-3 border rounded-full bg-white hover:bg-gray-50 transition-colors">
                        <ShoppingCart size={20} className="text-[#252B42]" />
                    </button>
                    <button className="p-3 border rounded-full bg-white hover:bg-gray-50 transition-colors">
                        <Eye size={20} className="text-[#252B42]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailInfo;