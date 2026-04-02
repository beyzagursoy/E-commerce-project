import React from 'react';

const AboutHero = ({ data }) => (
    <section className="relative overflow-hidden bg-white">
        <div className="max-w-[1050px] mx-auto pt-16 lg:pt-24 pb-0 lg:pb-24 px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8 z-10 w-full">
                <h5 className="hidden lg:block text-[#252B42] font-bold text-sm tracking-[0.1px] uppercase">
                    ABOUT COMPANY
                </h5>
                <h1 className="text-[40px] lg:text-[58px] font-bold text-[#252B42] leading-tight">
                    ABOUT US
                </h1>
                <p className="text-xl text-[#737373] max-w-[370px] mx-auto lg:mx-0 leading-relaxed">
                    We know how large objects will act, <br className="hidden lg:block" />
                    but things on a small scale
                </p>
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-blue-500 transition-all text-sm">
                        Get Quote Now
                    </button>
                </div>
            </div>
            <div className="flex-1 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#FFE9EA] rounded-full -z-0"></div>
                <img
                    src={data.image}
                    alt="About Us"
                    className="relative z-10 w-full max-w-[400px] lg:max-w-none lg:scale-150 transform transition-transform"
                />
            </div>
        </div>
    </section>
);

export default AboutHero;