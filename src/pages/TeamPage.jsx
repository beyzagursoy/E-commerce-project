import React from 'react';
import { homeData } from '../mocks/data';
import TeamMemberCard from '../components/TeamMemberCard';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const TeamPage = () => {
    const teamData = homeData.team;

    return (
        <div className="bg-white min-h-screen">

            {/* 1. ÜST BAŞLIK VE BREADCRUMB ALANI */}
            <section className="py-12 lg:py-16 text-center space-y-4 px-4 font-montserrat">
                <h5 className="text-[#737373] font-bold text-sm tracking-[0.1px]">
                    {teamData.header.tag}
                </h5>
                <h1 className="text-[40px] lg:text-[58px] font-bold text-[#252B42] leading-tight">
                    {teamData.header.title}
                </h1>
                <nav className="flex justify-center items-center gap-2 text-sm font-bold">
                    <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                        {teamData.header.breadcrumb[0].name}
                    </Link>
                    <MdKeyboardArrowRight size={24} className="text-[#BDBDBD]" />
                    <span className="text-[#737373]">
                        {teamData.header.breadcrumb[1].name}
                    </span>
                </nav>
            </section>

            {/* 2. IMAGE GALLERY SECTION - TAM GENİŞLİK (Boşluksuz) */}
            <section className="w-full flex flex-col lg:flex-row gap-2 h-auto lg:h-[530px]">
                {/* Ana Büyük Görsel (Sol) */}
                <div className="flex-1 overflow-hidden group">
                    <img
                        src={teamData.gallery.main}
                        alt="Team Main"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                </div>

                {/* 4'lü Küçük Görsel Grid (Sağ) */}
                <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className="overflow-hidden group">
                        <img src={teamData.gallery.sideTopLeft} alt="Side 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                    <div className="overflow-hidden group">
                        <img src={teamData.gallery.sideTopRight} alt="Side 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                    <div className="overflow-hidden group">
                        <img src={teamData.gallery.sideBottomLeft} alt="Side 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                    <div className="overflow-hidden group">
                        <img src={teamData.gallery.sideBottomRight} alt="Side 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </div>
                </div>
            </section>

            {/* 3. EKİP ÜYELERİ ALANI */}
            <section className="bg-[#FAFAFA] py-28 px-8">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h2 className="text-[40px] font-bold text-[#252B42]">
                        {teamData.title}
                    </h2>
                    <p className="text-[#737373] text-sm leading-relaxed max-w-[450px] mx-auto font-montserrat">
                        {teamData.subtitle}
                    </p>
                </div>

                <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {teamData.members.map((member) => (
                        <div key={member.id} className="flex justify-center">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA SECTION - FREE TRIAL */}
            <section className="py-40 px-8 bg-white text-center">
                <div className="max-w-[600px] mx-auto space-y-8 flex flex-col items-center">
                    <h2 className="text-[40px] font-bold text-[#252B42] leading-tight">
                        Start your 14 days free trial
                    </h2>
                    <p className="text-[#737373] text-sm leading-relaxed max-w-[400px]">
                        Met minim Mollie non desert Alamo est sit cliquey dolor <br className="hidden md:block" />
                        do met sent. RELIT official consequent.
                    </p>
                    <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-md hover:bg-[#1a85c2] transition-colors">
                        Try it free now
                    </button>

                    {/* Social Icons */}
                    <div className="flex gap-8 pt-4">
                        <Twitter className="text-[#55ACEE] cursor-pointer" size={30} fill="#55ACEE" />
                        <Facebook className="text-[#395185] cursor-pointer" size={30} fill="#395185" />
                        <Instagram className="text-[#000000] cursor-pointer" size={30} />
                        <Linkedin className="text-[#0A66C2] cursor-pointer" size={30} fill="#0A66C2" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;