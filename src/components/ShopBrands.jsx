const ShopBrands = ({ brands }) => {
  return (
    <section className="bg-[#FAFAFA] py-12 px-8 lg:px-0">
      <div className="max-w-[1050px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center gap-12 lg:gap-8 justify-items-center">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center justify-center h-20 w-full group">
              <img
                src={brand.img}
                alt={brand.name}
                className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopBrands;