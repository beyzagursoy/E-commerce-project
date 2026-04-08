import React from 'react';
import { homeData } from '../mocks/data';
import TeamHeader from '../components/Team/TeamHeader';
import TeamGallery from '../components/Team/TeamGallery';
import TeamMembers from '../components/Team/TeamMembers';
import TeamCTA from '../components/Team/TeamCTA';

const TeamPage = () => {
    const teamData = homeData.team;

    return (
        <div className="bg-white min-h-screen">
            <TeamHeader data={teamData.header} />
            <TeamGallery images={teamData.gallery} />
            <TeamMembers
                title={teamData.title}
                subtitle={teamData.subtitle}
                members={teamData.members}
            />
            <TeamCTA />
        </div>
    );
};

export default TeamPage;