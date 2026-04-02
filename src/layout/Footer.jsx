import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white font-montserrat w-full">
      {/* ÜST ŞERİT: Logo ve Sosyal Medya */}
      <div className="bg-[#FAFAFA] py-10 px-8 lg:px-0">
        <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h3 className="text-[#252B42] font-bold text-2xl tracking-[0.1px]">Bandage</h3>
          <div className="flex gap-5 text-[#23A6F0] text-2xl">
            <Facebook className="cursor-pointer hover:text-[#252B42] transition-colors" />
            <Instagram className="cursor-pointer hover:text-[#252B42] transition-colors" />
            <Twitter className="cursor-pointer hover:text-[#252B42] transition-colors" />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-[1050px] mx-auto px-8 lg:px-0">
        <hr className="border-gray-200" />
      </div>

      {/* ORTA BÖLÜM: Link Sütunları */}
      <div className="py-12 px-8 lg:px-0 bg-white">
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Sütun 1: Company Info */}
          <div className="flex flex-col gap-5">
            <h5 className="text-[#252B42] font-bold text-base">Company Info</h5>
            <div className="flex flex-col gap-2.5 text-[#737373] font-bold text-sm tracking-[0.2px]">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </div>
          </div>

          {/* Sütun 2: Legal */}
          <div className="flex flex-col gap-5">
            <h5 className="text-[#252B42] font-bold text-base">Legal</h5>
            <div className="flex flex-col gap-2.5 text-[#737373] font-bold text-sm tracking-[0.2px]">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </div>
          </div>

          {/* Sütun 3: Features */}
          <div className="flex flex-col gap-5">
            <h5 className="text-[#252B42] font-bold text-base">Features</h5>
            <div className="flex flex-col gap-2.5 text-[#737373] font-bold text-sm tracking-[0.2px]">
              <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
              <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
              <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
              <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
            </div>
          </div>

          {/* Sütun 4: Resources */}
          <div className="flex flex-col gap-5">
            <h5 className="text-[#252B42] font-bold text-base">Resources</h5>
            <div className="flex flex-col gap-2.5 text-[#737373] font-bold text-sm tracking-[0.2px]">
              <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
              <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
              <a href="#" className="hover:text-[#23A6F0]">Customers</a>
              <a href="#" className="hover:text-[#23A6F0]">API</a>
            </div>
          </div>

          {/* Sütun 5: Get In Touch - Takes up 2 columns */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-2">
            <h5 className="text-[#252B42] font-bold text-base">Get In Touch</h5>
            <div className="flex flex-col gap-2.5">
              
              <div className="flex w-full items-stretch">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-[5px] px-5 py-4 w-full text-base text-[#737373] placeholder:text-[#737373] focus:outline-none focus:border-[#23A6F0]"
                />
                <button 
                  className="bg-[#23A6F0] hover:bg-[#1a8cd3] text-white px-6 py-4 rounded-r-[5px] text-sm font-normal tracking-[0.2px] transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>

              <p className="text-[#737373] text-xs tracking-[0.2px]">
                Lore impum dolor Amit
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ALT ŞERİT: Telif Hakkı */}
      <div className="bg-[#FAFAFA] py-6 px-8 lg:px-0">
        <div className="max-w-[1050px] mx-auto text-center md:text-left">
          <p className="text-[#737373] font-bold text-sm tracking-[0.2px]">
            Made With Love By Finland All Right Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;