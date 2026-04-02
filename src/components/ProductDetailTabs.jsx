import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductDetailTabs = ({ activeTab, setActiveTab, categoryImg }) => {
    const tabs = ['Description', 'Additional Information', 'Reviews (0)'];

    return (
        <section className="bg-white border-t border-[#ECECEC]">
            <div className="max-w-[1050px] mx-auto px-8">
                {/* Tab Navigation */}
                <div className="flex justify-center border-b border-[#ECECEC]">
                    <div className="flex gap-4 md:gap-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                                className={`py-6 text-sm font-bold transition-all ${activeTab === tab.toLowerCase().split(' ')[0]
                                    ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]'
                                    : 'text-[#737373]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content Panel*/}
                <div className="py-12 flex flex-col md:flex-row gap-8 lg:gap-12 items-start justify-between">
                    
                    {/* 1. SÜTUN: GÖRSEL */}
                    <div className="w-full md:w-[332px] shrink-0">
                        <div className="rounded-[9px] overflow-hidden shadow-sm">
                            <img
                                src={categoryImg}
                                alt="Detail view"
                                className="w-full h-[392px] object-cover block"
                            />
                        </div>
                    </div>

                    {/* 2. SÜTUN: ORTA METİN BLOĞU */}
                    <div className="flex-[1.2] min-w-0">
                        <h3 className="text-[#252B42] text-2xl font-bold mb-6">
                            the quick fox jumps over
                        </h3>
                        <div className="text-[#737373] text-sm leading-6 space-y-7 font-normal">
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                                consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                                consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                                consequent sent nostrum met.
                            </p>
                        </div>
                    </div>

                    {/* 3. SÜTUN: SAĞ LİSTE BLOĞU */}
                    <div className="flex-1 min-w-0 flex flex-col gap-10">

                        {/* Üst Liste */}
                        <div className="space-y-5">
                            <h3 className="text-[#252B42] text-2xl font-bold whitespace-nowrap">
                                the quick fox jumps over
                            </h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-4 text-[#737373] text-sm font-bold">
                                        <ChevronRight size={16} className="text-[#737373] shrink-0" />
                                        <span className="leading-none whitespace-nowrap">the quick fox jumps over the lazy dog</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Alt Liste */}
                        <div className="space-y-5">
                            <h3 className="text-[#252B42] text-2xl font-bold whitespace-nowrap">
                                the quick fox jumps over
                            </h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-4 text-[#737373] text-sm font-bold">
                                        <ChevronRight size={16} className="text-[#737373] shrink-0" />
                                        <span className="leading-none whitespace-nowrap">the quick fox jumps over the lazy dog</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailTabs;