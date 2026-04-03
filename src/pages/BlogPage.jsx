import React from 'react';
import { blogData } from '../mocks/data';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  return (
    <section className="py-20 px-4 max-w-[1050px] mx-auto">
      {/* Sayfa Başlığı */}
      <div className="text-center mb-20 space-y-4">
        <h6 className="text-[#23A6F0] font-bold text-sm tracking-wide">
          {blogData.header.tag}
        </h6>
        <h2 className="text-[40px] font-bold text-[#252B42]">
          {blogData.header.title}
        </h2>
        <p className="text-[#737373] max-w-[470px] mx-auto text-sm">
          {blogData.header.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogData.posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;