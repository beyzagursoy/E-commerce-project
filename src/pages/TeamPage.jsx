import React from 'react';
import { homeData } from '../mocks/data';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
    const teamData = homeData.team;

    return (
        <div className="bg-[#FAFAFA] min-h-screen py-16 px-8">
            {/* Sayfa Başlık Alanı */}
            <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#252B42]">
                    {teamData.title}
                </h1>
                <p className="text-lg text-[#737373] whitespace-pre-line leading-7 max-w-[400px] lg:max-w-xl mx-auto opacity-90">
                    {teamData.subtitle}
                </p>
            </div>

            <div className="max-w-[1050px] mx-auto flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
                
                {teamData.members.map((member) => (
                    <div key={member.id} className="w-full flex justify-center lg:justify-start">
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;