import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  Info, 
  ChevronRight, 
  ShoppingCart, 
  CheckCircle, 
  Package,
  PlusCircle 
} from 'lucide-react';

export default function ShoppingCartPage() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- HESAPLAMALAR ---
  const productsTotal = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.product.price * item.count), 0);

  const shippingFee = 29.99;
  const freeShippingThreshold = 150;
  const shippingDiscount = productsTotal >= freeShippingThreshold ? shippingFee : 0;
  
  const couponDiscount = productsTotal > 0 ? 10 : 0; 

  const grandTotal = Math.max(0, productsTotal + shippingFee - shippingDiscount - couponDiscount);

  const toggleCheck = (id) => dispatch({ type: 'TOGGLE_CHECK', payload: id });
  const removeProduct = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateCount = (id, newCount) => {
    if (newCount < 1) return;
    dispatch({ type: 'UPDATE_COUNT', payload: { id, count: newCount } });
  };

  const tabs = [
    { name: 'Önceden Eklediklerim', active: true },
    { name: 'Önerilen Ürünler', active: false },
    { name: 'Favorilerim', active: false, badge: 'Yeni' },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8 px-4 font-montserrat">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold text-[#252B42] mb-8 px-2">Sepetim ({cart.length} Ürün)</h1>

        {/* BİLGİLENDİRME KUTUSU */}
        <div className="bg-[#f6fff9] border border-[#e8f5ed] text-[#2DC071] p-4 rounded-xl mb-8 flex items-center gap-3 font-medium text-sm shadow-sm">
           <CheckCircle size={18} />
           Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* ÜRÜN LİSTESİ */}
          <div className="flex-[2] space-y-4 w-full">
            {cart.length > 0 ? cart.map((item) => (
              <div key={item.product.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Satıcı Bilgisi */}
                <div className="flex justify-between items-center mb-5 border-b border-gray-50 pb-4">
                  <div className="flex items-center gap-3">
                    <input 
                        type="checkbox" 
                        checked={item.checked}
                        onChange={() => toggleCheck(item.product.id)}
                        className="w-5 h-5 accent-[#23A6F0] cursor-pointer rounded"
                    />
                    <span className="text-sm font-medium text-[#737373]">Satıcı:</span>
                    <span className="font-bold text-[#252B42] text-sm">Mağaza Adı</span>
                    <span className="bg-[#2DC071] text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold tracking-tight">9.6</span>
                    <Info size={14} className="text-[#BDBDBD] cursor-help" />
                  </div>
                  <Link to="/shop" className="text-xs font-bold text-[#23A6F0] hover:text-[#1a8cd3] flex items-center gap-0.5">
                    Tüm Ürünler <ChevronRight size={14} />
                  </Link>
                </div>
                
                {/* Kargo Bilgisi */}
                <div className="bg-[#f8fcf9] text-[#2DC071] text-[11px] font-bold p-2.5 rounded-lg mb-5 flex items-center gap-2 border border-[#f0f9f2]">
                   <Package size={14} /> Kargo Bedava!
                </div>

                {/* Ürün Detay */}
                <div className="flex flex-col md:flex-row gap-5 items-center">
                  <img 
                    src={item.product.images?.[0]?.url || item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-28 object-cover rounded-xl border border-gray-50 p-1 shadow-sm" 
                  />

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-[#252B42] text-sm md:text-base leading-tight">{item.product.name}</h3>
                    <p className="text-[11px] text-[#737373] mt-1.5">Beden: 38</p>
                    <p className="text-[10px] text-[#737373] mt-0.5">Hızlı Teslimat: Yarın kargoda!</p>
                    
                    <div className="mt-5 flex items-center justify-center md:justify-start gap-8">
                      {/* Adet Kontrolü */}
                      <div className="flex items-center bg-[#F9F9F9] rounded-full p-1 border border-gray-100">
                        <button 
                            onClick={() => updateCount(item.product.id, item.count - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white hover:bg-blue-50 text-[#23A6F0] rounded-full shadow-sm transition-all border border-gray-100 disabled:opacity-30"
                            disabled={item.count <= 1}
                        >
                            <Minus size={14} />
                        </button>
                        <span className="px-4 font-bold text-sm text-[#252B42]">{item.count}</span>
                        <button 
                            onClick={() => updateCount(item.product.id, item.count + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white hover:bg-blue-50 text-[#23A6F0] rounded-full shadow-sm transition-all border border-gray-100"
                        >
                            <Plus size={14} />
                        </button>
                      </div>
                      
                      {/* Fiyat */}
                      <p className="text-xl font-black text-[#23A6F0]">
                        ${(item.product.price * item.count).toFixed(2)}
                      </p>
                      
                      {/* Silme */}
                      <button 
                        onClick={() => removeProduct(item.product.id)}
                        className="text-[#BDBDBD] hover:text-red-500 transition-colors ml-auto md:ml-4"
                        title="Ürünü Sil"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="bg-white p-20 text-center rounded-2xl border border-gray-100 flex flex-col items-center gap-4">
                <ShoppingCart size={48} className="text-[#E0E0E0]" />
                <p className="text-[#737373] font-medium">Sepetinizde ürün bulunmamaktadır.</p>
                <Link to="/shop" className="mt-2 bg-[#23A6F0] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all">
                  Alışverişe Devam Et
                </Link>
              </div>
            )}
            
            {/* Alt Sekmeler */}
            <div className="flex gap-8 mt-12 border-b border-gray-100 pb-px overflow-x-auto no-scrollbar">
               {tabs.map((tab, idx) => (
                  <div key={idx} className={`text-sm font-bold cursor-pointer whitespace-nowrap transition-all pb-3 ${tab.active ? 'text-[#252B42] border-b-2 border-[#23A6F0]' : 'text-[#BDBDBD] hover:text-[#737373]'}`}>
                     {tab.name}
                     {tab.badge && <span className="ml-1.5 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase">{tab.badge}</span>}
                  </div>
               ))}
            </div>
          </div>

          {/* SİPARİŞ ÖZETİ PANELİ */}
          <div className="flex-1 lg:sticky lg:top-24 w-full lg:max-w-[350px]">
            
            {/* Üst Onay Butonu */}
            <button className="w-full bg-[#23A6F0] text-white py-4 rounded-xl font-bold text-base hover:bg-[#1a8cd3] transition-all shadow-md mb-4 flex items-center justify-center gap-2">
              Sepeti Onayla <ChevronRight size={18} />
            </button>

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

                {/* Kargo Bedava İndirimi */}
                {productsTotal >= freeShippingThreshold && (
                  <div className="flex justify-between text-[#2DC071] font-bold text-[13px] bg-[#f6fff9] p-3 rounded-lg border border-[#e8f5ed]">
                    <span>150$ Üzeri Kargo Bedava</span>
                    <span>-${shippingFee.toFixed(2)}</span>
                  </div>
                )}

                {/* 10$ İndirim Satırı */}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-red-500 font-bold text-[13px]">
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

            {/* İndirim Kodu Butonu */}
            <button className="w-full bg-white border border-gray-200 text-[#737373] py-3 rounded-xl font-bold text-sm mt-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              <PlusCircle size={18} className="text-[#23A6F0]" /> İNDİRİM KODU GİR
            </button>

            {/* Alt Onay Butonu */}
            <button className="w-full bg-[#23A6F0] text-white py-4 rounded-xl font-bold text-base hover:bg-[#1a8cd3] transition-all shadow-md mt-4 flex items-center justify-center gap-2">
              Sepeti Onayla <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}