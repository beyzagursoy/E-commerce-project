import React from 'react';

const AboutWorkWithUs = ({ data }) => {
    return (
        <section className="flex flex-col lg:flex-row bg-[#2A7CC7] text-white">
            {/* Sol Metin Alanı */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start px-8 py-20 lg:px-[10%] lg:py-24 space-y-6">
                <h5 className="font-bold tracking-[0.1px] text-sm lg:text-base">
                    {data.subTitle}
                </h5>

                <h2 className="text-[40px] lg:text-[58px] font-bold leading-tight max-w-md text-center lg:text-left">
                    {data.title}
                </h2>

                <p className="text-sm lg:text-base opacity-80 max-w-sm text-center lg:text-left leading-relaxed">
                    {data.description}
                </p>

                <button className="border border-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#2A7CC7] transition-all duration-300 uppercase text-sm tracking-wider">
                    {data.buttonText}
                </button>
            </div>

            {/* Sağ Görsel Alanı */}
            <div className="hidden lg:block lg:w-[40%]">
                <img
                    src={data.image}
                    alt="Work With Us"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default AboutWorkWithUs;