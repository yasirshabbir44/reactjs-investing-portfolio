// HistoricalDataSection.js
import React from 'react';
import {Table} from 'antd';
import '../../../style.css'; // Import the common styles

const HistoricalDataSection = ({data}) => {
    // Realistic data for 30 days with varying values
    const newData = Array.from({length: 30}, (_, index) => {
        const currentDate = new Date(2022, 0, index + 1);
        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - 1);

        return {
            key: (index + 1).toString(),
            date: currentDate.toISOString().split('T')[0],
            price: (195.01 + index * 2.5).toFixed(2),
            open: (192.26 + index * 2).toFixed(2),
            high: (195.10 + index * 3).toFixed(2),
            low: (192.26 + index * 1.5).toFixed(2),
            volume: `${8 + index}M`,
            previousClose: (195.01 + (index - 1) * 2.5).toFixed(2),
            changePercentage: (index % 2 === 0 ? -1 : 1) * (1.8 + index * 0.1).toFixed(2),
        };
    });

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Open',
            dataIndex: 'open',
            key: 'open',
        },
        {
            title: 'High',
            dataIndex: 'high',
            key: 'high',
        },
        {
            title: 'Low',
            dataIndex: 'low',
            key: 'low',
        },
        {
            title: 'Volume',
            dataIndex: 'volume',
            key: 'volume',
        },
        {
            title: 'Previous Close',
            dataIndex: 'previousClose',
            key: 'previousClose',
        },
        {
            title: 'Change Percentage',
            dataIndex: 'changePercentage',
            key: 'changePercentage',
            render: (value) => (
                <span style={{color: parseFloat(value) >= 0 ? 'green' : 'red'}}>
          {parseFloat(value) >= 0 ? `+${value}%` : `${value}%`}
        </span>
            ),
        },

    ];

    return (
        <Table dataSource={data} columns={columns} className="responsive-table"/>
    );
};


export default HistoricalDataSection;
