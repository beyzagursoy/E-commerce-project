import { ChevronRight } from 'lucide-react';

const ShopHeader = ({ categories }) => {
  return (
    <section className="bg-[#FAFAFA] font-montserrat">
      {/* Breadcrumb Part */}
      <div className="py-6 px-8 lg:px-0">
        <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-[#252B42] font-bold text-2xl">Shop</h2>
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="text-[#252B42]">Home</span>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* Category Cards Part */}
      <div className="pb-12 px-8 lg:px-0">
        <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          {categories.map((cat, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden h-[223px]">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold text-base tracking-[0.1px]">{cat.name}</h5>
                <p className="text-sm font-normal">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;