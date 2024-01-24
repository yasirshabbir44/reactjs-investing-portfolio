// CompaniesSection.js
import React, {useState} from 'react';
import { List, Avatar, Space } from 'antd';
import CustomCard from '../card/CustomCard';


const data = [
    {
        id:1,
        companyName: 'Apple Inc',
        stockPrice: 195.01,
        changePercentage: 1.8,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/AAPL.webp', // Replace with actual logo URL
    },
    {
        id:2,
        companyName: 'Microsoft Corporation',
        stockPrice: 300.45,
        changePercentage: -0.5,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/MSFT.webp', // Replace with actual logo URL
    },
    {
        id:3,
        companyName: 'Tesla Inc',
        stockPrice: 850.22,
        changePercentage: 2.5,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/TSLA.webp', // Replace with actual logo URL
    },
    {
        id:4,
        companyName: 'Nvidia Corporation',
        stockPrice: 400.75,
        changePercentage: 1.2,
        logo: 'https://companiesmarketcap.com/img/company-logos/64/NVDA.webp', // Replace with actual logo URL
    },
    {
        id:5,
        companyName: 'Meta Platforms (Facebook)',
        stockPrice: 381.78,
        changePercentage: 3.2,
        logo: 'https://companiesmarketcap.com/img/company-logos/256/META.webp', // Replace with actual logo URL
    },
    // Add more companies as needed
];

const CompaniesSection = ({ onItemSelected }) => {
    const handleItemClick = (selectedItem) => {
        // Call the callback function passed from the parent
        onItemSelected(selectedItem);
    };

  return (
    <CustomCard title="Other Companies">
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item onClick={() => handleItemClick(item)} >

                    <List.Item.Meta
                        avatar={<Avatar src={item.logo} />}
                        title={<a href="#">{item.companyName}</a>}
                        description={
                            <Space>
                                <span>Stock Price: ${item.stockPrice.toFixed(2)}</span>
                                <span style={{ color: item.changePercentage >= 0 ? 'green' : 'red' }}>
                  Change: {item.changePercentage.toFixed(2)}%
                </span>
                            </Space>
                        }
                    />
                </List.Item>
            )}
        />
    </CustomCard>
  );
};

export default CompaniesSection;
