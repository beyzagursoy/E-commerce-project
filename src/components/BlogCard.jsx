import React from 'react';
import { Clock, MessageCircle, ChevronRight } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
      {/* Görsel Alanı */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {post.isNew && (
          <span className="absolute top-5 left-5 bg-[#E74C3C] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
            NEW
          </span>
        )}
      </div>

      {/* İçerik Alanı */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex gap-4">
          {post.tags.map((tag, i) => (
            <span key={i} className={`text-xs ${i === 0 ? 'text-[#8EC2F2]' : 'text-[#737373]'}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <h4 className="text-xl font-bold text-[#252B42] leading-tight">
          {post.title}
        </h4>
        
        <p className="text-[#737373] text-sm leading-relaxed">
          {post.description}
        </p>

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-1 text-[#737373] text-xs font-bold">
            <Clock size={14} className="text-[#23A6F0]" />
            {post.date}
          </div>
          <div className="flex items-center gap-1 text-[#737373] text-xs font-bold">
            <MessageCircle size={14} className="text-[#2DC071]" />
            {post.comments}
          </div>
        </div>

        <button className="flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors">
          Learn More <ChevronRight size={16} className="text-[#23A6F0]" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;