import React from 'react';

const ContactCTA = ({ arrowImg }) => {
  return (
    <section className="py-24 px-8 text-center bg-white flex flex-col items-center font-montserrat">
      <div className="relative mb-6">
        <img src={arrowImg} alt="arrow decoration" />
      </div>
      <h6 className="text-[#252B42] font-bold text-base mb-4 tracking-[0.1px]">WE Can't WAIT TO MEET YOU</h6>
      <h2 className="text-[58px] font-bold text-[#252B42] mb-8 leading-tight">Let's Talk</h2>
      <button className="bg-[#23A6F0] hover:bg-[#1a8cd1] text-white py-4 px-10 rounded-md font-bold transition-all shadow-md">
        Try it free now
      </button>
    </section>
  );
};

export default ContactCTA;