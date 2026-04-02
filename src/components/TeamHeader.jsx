import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const TeamHeader = ({ data }) => {
    return (
        <section className="py-12 lg:py-16 text-center space-y-4 px-4 font-montserrat">
            <h5 className="text-[#737373] font-bold text-sm tracking-[0.1px]">
                {data.tag}
            </h5>
            <h1 className="text-[40px] lg:text-[58px] font-bold text-[#252B42] leading-tight">
                {data.title}
            </h1>
            <nav className="flex justify-center items-center gap-2 text-sm font-bold">
                <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                    {data.breadcrumb[0].name}
                </Link>
                <MdKeyboardArrowRight size={24} className="text-[#BDBDBD]" />
                <span className="text-[#737373]">
                    {data.breadcrumb[1].name}
                </span>
            </nav>
        </section>
    );
};

export default TeamHeader;