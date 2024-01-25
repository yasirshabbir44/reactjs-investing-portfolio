// PriceSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import HistoricalDataSection from './HistoricalDataSection';

const PriceSection = ({data}) => {
    return (
        <CustomCard title="Price List">
            <HistoricalDataSection data={data}/>
        </CustomCard>
    );
};

export default PriceSection;