// ProfileSection.js
import React from 'react';
import CustomCard from '../CustomCard';

const ProfileSection = () => {

    const profileData = {
        industry: 'Technology',
        sector: 'Information Technology',
        employees: '147,000', // Add actual number of employees
        headquarters: 'Cupertino, California, United States',
        founded: 'April 1, 1976', // Add actual founding date
        marketCap: '2.5T', // Add actual market cap
        website: 'https://www.apple.com/', // Add actual website URL
    };

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
