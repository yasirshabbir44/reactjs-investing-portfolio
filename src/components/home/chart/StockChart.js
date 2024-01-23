// StockChart.js
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import moment from "moment/moment";
const StockChart = ({ data }) => {

    const uniqueXValues = Array.from(new Set(data[0].data.map((d) => d.xFormatted)));
    const formatDate = (date) => {
        console.log(date)
        return moment(date).format('MM/DD/YYYY');
    }

    console.log(data)
    return (
    <div style={{ height: '400px' }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle',
                tickValues: uniqueXValues,
                tickFormat: (x) => formatDate(new Date(x)),
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Value',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            colors={{ scheme: 'nivo' }}
            enablePoints={true}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enableGridX={true}
            enableGridY={true}
            enableSlices="x"
            useMesh={true}
            enableCrosshair={true}
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -30,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                },
            ]}
            tooltip={({ point }) => (
                <div style={{ background: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <strong>Date:</strong> {formatDate(new Date(point.data.xFormatted))}
                    <br />
                    <strong>{point.serieId}:</strong> {point.data.y}
                </div>
            )}
        />
    </div>
  );
};

export default StockChart;
