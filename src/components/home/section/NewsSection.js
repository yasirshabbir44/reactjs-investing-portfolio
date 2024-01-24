// NewsSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import {Avatar, List} from 'antd';

const newsData = [
    'Apple announces record-breaking quarterly revenue',
    'Tesla surpasses market expectations with Q3 earnings',
    'Nvidia introduces groundbreaking graphics card at CES 2023',
    'Microsoft unveils new features in upcoming Windows 11 update',
    'Amazon to launch next-gen Echo devices with AI capabilities',
    // Add more news items as needed
];
const placeholderNewsIcon = 'https://cdn.example.com/news-icon.png'; // Replace with an actual news icon URL

const NewsSection = () => {
    return (
        <CustomCard title="Latest News">
            <List
                dataSource={newsData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={placeholderNewsIcon}/>}
                            title={<a href="#">{item}</a>}
                        />
                    </List.Item>
                )}
            />
        </CustomCard>
    );
};

export default NewsSection;
