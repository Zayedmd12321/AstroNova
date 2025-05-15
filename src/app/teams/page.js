import React from 'react';
import heads from '../../data/nssc_team_head.json';
import secretaries from '../../data/nssc_team_secy.json';
import subHeads from '../../data/nssc_team_subheads.json';
import TeamCard from '../../component/TeamCard';
import './teams.css';

const TeamSection = ({ title, data }) => (
  <div className="teams-section">
    <h2 className="section-title">{title}</h2>
    <div className="team-row">
      {data.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          title={member.title}
          image={member.image}
          socials={member.socials}
        />
      ))}
    </div>
  </div>
);

const Teams = () => {
  return (
    <>
      <TeamSection title="Secretaries" data={secretaries} />
      <TeamSection title="Heads" data={heads} />
      <TeamSection title="Sub Heads" data={subHeads} />
    </>
  );
};

export default Teams;
