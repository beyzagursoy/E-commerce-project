import React from 'react';
import { homeData } from '../mocks/data';
import { Link } from 'react-router-dom';

import AboutHero from '../components/About/AboutHero';
import AboutStats from '../components/About/AboutStats';
import AboutVideo from '../components/About/AboutVideo';
import AboutWorkWithUs from '../components/About/AboutWorkWithUs';
import ShopBrands from '../components/Shop/ShopBrands';
import TeamMemberCard from '../components/Team/TeamMemberCard';

const AboutPage = () => {
    const { aboutData, team, shop } = homeData;

    return (
        <div className="w-full">
            {/* 1. HERO SECTION */}
            <AboutHero data={aboutData.hero} />

            {/* 2. PROBLEMS SECTION */}
            <section className="max-w-[1050px] mx-auto py-20 px-8">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 text-center lg:text-left">
                    <div className="flex-1 space-y-6">
                        <h5 className="text-[#E74040] text-sm font-bold tracking-[0.1px]">Problems trying</h5>
                        <h2 className="text-[24px] font-bold text-[#252B42] leading-tight max-w-[390px] mx-auto lg:mx-0">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>
                    <div className="flex-1 flex items-center">
                        <p className="text-[#737373] text-sm leading-relaxed max-w-[350px] mx-auto lg:mx-0">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. STATS SECTION */}
            <AboutStats stats={aboutData.stats} />

            {/* 4. VIDEO SECTION */}
            <AboutVideo videoData={aboutData.videoSection} />

            {/* 5. TEAM SECTION */}
            <section className="bg-white py-20 px-8">
                <div className="max-w-[1050px] mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h2>
                        <p className="text-[#737373] max-w-md mx-auto">Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
                        {team.members.slice(0, 3).map((member) => (
                            <Link to="/team" key={member.id} className="hover:scale-105 transition-transform duration-300">
                                <TeamMemberCard member={member} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. BIG COMPANIES SECTION */}
            <section className="bg-[#FAFAFA] py-20 px-8">
                <div className="max-w-[1050px] mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-[40px] font-bold text-[#252B42] tracking-[0.1px]">
                            Big Companies Are Here
                        </h2>
                        <p className="text-[#737373] text-md leading-relaxed max-w-md mx-auto">
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    <div className="py-8">
                        <ShopBrands brands={shop.brands} />
                    </div>
                </div>
            </section>

            {/* 7. WORK WITH US SECTION */}
            <AboutWorkWithUs data={aboutData.workWithUs} />
        </div>
    );
};

export default AboutPage;