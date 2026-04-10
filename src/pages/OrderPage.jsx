import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ChevronRight, AlertCircle } from 'lucide-react';
import { axiosWithAuth } from '../api/api';
import AddressStep from '../components/AddressStep';
import PaymentStep from '../components/PaymentStep';

export default function OrderPage() {
    const [step, setStep] = useState(1);
    const [isAgreed, setIsAgreed] = useState(false);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const cart = useSelector((state) => state.shoppingCart.cart);
    const selectedAddress = useSelector((state) => state.shoppingCart.address);

    const selectedCard = useSelector((state) => state.shoppingCart.payment);

    const productsTotal = cart
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    const shippingFee = 29.99;
    const freeShippingThreshold = 150;
    const shippingDiscount = productsTotal >= freeShippingThreshold ? shippingFee : 0;
    const couponDiscount = productsTotal > 0 ? 10 : 0; 
    const grandTotal = Math.max(0, productsTotal + shippingFee - shippingDiscount - couponDiscount);

    const handleFinishOrder = () => {
        if (!isAgreed) return;
        if (!selectedAddress?.id || !selectedCard?.card_no) {
            alert("Lütfen adres ve ödeme bilgilerinizin eksiksiz olduğundan emin olun.");
            return;
        }

        const orderPayload = {
            address_id: selectedAddress.id,
            order_date: new Date().toISOString(),
            card_no: selectedCard.card_no,
            card_name: selectedCard.name_on_card,
            card_expire_month: selectedCard.expire_month,
            card_expire_year: selectedCard.expire_year,
            card_ccv: 321, 
            price: grandTotal,
            products: cart.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: `${item.product.name} - Adet: ${item.count}`
            }))
        };

        axiosWithAuth()
            .post('/order', orderPayload)
            .then(res => {
                alert("Tebrikler! Siparişiniz başarıyla alındı.");
                
                dispatch({ type: "CLEAR_CART" });
                
                history.push("/order-success");
            })
            .catch(err => {
                console.error("Sipariş oluşturma hatası:", err);
                alert("Sipariş oluşturulurken bir hata meydana geldi. Lütfen tekrar deneyiniz.");
            });
    };

    const handleAction = () => {
        if (step === 1) {
            if (!selectedAddress?.id) {
                alert("Lütfen bir teslimat adresi seçin.");
                return;
            }
            setStep(2);
        } else {
            handleFinishOrder();
        }
    };

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-8 px-4 font-montserrat text-[#252B42]">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 items-start">
                
                {/* SOL TARAF - Adımlar (Adres veya Ödeme) */}
                <div className="flex-[2] w-full space-y-6">
                    {step === 1 ? (
                        <AddressStep onNext={() => setStep(2)} />
                    ) : (
                        <PaymentStep onPrev={() => setStep(1)} />
                    )}
                </div>

                {/* SAĞ TARAF - Sipariş Özeti ve Butonlar */}
                <div className="flex-1 lg:sticky lg:top-24 w-full lg:max-w-[350px]">

                    <div className={`w-full py-4 rounded-xl font-bold text-base shadow-sm mb-4 flex items-center justify-center gap-2 transition-all ${
                        step === 2 ? 'bg-blue-50 text-[#23A6F0]' : 'bg-gray-100 text-gray-400'
                    }`}>
                        {step === 1 ? "1. Adres Seçimi" : "2. Ödeme Bilgileri"}
                    </div>

                    {/* Sözleşme Onay Kutusu */}
                    <div className={`bg-white p-5 rounded-2xl border transition-all mb-4 shadow-sm flex gap-3 items-start ${
                        step === 2 && !isAgreed ? 'border-orange-200 bg-orange-50/30' : 'border-gray-100'
                    }`}>
                        <input 
                            type="checkbox" 
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            className="mt-1 w-5 h-5 accent-[#23A6F0] rounded cursor-pointer" 
                            id="terms" 
                        />
                        <label htmlFor="terms" className="text-[12px] text-gray-500 leading-tight cursor-pointer">
                            <span className="underline font-semibold text-[#252B42]">Ön Bilgilendirme Koşulları</span>'nı ve 
                            <span className="underline font-semibold text-[#252B42] ml-1">Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                        </label>
                    </div>

                    {/* Sipariş Özeti Kartı */}
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

                    {/* Aksiyon Butonu */}
                    <button
                        onClick={handleAction}
                        disabled={step === 2 && !isAgreed} 
                        className={`w-full py-4 rounded-xl font-bold text-base shadow-md mt-4 flex items-center justify-center gap-2 transition-all ${
                            (step === 2 && !isAgreed) 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-[#23A6F0] text-white hover:bg-[#1a8cd3] active:scale-[0.98]'
                        }`}
                    >
                        {step === 1 ? "Kaydet ve Devam Et" : "Siparişi Tamamla"} 
                        <ChevronRight size={18} />
                    </button>
                    
                    {/* Uyarı Mesajı */}
                    {step === 2 && !isAgreed && (
                        <div className="flex items-center justify-center gap-1 mt-3 text-orange-500">
                            <AlertCircle size={12} />
                            <p className="text-[10px] font-bold uppercase tracking-tight">
                                Sözleşmeyi onaylamanız gerekiyor
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}