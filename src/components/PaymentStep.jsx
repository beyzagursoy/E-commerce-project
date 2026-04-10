import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from '../api/api';
import { Plus, Edit2, Trash2, ShieldCheck, HelpCircle, CreditCard } from 'lucide-react';
import CardForm from './CardForm';

export default function PaymentStep() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart?.cart || []);
    const selectedCardFromRedux = useSelector((state) => state.shoppingCart?.payment);
    
    const [cards, setCards] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    const productsTotal = cart.reduce((total, item) => {
        const price = item.product?.price || 0;
        const count = item.count || 0;
        return total + (count * price);
    }, 0);

    const shippingFee = 29.99;
    const shippingDiscount = productsTotal > 150 ? 29.99 : 0;
    const specialDiscount = 10.00; 
    const grandTotal = (productsTotal + shippingFee - shippingDiscount - specialDiscount).toFixed(2);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = () => {
        axiosWithAuth()
            .get('/user/card')
            .then(res => {
                setCards(res.data);
                if (res.data.length > 0 && (!selectedCardFromRedux || Object.keys(selectedCardFromRedux).length === 0)) {
                    handleSelectCard(res.data[0]);
                }
            })
            .catch(err => console.error("Kartlar yüklenemedi:", err));
    };

    const handleSelectCard = (card) => {
        dispatch({ type: 'SET_PAYMENT', payload: card });
    };

    const handleDeleteCard = (e, cardId) => {
        e.stopPropagation();
        if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
            axiosWithAuth().delete(`/user/card/${cardId}`).then(() => {
                fetchCards();
                if (selectedCardFromRedux?.id === cardId) {
                    dispatch({ type: 'SET_PAYMENT', payload: {} });
                }
            });
        }
    };

    const handleEditCard = (e, card) => {
        e.stopPropagation();
        setEditingCard(card);
        setIsFormOpen(true);
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10 font-montserrat text-[#252B42]">
            
            {/* Üst Adımlar */}
            <div className="flex border rounded-2xl overflow-hidden bg-white shadow-sm h-24">
                <div className="flex-1 p-5 bg-gray-50 opacity-50 border-r flex flex-col justify-center">
                    <h3 className="font-bold text-gray-500 text-lg">1. Adres Bilgileri</h3>
                    <p className="text-[11px] text-gray-400">Teslimat ve fatura adresi seçimi</p>
                </div>
                <div className="flex-1 p-5 border-b-4 border-[#23A6F0] bg-blue-50/20 flex flex-col justify-center">
                    <h3 className="font-bold text-[#23A6F0] text-lg">2. Ödeme Seçenekleri</h3>
                    <p className="text-[11px] text-[#23A6F0]/70">Banka/Kredi Kartı veya Alışveriş Kredisi</p>
                </div>
            </div>

            {/* Ana İçerik Alanı */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                
                {/* Başlık Bölümü */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <CreditCard className="text-[#23A6F0]" size={20} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Kart ile Öde</h2>
                        <p className="text-xs text-gray-400 font-medium leading-tight">Banka veya Kredi Kartı kullanarak ödemenizi güvenle yapabilirsiniz.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* SOL TARAF */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="flex justify-between items-center mb-4 px-1">
                            <h3 className="font-bold text-base">Kart Bilgileri</h3>
                            <button 
                                onClick={() => { setEditingCard(null); setIsFormOpen(true); }}
                                className="text-[#23A6F0] text-xs font-bold hover:underline flex items-center gap-1"
                            >
                                <Plus size={14} /> Başka bir kart ekle
                            </button>
                        </div>

                        {/* Kart Listesi */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cards.map((card) => (
                                <div 
                                    key={card.id}
                                    onClick={() => handleSelectCard(card)}
                                    className={`p-5 rounded-[24px] border-2 transition-all cursor-pointer relative group flex flex-col justify-between h-40 ${
                                        selectedCardFromRedux?.id === card.id 
                                        ? 'border-[#23A6F0] bg-blue-50/10 shadow-md ring-1 ring-[#23A6F0]/20' 
                                        : 'border-gray-100 hover:border-gray-200 bg-white'
                                    }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex -space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-[#EB001B] opacity-90"></div>
                                            <div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-90"></div>
                                        </div>
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={(e) => handleEditCard(e, card)} className="p-1.5 text-gray-400 hover:text-[#23A6F0]"><Edit2 size={14}/></button>
                                            <button onClick={(e) => handleDeleteCard(e, card.id)} className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold tracking-widest mb-1 text-[#252B42]">
                                            **** **** **** {card.card_no.slice(-4)}
                                        </p>
                                        <div className="flex justify-between items-end">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase font-bold">Kart Sahibi</span>
                                                <span className="text-xs font-bold truncate max-w-[120px]">{card.name_on_card}</span>
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-[10px] text-gray-400 uppercase font-bold">S.K.T</span>
                                                <span className="text-xs font-bold">{card.expire_month}/{card.expire_year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {selectedCardFromRedux?.id === card.id && (
                                        <div className="absolute -top-2 -right-2 bg-[#23A6F0] text-white rounded-full p-1 shadow-lg border-2 border-white">
                                            <ShieldCheck size={16} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ TARAF: Taksit Seçenekleri */}
                    <div className="lg:col-span-5 lg:border-l lg:pl-10 border-gray-50">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-base">Taksit Seçenekleri</h3>
                            <HelpCircle size={14} className="text-gray-300"/>
                        </div>
                        <p className="text-[11px] text-gray-400 mb-6 font-medium">Kartınıza uygun taksit seçeneğini seçiniz</p>
                        
                        <div className="rounded-2xl border border-gray-100 overflow-hidden bg-gray-50/30">
                            <table className="w-full text-sm">
                                <thead className="bg-white text-gray-400 border-b border-gray-100">
                                    <tr>
                                        <th className="p-4 text-left font-bold text-[10px] uppercase">Taksit Sayısı</th>
                                        <th className="p-4 text-left font-bold text-[10px] uppercase">Aylık Ödeme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-gray-50 last:border-0">
                                        <td className="p-4 flex items-center gap-3">
                                            <input type="radio" checked readOnly className="w-4 h-4 accent-[#23A6F0]" />
                                            <span className="font-bold text-gray-700">Tek Çekim</span>
                                        </td>
                                        <td className="p-4 font-bold text-[#23A6F0]">
                                            {grandTotal} TL
                                        </td>
                                    </tr>
                                    <tr className="opacity-40">
                                        <td className="p-4 pl-11 text-xs text-gray-400">Taksitli seçenekler kartınıza göre yüklenecektir.</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3D Secure Alanı */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm w-fit hover:border-[#23A6F0]/30 transition-all cursor-pointer">
                <input type="checkbox" id="3dsecure" className="w-5 h-5 accent-[#23A6F0] rounded cursor-pointer" />
                <label htmlFor="3dsecure" className="flex items-center gap-3 text-xs font-bold text-[#737373] cursor-pointer">
                    <ShieldCheck size={18} className="text-[#2DC071]" />
                    Ödememi 3D Secure ile yapmak istiyorum.
                </label>
            </div>

            {isFormOpen && (
                <CardForm 
                    onClose={() => setIsFormOpen(false)} 
                    onRefresh={fetchCards} 
                    editCard={editingCard} 
                />
            )}
        </div>
    );
}