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
      
      {/* DESKTOP DROPDOWN MENU */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
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
    <div className="flex items-center gap-1 text-sm font-bold whitespace-nowrap">
      <User size={18} className="lg:size-6" />
      <Link to="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1d87c4] transition-colors">Login</Link>
      <span className="mx-0.5">/</span>
      <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="hover:text-[#1d87c4] transition-colors">Register</Link>
    </div>
  );

  return (
    <header className="w-full font-montserrat sticky top-0 z-50 bg-white shadow-sm">
      {/* 1. TOP BAR */}
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
      <nav className="w-full bg-white px-8 py-4 lg:py-6 relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">

          <div className="flex justify-between items-center w-full lg:w-auto lg:mr-[120px]">
            <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
            <div className="flex items-center gap-4 lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#252B42]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MENU LINKS */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex flex-col lg:flex-row flex-1 items-center gap-8 lg:gap-4 
            mt-8 lg:mt-0 text-[#737373] font-bold text-2xl lg:text-sm
          `}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-[#23A6F0] ${isActive('/') ? 'text-[#252B42]' : ''}`}>Home</Link>

            {/* DESKTOP MEGA MENU */}
            <div className="relative group h-full hidden lg:flex items-center">
              <Link to="/shop" className={`flex items-center gap-1 hover:text-[#23A6F0] py-2 ${isActive('/shop') ? 'text-[#252B42]' : ''}`}>
                Shop <MdKeyboardArrowDown size={20} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-[100%] left-[-100px] w-[700px] bg-white shadow-2xl border-t-2 border-[#23A6F0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] p-8 flex text-[#737373]">
                <div className="grid grid-cols-2 gap-10 flex-1">
                  <div>
                    <h4 className="text-[#252B42] font-extrabold text-base mb-4 tracking-wide">Women</h4>
                    <ul className="space-y-3 font-medium text-sm list-none p-0">
                      {categories.filter(c => c.gender === 'k').map(cat => (
                        <li key={cat.id}>
                          <Link to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#252B42] font-extrabold text-base mb-4 tracking-wide">Men</h4>
                    <ul className="space-y-3 font-medium text-sm list-none p-0">
                      {categories.filter(c => c.gender === 'e').map(cat => (
                        <li key={cat.id}>
                          <Link to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`} onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-[200px] ml-6 overflow-hidden rounded-md hidden md:block">
                  <img src={slider1} alt="Promo" className="w-full h-48 object-cover rounded" />
                </div>
              </div>
            </div>

            {/* MOBILE SHOP MENU */}
            <div className="lg:hidden w-full flex flex-col items-center">
              <button onClick={() => setIsMobileShopOpen(!isMobileShopOpen)} className="flex items-center gap-1">
                Shop <ChevronDown size={24} className={isMobileShopOpen ? 'rotate-180' : ''} />
              </button>
              {isMobileShopOpen && (
                <div className="flex flex-col items-center gap-4 mt-4 bg-gray-50 w-screen py-4">
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.title.toLowerCase()}/${cat.id}`}
                      onClick={() => { setIsMenuOpen(false); setIsMobileShopOpen(false); }}
                      className="text-xl text-[#737373]"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">About</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Team</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Contact</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Pricing</Link>
          </div>

          {/* 3. MENU CONTENT / MOBILE ACTIONS */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex flex-col lg:flex-row flex-1 items-center gap-8 lg:gap-4 
            mt-8 lg:mt-0 text-[#737373] font-bold text-2xl lg:text-sm
            max-h-[calc(100vh-100px)] overflow-y-auto w-full lg:max-h-none lg:overflow-visible
          `}>
            <div className="lg:hidden flex flex-col items-center gap-6 mt-4 pb-8 border-t pt-8 w-full border-gray-100">
              {user && user.name ? (
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Gravatar email={user.email || ""} size={48} className="rounded-full border-2 border-[#23A6F0]" />
                    <span className="text-[#252B42] text-xl">{user.name}</span>
                  </div>
                  {/* MOBILE PREVIOUS ORDERS LINK */}
                  <Link 
                    to="/previous-orders" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 text-[#23A6F0]"
                  >
                    <Package size={24} /> Siparişlerim
                  </Link>
                  <button onClick={handleLogout} className="text-red-600 text-xl font-bold">Çıkış Yap</button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 text-[#23A6F0]">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </div>
              )}

              <div className="flex items-center gap-8 text-[#23A6F0] mt-4">
                <div className="relative">
                  <ShoppingCart size={32} onClick={() => { history.push('/cart'); setIsMenuOpen(false); }} />
                  <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                </div>
                <Heart size={32} />
                <Search size={32} />
              </div>
            </div>
          </div>

          {/* 4. DESKTOP ACTIONS AREA */}
          <div className="hidden lg:flex items-center gap-6 text-[#23A6F0] font-bold">
            {user && user.name ? <UserProfile /> : <AuthLinks />}
            <Search size={24} className="cursor-pointer hover:scale-110 transition-transform text-[#23A6F0]" />

            {/* SEPET DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer">
              <div className="flex items-center gap-1 hover:opacity-80" onClick={() => history.push('/cart')}>
                <ShoppingCart size={24} />
                <span className="text-xs bg-[#23A6F0] text-white rounded-full w-5 h-5 flex items-center justify-center -mt-3 -ml-2 font-bold">
                  {totalItems}
                </span>
              </div>

              {/* Dropdown Menü (Sepet) */}
              <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border border-gray-100 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110] text-[#252B42] mt-2">
                <h3 className="font-bold border-b border-gray-50 pb-3 mb-3 text-sm">
                  Sepetim ({totalItems} Ürün)
                </h3>
                <div className="max-h-80 overflow-y-auto space-y-0 pr-2">
                  {cart.length > 0 ? (
                    cart.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-center border-b border-gray-50 py-4 last:border-0">
                        <img
                          src={item.product.images?.[0]?.url || item.product.image}
                          alt={item.product.name}
                          className="w-16 h-20 object-cover rounded-lg border border-gray-50 shadow-sm"
                        />
                        <div className="flex-1 flex flex-col justify-between h-20">
                          <div>
                            <p className="text-[12px] font-bold line-clamp-2 leading-tight text-[#252B42]">
                              {item.product.name}
                            </p>
                            <p className="text-[11px] text-[#737373] mt-1">Adet: {item.count}</p>
                          </div>
                          <p className="text-sm text-[#23A6F0] font-black tracking-tight">
                            ${(item.product.price * item.count).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-6 text-center text-[#737373] text-sm">Sepetiniz şu an boş.</div>
                  )}
                </div>
                <div className="pt-4 flex gap-3 border-t border-gray-100 mt-2">
                  <Link to="/cart" className="flex-1 text-center border border-[#23A6F0] text-[#23A6F0] py-2.5 rounded-lg font-bold text-xs hover:bg-blue-50 transition-all">
                    Sepete Git
                  </Link>
                  <Link to="/order" className="flex-1 text-center bg-[#23A6F0] text-white py-2.5 rounded-lg font-bold text-xs hover:bg-[#1a8cd3] transition-all shadow-md active:scale-95">
                    Siparişi Tamamla
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <Heart size={24} /> <span className="text-xs">0</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}