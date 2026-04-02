import React from 'react';

const AboutStats = ({ stats }) => (
    <section className="max-w-[1050px] mx-auto py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map(stat => (
                <div key={stat.id} className="space-y-2">
                    <h2 className="text-[58px] font-bold text-[#252B42]">{stat.value}</h2>
                    <p className="text-[#737373] font-bold">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
);

export default AboutStats;