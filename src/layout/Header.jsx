import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Phone, Mail, Search, ShoppingCart, Heart, User, Menu, X, Facebook, Instagram, Youtube, Twitter, ChevronDown, Trash2
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false); 
  const location = useLocation();

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  
  const isActive = (path) => location.pathname === path;

  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(setUser({})); 
    localStorage.removeItem('token'); 
    history.push('/');
  };

  const UserProfile = () => (
    <div className="flex items-center gap-3 group relative cursor-pointer">
      <div className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors">
        <Gravatar 
          email={user.email || "test@test.com"} 
          size={32} 
          className="rounded-full border border-[#23A6F0]" 
          default="identicon" 
        />
        <span className="text-sm font-bold text-[#252B42] hidden sm:inline">{user.name}</span>
      </div>
      {/* Dropdown for Logout */}
      <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <button 
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-bold"
        >
          Logout
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
            <Instagram size={18} className="cursor-pointer hover:scale-110" />
            <Youtube size={18} className="cursor-pointer hover:scale-110" />
            <Facebook size={18} className="cursor-pointer hover:scale-110" />
            <Twitter size={18} className="cursor-pointer hover:scale-110" />
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

          {/* 3. MENU CONTENT */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex flex-col lg:flex-row flex-1
            items-center gap-8 lg:gap-4 
            mt-8 lg:mt-0 
            text-[#737373] font-bold text-2xl lg:text-sm
          `}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-[#23A6F0] ${isActive('/') ? 'text-[#252B42]' : ''}`}>Home</Link>
            
            {/* --- DESKTOP MEGA MENU --- */}
            <div className="relative group h-full hidden lg:flex items-center">
              <Link to="/shop" className={`flex items-center gap-1 hover:text-[#23A6F0] py-2 ${isActive('/shop') ? 'text-[#252B42]' : ''}`}>
                Shop <MdKeyboardArrowDown size={20} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-[100%] left-[-100px] w-[900px] bg-white shadow-2xl border-t-2 border-[#23A6F0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] p-10 flex">
                <div className="grid grid-cols-4 gap-12 flex-1">
                  <div>
                    <h4 className="text-[#252B42] font-extrabold text-base mb-6 tracking-wide">Women</h4>
                    <ul className="space-y-4 text-[#737373] font-medium text-sm list-none p-0">
                      {categories.filter(c => c.gender === 'k').map(cat => (
                        <li key={cat.id} className="hover:text-[#23A6F0] cursor-pointer">
                          <Link to={`/shop/women/${cat.code.split(':')[1]}`} onClick={() => setIsMenuOpen(false)}>{cat.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#252B42] font-extrabold text-base mb-6 tracking-wide">Men</h4>
                    <ul className="space-y-4 text-[#737373] font-medium text-sm list-none p-0">
                       {categories.filter(c => c.gender === 'e').map(cat => (
                        <li key={cat.id} className="hover:text-[#23A6F0] cursor-pointer">
                          <Link to={`/shop/men/${cat.code.split(':')[1]}`} onClick={() => setIsMenuOpen(false)}>{cat.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#252B42] font-extrabold text-base mb-6 tracking-wide">Popular</h4>
                    <ul className="space-y-4 text-[#737373] font-medium text-sm list-none p-0">
                      <li className="hover:text-[#23A6F0] cursor-pointer">Best Sellers</li>
                      <li className="hover:text-[#23A6F0] cursor-pointer">New Arrivals</li>
                    </ul>
                  </div>
                </div>
                <div className="w-[300px] ml-10 overflow-hidden rounded-md">
                   <img src={slider1} alt="Promo" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>

            {/* --- MOBILE SHOP MENU --- */}
            <div className="lg:hidden w-full flex flex-col items-center">
                <button 
                  onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                  className={`flex items-center gap-1 hover:text-[#23A6F0] ${isActive('/shop') ? 'text-[#252B42]' : ''}`}
                >
                  Shop <ChevronDown size={24} className={`transition-transform ${isMobileShopOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileShopOpen && (
                  <div className="flex flex-col items-center gap-4 mt-4 bg-gray-50 w-screen py-4">
                    {categories.slice(0, 10).map(cat => (
                      <Link 
                        key={cat.id}
                        to={`/shop/${cat.gender === 'k' ? 'women' : 'men'}/${cat.code.split(':')[1]}`}
                        onClick={() => {setIsMenuOpen(false); setIsMobileShopOpen(false);}}
                        className="text-xl text-[#737373] hover:text-[#23A6F0]"
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
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Pricing</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Contact</Link>

            {/* MOBILE ONLY ACTIONS */}
            <div className="flex lg:hidden flex-col items-center gap-8 text-[#23A6F0] mt-4 pb-10">
              {user && user.name ? <UserProfile /> : <AuthLinks />}
              <Search size={28} className="cursor-pointer" />
              <Link to="/cart" className="flex items-center gap-2">
                <ShoppingCart size={28} /> <span className="text-sm">{totalItems}</span>
              </Link>
              <div className="flex items-center gap-2">
                <Heart size={28} /> <span className="text-sm">0</span>
              </div>
            </div>
          </div>

          {/* 4. DESKTOP ONLY ACTIONS */}
          <div className="hidden lg:flex items-center gap-6 text-[#23A6F0] font-bold">
            {user && user.name ? <UserProfile /> : <AuthLinks />}
            
            <Search size={24} className="cursor-pointer hover:scale-110 transition-transform" />
            
            {/* SEPET DROPDOWN */}
            <div className="relative group flex items-center gap-1 cursor-pointer">
               <Link to="/cart" className="flex items-center gap-1 hover:opacity-80">
                  <ShoppingCart size={24} /> 
                  <span className="text-xs">{totalItems}</span>
               </Link>
               
               {/* Cart Summary Hover Menu */}
               {cart.length > 0 && (
                 <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110] text-[#252B42]">
                    <h3 className="font-bold border-b pb-2 mb-3">My Cart ({totalItems} items)</h3>
                    <div className="max-h-64 overflow-y-auto space-y-4">
                      {cart.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-center border-b border-gray-50 pb-2">
                          <img src={item.product.images?.[0]?.url || item.product.image} alt="" className="w-12 h-12 object-cover rounded" />
                          <div className="flex-1">
                            <p className="text-xs font-extrabold line-clamp-1">{item.product.name}</p>
                            <p className="text-xs text-[#737373]">Count: {item.count}</p>
                            <p className="text-xs text-[#23856D] font-bold">${item.product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex gap-2">
                      <Link to="/cart" className="flex-1 text-center bg-[#23A6F0] text-white py-2 rounded text-xs hover:bg-[#1a8cd1]">Go to Cart</Link>
                      <button className="flex-1 text-center border border-[#23A6F0] text-[#23A6F0] py-2 rounded text-xs hover:bg-blue-50">Checkout</button>
                    </div>
                 </div>
               )}
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