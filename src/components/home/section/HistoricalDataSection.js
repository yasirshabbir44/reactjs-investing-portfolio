// HistoricalDataSection.js
import React from 'react';
import {Table} from 'antd';
import '../../../style.css'; // Import the common styles

const HistoricalDataSection = ({data}) => {
    // Realistic data for 30 days with varying values

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
