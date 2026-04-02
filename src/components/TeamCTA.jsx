import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const TeamCTA = () => {
    return (
        <section className="py-40 px-8 bg-white text-center">
            <div className="max-w-[600px] mx-auto space-y-8 flex flex-col items-center font-montserrat">
                <h2 className="text-[40px] font-bold text-[#252B42] leading-tight">
                    Start your 14 days free trial
                </h2>
                <p className="text-[#737373] text-sm leading-relaxed max-w-[400px]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor <br className="hidden md:block" />
                    do met sent. RELIT official consequent.
                </p>
                <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-md hover:bg-[#1a85c2] transition-colors uppercase">
                    Try it free now
                </button>

                <div className="flex gap-8 pt-4">
                    <Twitter className="text-[#55ACEE] cursor-pointer" size={30} fill="#55ACEE" />
                    <Facebook className="text-[#395185] cursor-pointer" size={30} fill="#395185" />
                    <Instagram className="text-[#000000] cursor-pointer" size={30} />
                    <Linkedin className="text-[#0A66C2] cursor-pointer" size={30} fill="#0A66C2" />
                </div>
            </div>
        </section>
    );
};

export default TeamCTA;