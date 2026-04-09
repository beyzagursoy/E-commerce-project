import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

import { axiosWithAuth } from '../api/api';
import { Plus, Edit2, Trash2, Info, ChevronRight } from 'lucide-react'; 
import AddressForm from './AddressForm';

export default function AddressStep({ onNext }) {
    const [addresses, setAddresses] = useState([]);
    const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
    const [isBillingSame, setIsBillingSame] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            history.push("/login");
            return;
        }
        fetchAddresses();
    }, [history]);

    const fetchAddresses = () => {
        axiosWithAuth()
            .get('/user/address')
            .then(res => {
                setAddresses(res.data);
                if (res.data.length > 0 && !selectedShippingAddress) {
                    setSelectedShippingAddress(res.data[0].id);
                    setSelectedBillingAddress(res.data[0].id);
                }
            })
            .catch(err => console.error("Adresler çekilemedi:", err));
    };

    const handleDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm("Bu adresi silmek istediğinize emin misiniz?")) {
            axiosWithAuth()
                .delete(`/user/address/${id}`)
                .then(() => fetchAddresses())
                .catch(err => console.error("Silme işlemi başarısız:", err));
        }
    };

    const handleEdit = (e, addr) => {
        e.stopPropagation();
        setEditingAddress(addr);
        setIsFormOpen(true);
    };

    const handleContinue = () => {
        if (!selectedShippingAddress) {
            alert("Lütfen bir teslimat adresi seçin.");
            return;
        }
        if (onNext) {
            onNext({
                shippingAddressId: selectedShippingAddress,
                billingAddressId: isBillingSame ? selectedShippingAddress : selectedBillingAddress
            });
        }
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
            {/* Header Steps */}
            <div className="flex border rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="flex-1 p-5 border-b-4 border-[#23A6F0] bg-blue-50/20">
                    <h3 className="font-bold text-[#23A6F0] text-lg">1. Adres Bilgileri</h3>
                    <p className="text-[11px] text-gray-400">Teslimat ve fatura adresi seçimi</p>
                </div>
                <div className="flex-1 p-5 bg-gray-50 opacity-50">
                    <h3 className="font-bold text-gray-700 text-lg">2. Ödeme Seçenekleri</h3>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 items-center">
                <Info size={20} className="text-[#23A6F0] shrink-0" />
                <p className="text-[12px] text-gray-600 leading-tight">
                    Kurumsal faturalı alışveriş için "Faturamı Aynı Adrese Gönder" seçeneğini kaldırıp kurumsal adresinizi seçebilirsiniz.
                </p>
            </div>

            <div className="flex justify-between items-center px-1">
                <h2 className="text-xl font-bold text-[#252B42]">Teslimat Adresi</h2>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#737373] cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isBillingSame}
                        onChange={() => setIsBillingSame(!isBillingSame)}
                        className="w-5 h-5 accent-[#23A6F0]"
                    />
                    Faturamı Aynı Adrese Gönder
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    onClick={() => { setEditingAddress(null); setIsFormOpen(true); }}
                    className="h-[180px] border-2 border-dashed border-gray-200 rounded-[32px] flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#23A6F0] hover:text-[#23A6F0] transition-all bg-white cursor-pointer group shadow-sm"
                >
                    <div className="bg-blue-50 p-4 rounded-full text-[#23A6F0] group-hover:scale-110 transition-transform">
                        <Plus size={24} />
                    </div>
                    <span className="font-bold text-sm">Yeni Adres Ekle</span>
                </div>

                {addresses.map((addr) => (
                    <div
                        key={addr.id}
                        onClick={() => {
                            setSelectedShippingAddress(addr.id);
                            if (isBillingSame) setSelectedBillingAddress(addr.id);
                        }}
                        className={`p-6 rounded-[32px] border-2 transition-all bg-white h-[180px] flex flex-col justify-between cursor-pointer relative ${
                            selectedShippingAddress === addr.id ? 'border-[#23A6F0] shadow-md' : 'border-gray-100'
                        }`}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="shipping"
                                    checked={selectedShippingAddress === addr.id}
                                    className="w-5 h-5 accent-[#23A6F0]"
                                    readOnly
                                />
                                <span className="font-bold text-sm text-[#252B42]">{addr.title}</span>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={(e) => handleEdit(e, addr)} className="p-2 hover:bg-blue-50 rounded-full text-[#23A6F0]"><Edit2 size={16}/></button>
                                <button onClick={(e) => handleDelete(e, addr.id)} className="p-2 hover:bg-red-50 rounded-full text-red-500"><Trash2 size={16}/></button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-bold text-gray-800">{addr.name} {addr.surname}</p>
                            <p className="text-[11px] text-gray-500 font-medium">{addr.phone}</p>
                            <p className="text-xs text-gray-700 font-bold">{addr.city} / {addr.district}</p>
                        </div>
                    </div>
                ))}
            </div>

            {!isBillingSame && (
                <div className="mt-8 space-y-4">
                    <h2 className="text-xl font-bold text-[#252B42]">Fatura Adresi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {addresses.map((addr) => (
                            <div
                                key={`billing-${addr.id}`}
                                onClick={() => setSelectedBillingAddress(addr.id)}
                                className={`p-6 rounded-[32px] border-2 transition-all bg-white h-[180px] flex flex-col justify-between cursor-pointer ${
                                    selectedBillingAddress === addr.id ? 'border-[#23A6F0] shadow-md' : 'border-gray-100'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="billing"
                                        checked={selectedBillingAddress === addr.id}
                                        className="w-5 h-5 accent-[#23A6F0]"
                                        readOnly
                                    />
                                    <span className="font-bold text-sm text-[#252B42]">{addr.title}</span>
                                </div>
                                <div className="space-y-1 mt-4">
                                    <p className="text-sm font-bold text-gray-800">{addr.name} {addr.surname}</p>
                                    <p className="text-xs text-gray-700 font-bold">{addr.city} / {addr.district}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isFormOpen && (
                <AddressForm 
                    onClose={() => { setIsFormOpen(false); setEditingAddress(null); }} 
                    onRefresh={fetchAddresses}
                    editAddress={editingAddress}
                />
            )}
        </div>
    );
}