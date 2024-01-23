// ProfileSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';

const TitleSection = () => {


    return (
        <CustomCard title="Apple Inc (AAPL)">
            <p>NASDAQ: AAPL</p>
            <p>Currency in USD</p>
            <p>
                <strong>Live Price:</strong> $195.01
            </p>
            <p>
                <strong>Exchange:</strong> NASDAQ
            </p>
            <p>Disclaimer: This is just a sample app. Data may not be accurate.</p>
            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default TitleSection;
