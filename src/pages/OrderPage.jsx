import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChevronRight, Info, PlusCircle } from 'lucide-react';
import AddressStep from '../components/AddressStep';

export default function OrderPage() {
    const [step, setStep] = useState(1);
    const cart = useSelector((state) => state.shoppingCart.cart);

    const productsTotal = cart
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    const shippingFee = 29.99;
    const freeShippingThreshold = 150;
    const shippingDiscount = productsTotal >= freeShippingThreshold ? shippingFee : 0;
    const couponDiscount = productsTotal > 0 ? 10 : 0; 

    const grandTotal = Math.max(0, productsTotal + shippingFee - shippingDiscount - couponDiscount);

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-8 px-4 font-montserrat text-[#252B42]">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
                
                {/* SOL TARAF */}
                <div className="flex-[2] w-full space-y-6">
                    {step === 1 ? (
                        <AddressStep onNext={() => setStep(2)} />
                    ) : (
                        <div className="bg-white p-20 text-center rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-4">
                            <h3 className="text-xl font-bold">2. Ödeme Seçenekleri</h3>
                            <p className="text-[#737373]">Ödeme formu bu alanda yer alacaktır.</p>
                            <button 
                                onClick={() => setStep(1)}
                                className="text-[#23A6F0] font-bold text-sm hover:underline"
                            >
                                Adres Bilgilerine Geri Dön
                            </button>
                        </div>
                    )}
                </div>

                {/* SAĞ TARAF */}
                <div className="flex-1 lg:sticky lg:top-24 w-full lg:max-w-[350px]">
                    
                    <button
                        onClick={() => setStep(2)}
                        disabled={step === 2}
                        className={`w-full py-4 rounded-xl font-bold text-base shadow-md mb-4 flex items-center justify-center gap-2 transition-all ${
                            step === 2 ? 'bg-gray-300 cursor-not-allowed text-white' : 'bg-[#23A6F0] text-white hover:bg-[#1a8cd3]'
                        }`}
                    >
                        Kaydet ve Devam Et <ChevronRight size={18} />
                    </button>

                    {/* Sözleşme Onay Kutusu  */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-3 items-start mb-4">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-[#23A6F0] cursor-pointer" id="terms" />
                        <label htmlFor="terms" className="text-[12px] text-gray-500 leading-tight cursor-pointer">
                            <span className="underline">Ön Bilgilendirme Koşulları</span>'nı ve 
                            <span className="underline ml-1">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                        </label>
                    </div>

                    {/* Özet Kutusu */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold text-[#252B42] mb-6 border-b border-gray-50 pb-4">Sipariş Özeti</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between text-sm text-[#737373]">
                                <span>Ürünün Toplamı</span>
                                <span className="font-bold text-[#252B42]">${productsTotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-sm text-[#737373]">
                                <span>Kargo Toplam</span>
                                <span className="font-bold text-[#252B42]">${shippingFee.toFixed(2)}</span>
                            </div>

                            {productsTotal >= freeShippingThreshold && (
                                <div className="flex justify-between text-[#2DC071] font-bold text-[13px] bg-[#f6fff9] p-3 rounded-lg border border-[#e8f5ed]">
                                    <span>150$ Üzeri Kargo Bedava</span>
                                    <span>-${shippingFee.toFixed(2)}</span>
                                </div>
                            )}

                            {couponDiscount > 0 && (
                                <div className="flex justify-between text-[#E74040] font-bold text-[13px]">
                                    <span>Özel İndirim</span>
                                    <span>-${couponDiscount.toFixed(2)}</span>
                                </div>
                            )}

                            <hr className="border-gray-50 my-2" />

                            <div className="flex justify-between items-end">
                                <span className="text-sm font-medium text-[#737373]">Toplam</span>
                                <span className="text-2xl font-black text-[#23A6F0] leading-none">
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setStep(2)}
                        disabled={step === 2}
                        className={`w-full py-4 rounded-xl font-bold text-base shadow-md mt-4 flex items-center justify-center gap-2 transition-all ${
                            step === 2 ? 'bg-gray-300 cursor-not-allowed text-white' : 'bg-[#23A6F0] text-white hover:bg-[#1a8cd3]'
                        }`}
                    >
                        Kaydet ve Devam Et <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
}