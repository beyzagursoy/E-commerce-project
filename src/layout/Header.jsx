import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Phone, Mail, Search, ShoppingCart, Heart, User, Menu, X, Instagram, Youtube, Facebook, Twitter, ChevronDown, Package
} from 'lucide-react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/actions/productActions';
import { setUser } from '../store/actions/clientActions';
import Gravatar from 'react-gravatar';
import slider1 from "../assets/images/slider-1.png";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const totalItems = cart.reduce((total, item) => total + item.count, 0);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setUser({}));
    localStorage.removeItem('token');
    history.push('/');
    setIsMenuOpen(false);
  };

  const UserProfile = () => (
    <div className="flex items-center gap-3 group relative cursor-pointer">
      <div className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors">
        <Gravatar
          email={user.email || ""}
          size={32}
          className="rounded-full border border-[#23A6F0]"
          default="identicon"
        />
        <span className="text-sm font-bold text-[#252B42] hidden sm:inline">{user.name}</span>
        <ChevronDown size={14} className="text-[#737373]" />
      </div>

      <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] py-2">
        <Link
          to="/previous-orders"
          className="flex items-center gap-2 px-4 py-3 text-sm text-[#252B42] hover:bg-blue-50 hover:text-[#23A6F0] font-bold border-b border-gray-50"
        >
          <Package size={16} /> Siparişlerim
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-bold transition-colors"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );

  const AuthLinks = () => (
    <div className="flex items-center gap-1 text-sm font-bold whitespace-nowrap text-[#23A6F0]">
      <User size={18} className="lg:size-6" />
      <Link to="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1d87c4] transition-colors">Login</Link>
      <span className="mx-0.5">/</span>
      <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1d87c4] transition-colors">Register</Link>
    </div>
  );

  return (
    <header className="w-full font-montserrat sticky top-0 z-[100] bg-white shadow-sm">
      {/* 1. TOP BAR */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-8 justify-between items-center w-full">
        <div className="flex gap-6 items-center font-bold text-sm">
          <div className="flex items-center gap-1"><Phone size={16} /> (225) 555-0118</div>
          <div className="flex items-center gap-1"><Mail size={16} /> michelle.rivera@example.com</div>
        </div>
        <div className="font-bold text-sm tracking-tight text-center">Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Follow Us :</span>
          <div className="flex gap-3">
            <Instagram size={18} className="cursor-pointer hover:scale-110" />
            <Youtube size={18} className="cursor-pointer hover:scale-110" />
            <Facebook size={18} className="cursor-pointer hover:scale-110" />
            <Twitter size={18} className="cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="w-full bg-white px-8 py-4 lg:py-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 lg:gap-10">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42] z-[110] flex-shrink-0">Bandage</Link>

          {/* Hamburger (Mobile) */}
          <div className="lg:hidden z-[110]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#252B42]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* 3. MENU CONTENT  */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex flex-col lg:flex-row flex-1 items-center lg:justify-start 
            text-[#737373] font-bold text-lg lg:text-sm
            fixed lg:relative 
            top-0 lg:top-0 left-0 
            w-full lg:w-auto 
            h-screen lg:h-auto 
            bg-white lg:bg-transparent
            pt-20 lg:pt-0 pb-10 lg:pb-0
            overflow-y-auto lg:overflow-visible
            z-[105] lg:z-auto
            gap-6 lg:gap-5
          `}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-[#23A6F0] ${isActive('/') ? 'text-[#252B42]' : ''}`}>Home</Link>

            {/* SHOP */}
            <div className="relative group w-full lg:w-auto flex flex-col lg:flex-row items-center">
              <button
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                className={`flex items-center gap-1 hover:text-[#23A6F0] py-2 ${isActive('/shop') ? 'text-[#252B42]' : ''}`}
              >
                Shop {isMenuOpen ? <ChevronDown size={20} /> : <MdKeyboardArrowDown size={20} className="hidden lg:block transition-transform group-hover:rotate-180" />}
              </button>

              {/* Mobile Dropdown */}
              {isMobileShopOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 bg-gray-50 w-full py-6 my-2 text-base">
                  <h4 className="text-[#252B42] font-black uppercase">Women</h4>
                  {categories.filter(c => c.gender === 'k').map(cat => (
                    <Link key={cat.id} to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`} onClick={() => setIsMenuOpen(false)}>{cat.title}</Link>
                  ))}
                  <div className="w-1/4 h-[1px] bg-gray-200"></div>
                  <h4 className="text-[#252B42] font-black uppercase">Men</h4>
                  {categories.filter(c => c.gender === 'e').map(cat => (
                    <Link key={cat.id} to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`} onClick={() => setIsMenuOpen(false)}>{cat.title}</Link>
                  ))}
                </div>
              )}

              {/* Desktop Mega Menu */}
              <div className="hidden lg:group-hover:flex absolute top-full left-0 w-[600px] bg-white shadow-2xl border-t-2 border-[#23A6F0] z-[120] p-8 text-left gap-10">
                <div className="grid grid-cols-2 gap-10 flex-1">
                  <div>
                    <h4 className="text-[#252B42] font-black text-xs mb-4 uppercase tracking-widest">Women</h4>
                    <ul className="space-y-3 text-sm list-none p-0 font-medium">
                      {categories.filter(c => c.gender === 'k').map(cat => (
                        <li key={cat.id}><Link to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`} className="hover:text-[#23A6F0]">{cat.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#252B42] font-black text-xs mb-4 uppercase tracking-widest">Men</h4>
                    <ul className="space-y-3 text-sm list-none p-0 font-medium">
                      {categories.filter(c => c.gender === 'e').map(cat => (
                        <li key={cat.id}><Link to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`} className="hover:text-[#23A6F0]">{cat.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-[200px] relative group/promo overflow-hidden rounded-lg self-stretch">
                  <img
                    src={slider1}
                    alt="Promo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/promo:scale-110"
                  />
                </div>
              </div>
            </div>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">About</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Team</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Contact</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Pricing</Link>

            {/* MOBILE ONLY ACTIONS */}
            <div className="lg:hidden flex flex-col items-center gap-6 mt-4 w-full border-t pt-8 border-gray-100">
              {user?.name ? (
                <>
                  <div className="flex flex-col items-center gap-2">
                    <Gravatar email={user.email} size={40} className="rounded-full border border-[#23A6F0]" />
                    <span className="text-[#252B42]">{user.name}</span>
                  </div>
                  <Link to="/previous-orders" onClick={() => setIsMenuOpen(false)} className="text-[#23A6F0] font-bold">Siparişlerim</Link>
                  <button onClick={handleLogout} className="text-red-500 font-bold">Çıkış Yap</button>
                </>
              ) : (
                <div className="text-[#23A6F0] flex flex-col items-center gap-4">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </div>
              )}
              {/* Mobile Icons */}
              <div className="flex items-center gap-8 text-[#23A6F0] mt-4">
                <div className="relative" onClick={() => { history.push('/cart'); setIsMenuOpen(false); }}>
                  <ShoppingCart size={28} />
                  {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">{totalItems}</span>}
                </div>
                <Heart size={28} />
                <Search size={28} />
              </div>
            </div>
          </div>

          {/* 4. DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-6 text-[#23A6F0] font-bold flex-shrink-0">
            {user?.name ? <UserProfile /> : <AuthLinks />}
            <Search size={22} className="cursor-pointer" />
            <div className="relative flex items-center gap-1 cursor-pointer" onClick={() => history.push('/cart')}>
              <ShoppingCart size={22} />
              <span className="text-xs bg-[#23A6F0] text-white rounded-full w-5 h-5 flex items-center justify-center -mt-3 -ml-2 font-bold">{totalItems}</span>
            </div>
            <div className="flex items-center gap-1"><Heart size={22} /> <span className="text-xs">0</span></div>
          </div>
        </div>
      </nav>
    </header>
  );
}