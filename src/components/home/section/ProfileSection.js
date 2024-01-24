// ProfileSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';

const ProfileSection = ({ profileData }) => {


  return (
    <CustomCard title="Profile">
      <p>
        Apple Inc. designs, manufactures, and markets consumer electronics, computer software, and
        personal computers. The company's most well-known products include the iPhone
        smartphones, iPad tablets, and Mac computers.
      </p>

        <p>
            <strong>Industry:</strong> {profileData.industry}
        </p>
        <p>
            <strong>Sector:</strong> {profileData.sector}
        </p>
        <p>
            <strong>Employees:</strong> {profileData.employees}
        </p>
        <p>
            <strong>Headquarters:</strong> {profileData.headquarters}
        </p>
        <p>
            <strong>Founded:</strong> {profileData.founded}
        </p>
        <p>
            <strong>Market Cap:</strong> {profileData.marketCap}
        </p>
        <p>
            <strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noopener noreferrer">{profileData.website}</a>
        </p>
    </CustomCard>
  );
};

export default ProfileSection;
