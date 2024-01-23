// StockChart.js
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { timeFormat } from 'd3-time-format';
const StockChart = ({ data }) => {

    const formatDate = timeFormat('%m/%d');
    // Extract unique x values from the data for custom tick values
    const uniqueXValues = Array.from(
        new Set(data.reduce((acc, serie) => [...acc, ...serie.data.map((d) => d.x)], []))
    );

    return (
    <div style={{ height: '400px' }}>
      {/*<ResponsiveLine*/}
      {/*  data={data}*/}
      {/*  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}*/}
      {/*  xScale={{ type: 'point' }}*/}
      {/*  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}*/}
      {/*  axisTop={null}*/}
      {/*  axisRight={null}*/}
      {/*  axisBottom={null}*/}
      {/*  axisLeft={null}*/}
      {/*  colors={{ scheme: 'nivo' }}*/}
      {/*  enablePoints={false}*/}
      {/*  enableGridX={false}*/}
      {/*  enableGridY={false}*/}
      {/*  enableSlices="x"*/}
      {/*/>*/}



        {/*<ResponsiveLine*/}
        {/*    data={data}*/}
        {/*    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}*/}
        {/*    xScale={{ type: 'point' }}*/}
        {/*    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}*/}
        {/*    axisTop={null}*/}
        {/*    axisRight={null}*/}
        {/*    axisBottom={{*/}
        {/*        orient: 'bottom',*/}
        {/*        tickSize: 5,*/}
        {/*        tickPadding: 5,*/}
        {/*        tickRotation: 0,*/}
        {/*        legend: 'Date',*/}
        {/*        legendOffset: 36,*/}
        {/*        legendPosition: 'middle',*/}
        {/*    }}*/}
        {/*    axisLeft={{*/}
        {/*        orient: 'left',*/}
        {/*        tickSize: 5,*/}
        {/*        tickPadding: 5,*/}
        {/*        tickRotation: 0,*/}
        {/*        legend: 'Value',*/}
        {/*        legendOffset: -40,*/}
        {/*        legendPosition: 'middle',*/}
        {/*    }}*/}
        {/*    colors={{ scheme: 'nivo' }}*/}
        {/*    enablePoints={true} // Enable data points*/}
        {/*    pointSize={10}*/}
        {/*    pointColor={{ theme: 'background' }}*/}
        {/*    pointBorderWidth={2}*/}
        {/*    pointBorderColor={{ from: 'serieColor' }}*/}
        {/*    enableGridX={true} // Enable horizontal grid lines*/}
        {/*    enableGridY={true} // Enable vertical grid lines*/}
        {/*    enableSlices="x"*/}
        {/*    useMesh={true}*/}
        {/*    enableCrosshair={true} // Enable crosshair for better interactivity*/}
        {/*    legends={[*/}
        {/*        {*/}
        {/*            anchor: 'top-right',*/}
        {/*            direction: 'row',*/}
        {/*            justify: false,*/}
        {/*            translateX: 0,*/}
        {/*            translateY: -30,*/}
        {/*            itemsSpacing: 0,*/}
        {/*            itemDirection: 'left-to-right',*/}
        {/*            itemWidth: 80,*/}
        {/*            itemHeight: 20,*/}
        {/*            itemOpacity: 0.75,*/}
        {/*            symbolSize: 12,*/}
        {/*            symbolShape: 'circle',*/}
        {/*        },*/}
        {/*    ]}*/}
        {/*    tooltip={({ point }) => (*/}
        {/*        <div>*/}
        {/*            <strong>{point.serieId}</strong>*/}
        {/*            <br />*/}
        {/*            {`Value: ${point.data.y}`}*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*/>*/}


        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
                tickFormat: (value) => formatDate(new Date(value)),
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
                <div>
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
