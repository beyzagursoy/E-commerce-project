import React from 'react';
import { homeData, pricingData } from '../mocks/data';
import TeamHeader from '../components/TeamHeader'; 
import PricingCards from '../components/PricingCards';
import PricingFAQ from '../components/PricingFAQ';
import TeamCTA from '../components/TeamCTA'; 
import ShopBrands from '../components/ShopBrands';

const PricingPage = () => {
  return (
    <div className="bg-white">
      <TeamHeader data={pricingData.header} />
      <PricingCards data={pricingData.pricingSection} />
      
      <div className="py-20 bg-[#FAFAFA]">
        <h4 className="text-center text-[#737373] mb-12 text-sm font-bold">Trusted By Over 4000 Big Companies</h4>
        <ShopBrands brands={homeData.shop.brands}/> 
      </div>

      <PricingFAQ data={pricingData.faqs} />
      <TeamCTA />
    </div>
  );
};

export default PricingPage;