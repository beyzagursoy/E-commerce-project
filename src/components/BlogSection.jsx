import React from 'react';
import { homeData } from '../mocks/data';
import { AlarmClock, ChartArea, ChevronRight } from 'lucide-react'; // İkonları import ettik

const BlogSection = () => {
  const { posts } = homeData;

  return (
    <section className="bg-white py-20 px-8 lg:px-0 font-montserrat">
      <div className="max-w-[1050px] mx-auto">
        
        {/* ÜST BAŞLIK ALANI */}
        <div className="text-center mb-20">
          <h6 className="text-[#23A6F0] font-bold text-sm tracking-[0.2px] mb-2">
            Practice Advice
          </h6>
          <h2 className="text-[#252B42] font-bold text-[40px] leading-[50px] tracking-[0.2px] mb-2">
            Featured Posts
          </h2>
          <p className="text-[#737373] text-sm tracking-[0.2px] max-w-[470px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* KARTLARIN DİZİLİMİ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex flex-col group cursor-pointer border border-[#E8E8E8] lg:border-none">
              
              {/* KART GÖRSELİ */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-5 left-5 bg-[#E74040] text-white px-2.5 py-1 rounded-[3px] font-bold text-sm shadow-md uppercase">
                  {post.tag}
                </span>
              </div>

              {/* KART İÇERİĞİ */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-4 mb-4 text-xs">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                
                <h4 className="text-[#252B42] text-xl leading-[30px] mb-4 hover:text-[#23A6F0] transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-[#737373] text-sm leading-5 mb-4 flex-grow">
                  {post.desc}
                </p>

                {/* TARİH VE YORUM ALANI: Görseldeki ikonlarla birebir */}
                <div className="flex justify-between items-center py-6 text-xs font-normal text-[#737373]">
                  <div className="flex items-center gap-2">
                    <AlarmClock size={16} className="text-[#23A6F0]" /> {/* Mavi saat ikonu */}
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChartArea size={16} className="text-[#23856D]" /> {/* Yeşil grafik ikonu */}
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* LEARN MORE: Görseldeki chevron ikonu ile */}
                <div className="flex items-center gap-1 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors mt-2 group/link">
                  Learn More 
                  <ChevronRight size={20} className="text-[#23A6F0] transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;