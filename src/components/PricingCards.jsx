import React from 'react';
import { Check } from 'lucide-react';

const PricingCards = ({ data }) => {
  return (
    <section className="py-20 px-4 bg-[#FAFAFA]">
      <div className="max-w-[1050px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[40px] font-bold text-[#252B42]">{data.title}</h2>
          <p className="text-[#737373] max-w-[470px] mx-auto text-sm">{data.description}</p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="font-bold text-[#252B42]">Monthly</span>
            <div className="w-12 h-6 bg-white border border-[#23A6F0] rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-[#D0D0D0] rounded-full absolute left-1 top-1"></div>
            </div>
            <span className="font-bold text-[#252B42]">Yearly</span>
            <span className="bg-[#B2E3FF] text-[#23A6F0] px-4 py-2 rounded-full text-xs font-bold">Save 25%</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {data.plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`w-full max-w-[330px] p-10 border border-[#23A6F0] rounded-lg flex flex-col items-center gap-8 transition-all
                ${plan.isFeatured 
                  ? 'bg-[#252B42] text-white py-16 md:scale-110 z-10 border-none' 
                  : 'bg-white text-[#252B42]'}`}
            >
              <h3 className="text-2xl font-bold uppercase">{plan.name}</h3>
              <p className={`font-bold text-sm text-center px-8 ${plan.isFeatured ? 'text-white' : 'text-[#737373]'}`}>
                Organize across all apps by hand
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[40px] font-bold text-[#23A6F0]">{plan.price}</span>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-2xl font-bold text-[#23A6F0]">{plan.currency}</span>
                    <span className="text-sm font-bold text-[#8EC2F2]">Per Month</span>
                </div>
              </div>
              
              <div className="space-y-4 w-full">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className={`p-1 rounded-full ${feature.included ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'}`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.2px]">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-md font-bold transition-colors
                ${plan.isFeatured ? 'bg-[#23A6F0] text-white' : 'bg-[#252B42] text-white'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;