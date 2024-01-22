// PriceRangeSection.js
import React from 'react';
import CustomCard from '../CustomCard';

const PriceRangeSection = ({ daysRange, weeksRange, previousClose, open, volume }) => {
    return (
        <CustomCard title="Day's Range & 52-week Range">
            <p>
                <strong>Day's Range:</strong> {daysRange}
            </p>
            <p>
                <strong>52-week Range:</strong> {weeksRange}
            </p>
            <p>
                <strong>Previous Close:</strong> {previousClose}
            </p>
            <p>
                <strong>Open:</strong> {open}
            </p>
            <p>
                <strong>Volume:</strong> {volume}
            </p>
            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default PriceRangeSection;
