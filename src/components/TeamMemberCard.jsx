import React from 'react';

const TeamMemberCard = ({ member }) => {
    return (
        <div className="
            flex flex-row items-center gap-5
            w-full max-w-[320px] mx-auto mb-10
            lg:w-auto lg:max-w-none lg:mx-0 lg:p-0 lg:mb-0
        ">
            <img 
                src={member.image} 
                alt={member.name} 
                className="
                    rounded-full object-cover
                    w-24 h-24
                    lg:w-20 lg:h-20
                " 
            />
            <div className="flex flex-col text-left">
                <h2 className="text-xl font-bold text-[#252B42] lg:text-lg">
                    {member.name}
                </h2>
                <p className="text-sm font-normal text-[#737373] tracking-[0.2px]">
                    {member.company}
                </p>
            </div>
        </div>
    );
};

export default TeamMemberCard;