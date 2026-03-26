import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, Search, ShoppingCart, Heart, User, Menu, X, Facebook, Instagram, Youtube, Twitter
} from 'lucide-react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full font-montserrat sticky top-0 z-50 bg-white">
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-8 justify-between items-center w-full">
        <div className="flex gap-6 items-center font-bold text-sm">
          <div className="flex items-center gap-1"><Phone size={16}/> (225) 555-0118</div>
          <div className="flex items-center gap-1"><Mail size={16}/> michelle.rivera@example.com</div>
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

      <nav className="w-full bg-white px-8 py-4 lg:py-6 flex flex-col lg:flex-row items-center">
        <div className="flex justify-between items-center w-full lg:w-auto lg:mr-[120px]">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
          
          <div className="flex items-center gap-4 lg:hidden">
            <Search size={24} className="text-[#252B42]"/>
            <ShoppingCart size={24} className="text-[#252B42]"/>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28}/> : <Menu size={28} className="text-[#252B42]"/>}
            </button>
          </div>
        </div>

        <div className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          lg:flex flex-col lg:flex-row flex-1
          items-center gap-6 lg:gap-4 
          mt-8 lg:mt-0 
          text-[#737373] font-bold text-lg lg:text-sm
        `}>
          <Link to="/" className={`hover:text-[#23A6F0] transition-colors ${isActive('/') ? 'text-[#252B42]' : ''}`}>Home</Link>
          
          <Link to="/shop" className={`flex items-center gap-1 hover:text-[#23A6F0] transition-colors ${isActive('/shop') ? 'text-[#252B42]' : ''}`}>
            Shop <MdKeyboardArrowDown size={20}/>
          </Link>
          
          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[#23A6F0] font-bold">
           <div className="flex items-center gap-1 text-sm cursor-pointer whitespace-nowrap">
              <User size={18}/> Login / Register
           </div>
           <Search size={18} className="cursor-pointer"/>
           <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={18}/> 1
           </div>
           <div className="flex items-center gap-1 cursor-pointer">
              <Heart size={18}/> 1
           </div>
        </div>
      </nav>
    </header>
  );
}