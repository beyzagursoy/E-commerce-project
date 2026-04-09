import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../api/api';
import { X, HelpCircle } from 'lucide-react';

export default function CardForm({ onClose, onRefresh, editCard }) {
    const { register, handleSubmit } = useForm({ defaultValues: editCard });

    const onSubmit = (data) => {
        const payload = { ...data, expire_month: Number(data.expire_month), expire_year: Number(data.expire_year) };
        const req = editCard ? axiosWithAuth().put('/user/card', { ...payload, id: editCard.id }) : axiosWithAuth().post('/user/card', payload);
        req.then(() => { onRefresh(); onClose(); });
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200] p-4 font-montserrat">
            <div className="bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl">
                <div className="p-8 border-b flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-xl font-bold text-[#252B42]">Kart Bilgileri</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full"><X size={20}/></button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                    <div>
                        <label className="text-sm font-bold text-[#252B42] mb-2 block">Kart Numarası</label>
                        <input {...register("card_no")} className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#23A6F0] outline-none transition-all" placeholder="**** **** **** ****" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-bold text-[#252B42] mb-2 block">Son Kullanma Tarihi</label>
                            <div className="flex gap-2">
                                <select {...register("expire_month")} className="flex-1 p-4 rounded-xl border border-gray-200 bg-white">
                                    <option value="">Ay</option>
                                    {Array.from({length: 12}, (_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                                </select>
                                <select {...register("expire_year")} className="flex-1 p-4 rounded-xl border border-gray-200 bg-white">
                                    <option value="">Yıl</option>
                                    {Array.from({length: 10}, (_, i) => <option key={i} value={2024+i}>{2024+i}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-bold text-[#252B42] mb-2 block flex items-center gap-1">CVV <HelpCircle size={14} className="text-orange-400"/></label>
                            <input className="w-full p-4 rounded-xl border border-gray-200" placeholder="***" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-bold text-[#252B42] mb-2 block">Kart Üzerindeki İsim</label>
                        <input {...register("name_on_card")} className="w-full p-4 rounded-xl border border-gray-200" placeholder="Ali Baş" />
                    </div>

                    <button type="submit" className="w-full bg-[#23A6F0] text-white py-5 rounded-2xl font-extrabold shadow-lg shadow-blue-200 hover:bg-[#1a8cd3] transition-all">
                        {editCard ? 'Kartı Güncelle' : 'Kartı Kaydet'}
                    </button>
                </form>
            </div>
        </div>
    );
}