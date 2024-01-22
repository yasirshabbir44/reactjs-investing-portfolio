// StockChart.js
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const StockChart = ({ data }) => {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        colors={{ scheme: 'nivo' }}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        enableSlices="x"
      />
    </div>
  );
};

export default StockChart;
