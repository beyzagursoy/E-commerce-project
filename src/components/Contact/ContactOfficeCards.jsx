import React from 'react';
import { Phone, MapPin, Mail } from "lucide-react";

const CardItem = ({ Icon, bgClass = "bg-white", textClass = "text-[#252B42]", scaleClass = "" }) => (
  <div className={`${bgClass} ${scaleClass} p-12 flex flex-col items-center gap-4 group transition-all duration-300`}>
    <Icon size={72} className="text-[#23A6F0]" strokeWidth={1.5} />
    <div className={`${textClass} font-bold text-sm text-center`}>
      <p>georgia.young@example.com</p>
      <p>georgia.young@ple.com</p>
    </div>
    <h5 className={`${textClass} font-bold text-base mt-4`}>Get Support</h5>
    <button className="border border-[#23A6F0] text-[#23A6F0] py-4 px-8 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
      Submit Request
    </button>
  </div>
);

const ContactOfficeCards = () => {
  return (
    <section className="bg-white py-28 px-8 text-center font-montserrat">
      <div className="max-w-[1050px] mx-auto space-y-20">
        <div className="space-y-4">
          <h6 className="text-[#252B42] font-bold text-sm tracking-[0.1px] uppercase">Visit Our Office</h6>
          <h2 className="text-[40px] font-bold text-[#252B42] leading-tight max-w-[550px] mx-auto">
            We help small businesses with big ideas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          <CardItem Icon={Phone} />
          <CardItem Icon={MapPin} bgClass="bg-[#252B42]" textClass="text-white" scaleClass="md:scale-110 shadow-2xl z-10" />
          <CardItem Icon={Mail} />
        </div>
      </div>
    </section>
  );
};

export default ContactOfficeCards;