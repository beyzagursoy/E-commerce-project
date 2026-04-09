import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../api/api';
import { X } from 'lucide-react';

export default function AddressForm({ onClose, onRefresh, editAddress }) {
    const [cityList, setCityList] = useState([]);
    const [loadingCities, setLoadingCities] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: editAddress || {
            title: "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            district: "",
            neighborhood: ""
        }
    });

    useEffect(() => {
        fetch("https://turkiyeapi.dev/api/v1/provinces")
            .then(res => res.json())
            .then(data => {
                const sortedCities = data.data.sort((a, b) => a.name.localeCompare(b.name));
                setCityList(sortedCities);
                setLoadingCities(false);
            })
            .catch(err => {
                console.error("İller yüklenemedi", err);
                setLoadingCities(false);
            });
    }, []);

    const onSubmit = (data) => {
        const request = editAddress 
            ? axiosWithAuth().put('/user/address', { ...data, id: editAddress.id })
            : axiosWithAuth().post('/user/address', data);

        request
            .then(() => {
                onRefresh();
                onClose();
            })
            .catch(err => {
                console.error("İşlem başarısız:", err.response?.data?.message || err.message);
                alert("Hata: " + (err.response?.data?.message || "İşlem tamamlanamadı."));
            });
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[110] p-4 backdrop-blur-sm">
            <div className="bg-white w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in duration-200">
                {/* Header */}
                <div className="px-8 py-5 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="font-bold text-xl text-[#252B42]">
                        {editAddress ? "Adresi Güncelle" : "Yeni Adres Ekle"}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400">
                        <X size={24}/>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 grid grid-cols-2 gap-4">
                    {/* Adres Başlığı */}
                    <div className="col-span-2">
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Adres Başlığı</label>
                        <input 
                            {...register("title", { required: "Başlık zorunludur" })} 
                            placeholder="Ev, İş vb." 
                            className={`w-full p-3 rounded-xl border ${errors.title ? 'border-red-500' : 'border-gray-200'} outline-[#23A6F0]`} 
                        />
                    </div>

                    {/* Ad & Soyad */}
                    <div>
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Ad</label>
                        <input {...register("name", { required: true })} className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0]" />
                    </div>
                    <div>
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Soyad</label>
                        <input {...register("surname", { required: true })} className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0]" />
                    </div>

                    {/* Telefon */}
                    <div>
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Telefon</label>
                        <input 
                            {...register("phone", { required: true, pattern: /^[0-9]+$/ })} 
                            placeholder="05XXXXXXXXX" 
                            className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0]" 
                        />
                    </div>

                    {/* Şehir - Dinamik Dropdown */}
                    <div>
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Şehir (İl)</label>
                        <select 
                            {...register("city", { required: true })} 
                            className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0] bg-white"
                        >
                            <option value="">{loadingCities ? "Yükleniyor..." : "İl Seçiniz"}</option>
                            {cityList.map((city) => (
                                <option key={city.id} value={city.name.toLowerCase()}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* İlçe */}
                    <div>
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">İlçe</label>
                        <input {...register("district", { required: true })} className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0]" />
                    </div>

                    {/* Neighborhood */}
                    <div className="col-span-2">
                        <label className="text-xs font-bold mb-1 block text-[#252B42]">Mahalle / Sokak / No</label>
                        <textarea 
                            {...register("neighborhood", { required: true })} 
                            rows="3" 
                            placeholder="Açık adresinizi buraya yazınız..."
                            className="w-full p-3 rounded-xl border border-gray-200 outline-[#23A6F0] resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="col-span-2 bg-[#23A6F0] text-white py-4 rounded-2xl font-bold mt-4 hover:bg-[#1a8cd3] transition-all shadow-lg active:scale-95"
                    >
                        {editAddress ? "Adresi Güncelle" : "Adresi Kaydet"}
                    </button>
                </form>
            </div>
        </div>
    );
}