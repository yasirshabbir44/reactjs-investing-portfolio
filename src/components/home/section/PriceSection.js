// PriceSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import HistoricalDataSection from './HistoricalDataSection';

const PriceSection =({ data }) => {
  return (
    <CustomCard title="Price List">
      <p>
        <strong>Last Price:</strong> $195.01
      </p>
      <p>
          <strong>Change:</strong> <span style={{ color: 'green'}}>+3.46 (+1.80%)</span>
      </p>
      <HistoricalDataSection data={data}/>
    </CustomCard>
  );
};

export default PriceSection;