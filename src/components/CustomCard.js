// CustomCard.js
import React from 'react';
import { Card as AntdCard } from 'antd';

const CustomCard = ({ title, children }) => {
  return (
    <AntdCard
      title={title}
      style={{
        marginBottom: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </AntdCard>
  );
};

export default CustomCard;
