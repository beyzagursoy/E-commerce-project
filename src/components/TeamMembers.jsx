import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamMembers = ({ title, subtitle, members }) => {
    return (
        <section className="bg-[#FAFAFA] py-28 px-8">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                <h2 className="text-[40px] font-bold text-[#252B42]">
                    {title}
                </h2>
                <p className="text-[#737373] text-sm leading-relaxed max-w-[450px] mx-auto font-montserrat">
                    {subtitle}
                </p>
            </div>

            <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {members.map((member) => (
                    <div key={member.id} className="flex justify-center">
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamMembers;