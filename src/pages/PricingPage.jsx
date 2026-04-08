import React from 'react';
import { homeData, pricingData } from '../mocks/data';
import TeamHeader from '../components/Team/TeamHeader';
import PricingCards from '../components/Pricing/PricingCards';
import PricingFAQ from '../components/Pricing/PricingFAQ';
import TeamCTA from '../components/Team/TeamCTA';
import ShopBrands from '../components/Shop/ShopBrands';

const PricingPage = () => {
  return (
    <div className="bg-white">
      <TeamHeader data={pricingData.header} />
      <PricingCards data={pricingData.pricingSection} />

      <div className="py-20 bg-[#FAFAFA]">
        <h4 className="text-center text-[#737373] mb-12 text-sm font-bold">Trusted By Over 4000 Big Companies</h4>
        <ShopBrands brands={homeData.shop.brands} />
      </div>

      <PricingFAQ data={pricingData.faqs} />
      <TeamCTA />
    </div>
  );
};

export default PricingPage;