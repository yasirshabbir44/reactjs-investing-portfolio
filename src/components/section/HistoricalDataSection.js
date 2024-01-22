// HistoricalDataSection.js
import React from 'react';
import { Table } from 'antd';

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
    title: 'Vol.',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Change %',
    dataIndex: 'changePercentage',
    key: 'changePercentage',
  },
];

const data = Array.from({ length: 30 }, (_, index) => ({
  key: (index + 1).toString(),
  date: `2022-01-${index + 1 < 10 ? '0' : ''}${index + 1}`,
  price: 195.01 + index * 2.5, // Sample data, adjust as needed
  open: 192.26 + index * 2,
  high: 195.10 + index * 3,
  low: 192.26 + index * 1.5,
  volume: `${8 + index}M`, // Sample data, adjust as needed
  changePercentage: `+${(1.8 + index * 0.1).toFixed(2)}%`, // Sample data, adjust as needed
}));

const HistoricalDataSection = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default HistoricalDataSection;
