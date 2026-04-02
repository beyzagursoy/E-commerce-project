import React from 'react';
import { homeData } from '../mocks/data';

const ContactPage = () => {
    const contactImg = homeData.contactImg || homeData.shop.categories[1].img;

    const offices = homeData.contactOffices;

    return (
        <main className="w-full relative min-h-screen lg:min-h-[700px] overflow-hidden bg-[#00708C]">
            {/* Arka Plan Görseli */}
            <img
                src={contactImg}
                alt="Contact Background"
                className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70 lg:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00708C] via-[#00708C]/60 to-transparent lg:bg-gradient-to-r lg:from-[#00708C] lg:via-[#00708C]/80 lg:to-transparent z-10" />

            {/* İçerik Alanı */}
            <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-center py-20 lg:py-0 min-h-screen lg:min-h-[700px]">

                {/* SOL TARAF: CONTACT US Bölümü */}
                <div className="w-full lg:w-[50%] px-8 flex flex-col items-center lg:items-start text-center lg:text-left z-30 mb-20 lg:mb-0 lg:pl-[195px]">
                    <div className="max-w-[400px]">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-8 tracking-[0.2px] text-white">
                            CONTACT US
                        </h1>
                        <p className="text-lg mb-10 leading-7 text-white/90">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                        <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white py-4 px-10 rounded-md font-bold uppercase transition-all shadow-lg lg:shadow-none">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* SAĞ TARAF: Ofis Bilgileri Grid */}
                <div className="w-full lg:w-[40%] px-8 lg:px-0 lg:pr-[195px] z-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-x-8 lg:gap-y-12">
                        {offices.map((office, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-3 
                           items-center lg:items-start 
                           text-left text-white"
                            >
                                <div className="flex flex-col items-start min-w-[200px]">
                                    <h3 className="text-2xl font-bold tracking-wide mb-1">
                                        {office.city}
                                    </h3>
                                    <p className="text-sm font-bold opacity-95 tracking-[0.1px]">
                                        {office.address}
                                    </p>
                                    <div className="w-12 h-1 bg-[#23A6F0] rounded-full my-3" />
                                    <div className="text-sm font-bold space-y-2 opacity-95 tracking-[0.1px]">
                                        <p>{office.zip}</p>
                                        <p>Phone ; +451 215 215</p>
                                        <p>Fax : +451 215 215</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default ContactPage;