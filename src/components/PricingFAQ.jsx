import React from 'react';
import { ChevronRight } from 'lucide-react';

const PricingFAQ = ({ data }) => {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-[1050px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[40px] font-bold text-[#252B42]">{data.title}</h2>
          <p className="text-[#737373] text-xl">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {data.questions.map((item, idx) => (
            <div key={idx} className="space-y-3 flex gap-4">
              <ChevronRight className="text-[#23A6F0] shrink-0" size={24} />
              <div>
                <h5 className="text-[#252B42] font-bold text-base">{item.q}</h5>
                <p className="text-[#737373] text-sm leading-relaxed mt-2">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[#737373] text-xl mt-20 font-montserrat">
            Haven’t got your answer? Contact our support
        </p>
      </div>
    </section>
  );
};

export default PricingFAQ;