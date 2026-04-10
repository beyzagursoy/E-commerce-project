import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../api/api';
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard } from 'lucide-react';

export default function PreviousOrders() {
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get('/order')
            .then(res => {
                const sortedOrders = res.data.sort((a, b) => new Date(b.order_date) - new Date(a.order_date));
                setOrders(sortedOrders);
            })
            .catch(err => console.error("Siparişler yüklenemedi:", err));
    }, []);

    const toggleOrder = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 min-h-screen font-montserrat">
            <h1 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#252B42]">
                <Package className="text-[#23A6F0]" /> Geçmiş Siparişlerim
            </h1>

            {orders.length === 0 ? (
                <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100">
                    <p className="text-gray-500">Henüz bir siparişiniz bulunmuyor.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            {/* Sipariş Başlığı*/}
                            <div
                                onClick={() => toggleOrder(order.id)}
                                className="p-5 flex flex-wrap items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Sipariş Tarihi</span>
                                        <span className="text-sm font-bold flex items-center gap-1">
                                            <Calendar size={14} className="text-gray-400" />
                                            {new Date(order.order_date).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Toplam Tutar</span>
                                        <span className="text-sm font-bold text-[#23A6F0]">${order.price.toFixed(2)}</span>
                                    </div>
                                    <div className="hidden md:flex flex-col">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">Kart</span>
                                        <span className="text-sm font-medium flex items-center gap-1 italic">
                                            <CreditCard size={14} /> **** {order.card_no.toString().slice(-4)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm">
                                    Detayları {expandedOrder === order.id ? 'Gizle' : 'Gör'}
                                    {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            {/* Açılır Panel (Sipariş Detayları) */}
                            {expandedOrder === order.id && (
                                <div className="p-6 bg-gray-50/50 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                                    <h4 className="text-[11px] font-extrabold text-[#737373] uppercase mb-4 tracking-[0.15em] flex items-center gap-2">
                                        <Package size={14} className="text-[#23A6F0]" /> Sipariş İçeriği
                                    </h4>

                                    <div className="grid grid-cols-1 gap-4">
                                        {order.products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#23A6F0]/30 transition-all group"
                                            >
                                                {/* Ürün Görseli ve Bilgileri */}
                                                <div className="flex items-center gap-5">
                                                    <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                                                        <img
                                                            src={product.images?.[0]?.url}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>

                                                    <div className="flex flex-col max-w-md">
                                                        <span className="text-sm font-bold text-[#252B42] group-hover:text-[#23A6F0] transition-colors">
                                                            {product.name}
                                                        </span>
                                                        <p className="text-xs text-[#737373] mt-1 line-clamp-2 leading-relaxed">
                                                            {product.description}
                                                        </p>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-bold">
                                                                ID: #{product.id}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Fiyat ve Adet Bilgisi */}
                                                <div className="flex gap-10 items-center pr-4">
                                                    <div className="text-center">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Birim Fiyat</p>
                                                        <p className="text-sm font-bold text-[#252B42] tracking-tight">
                                                            ${product.price.toFixed(2)}
                                                        </p>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Adet</p>
                                                        <div className="bg-[#23A6F0]/10 text-[#23A6F0] px-3 py-1 rounded-lg text-sm font-black">
                                                            {product.count}
                                                        </div>
                                                    </div>

                                                    <div className="text-right min-w-[80px]">
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Toplam</p>
                                                        <p className="text-sm font-black text-[#23A6F0] tracking-tight">
                                                            ${(product.price * product.count).toFixed(2)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Alt Toplam Özeti (Opsiyonel) */}
                                    <div className="mt-6 pt-4 border-t border-dashed border-gray-200 flex justify-end">
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-gray-400 uppercase mr-4">Genel Toplam:</span>
                                            <span className="text-lg font-black text-[#252B42]">${order.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}