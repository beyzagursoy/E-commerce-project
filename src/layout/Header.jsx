import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone, Mail, Search, ShoppingCart, Heart, User, Menu, X, Facebook, Instagram, Youtube, Twitter
} from 'lucide-react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full font-montserrat sticky top-0 z-50 bg-white shadow-sm">
      {/* 1. TOP BAR (DESKTOP ONLY) */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-8 justify-between items-center w-full">
        <div className="flex gap-6 items-center font-bold text-sm">
          <div className="flex items-center gap-1"><Phone size={16} /> (225) 555-0118</div>
          <div className="flex items-center gap-1"><Mail size={16} /> michelle.rivera@example.com</div>
        </div>
        <div className="font-bold text-sm tracking-tight">Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Follow Us :</span>
          <div className="flex gap-3">
            <Instagram size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <Youtube size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <Facebook size={18} className="cursor-pointer hover:scale-110 transition-transform" />
            <Twitter size={18} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="w-full bg-white px-8 py-4 lg:py-6">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">

          {/* Logo & Mobile Icons Group */}
          <div className="flex justify-between items-center w-full lg:w-auto lg:mr-[120px]">
            <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>

            {/* Mobile Actions (Menu Toggle) */}
            <div className="flex items-center gap-4 lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#252B42]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* 3. MENU CONTENT (DESKTOP & MOBILE) */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex flex-col lg:flex-row flex-1
            items-center gap-8 lg:gap-4 
            mt-8 lg:mt-0 
            text-[#737373] font-bold text-3xl lg:text-sm
            
            /* MOBİL SLIDER MANTIĞI: */
            max-h-[70vh] overflow-y-auto w-full scroll-smooth no-scrollbar
          `}>

            {/* Navigation Links */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-[#23A6F0] ${isActive('/') ? 'text-[#252B42]' : ''}`}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-1 hover:text-[#23A6F0] ${isActive('/shop') ? 'text-[#252B42]' : ''}`}>
              Shop <MdKeyboardArrowDown size={20} className="hidden lg:block" />
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">About</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Team</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Contact</Link>
            <Link to="/pages" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Pages</Link>

            {/* MOBILE ONLY ACTIONS */}
            <div className="flex lg:hidden flex-col items-center gap-8 text-[#23A6F0] mt-4 pb-10">
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <User size={24} /> Login / Register
              </Link>

              <Search size={24} className="cursor-pointer" />
              {/* ... diğer ikonlar */}
            </div>
          </div>


          {/* 4. DESKTOP ONLY ACTIONS */}
          <div className="hidden lg:flex items-center gap-6 text-[#23A6F0] font-bold">
            {/* Login / Register Linki */}
            <Link
              to="/signup"
              className="flex items-center gap-1 text-sm cursor-pointer whitespace-nowrap hover:opacity-80"
            >
              <User size={24} /> Login / Register
            </Link>

            <Search size={24} className="cursor-pointer hover:scale-110 transition-transform" />
            {/* ... diğer ikonlar */}
          </div>
        </div>
      </nav>
    </header>
  );
}