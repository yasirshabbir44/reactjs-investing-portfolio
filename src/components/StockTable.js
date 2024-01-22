// StockTable.js
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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
    title: 'Close',
    dataIndex: 'close',
    key: 'close',
  },
];

const StockTable = ({ data }) => {
  return <Table dataSource={data} columns={columns} />;
};

export default StockTable;
