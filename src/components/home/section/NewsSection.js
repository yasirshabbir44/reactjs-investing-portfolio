// NewsSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import {Avatar, List} from 'antd';
import {newsData} from "../../../util/Data";

const placeholderNewsIcon = 'https://cdn-icons-png.freepik.com/512/1416/1416039.png'; // Replace with an actual news icon URL

const NewsSection = () => {
    return (
        <CustomCard title="Latest News">
            <List
                dataSource={newsData}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={placeholderNewsIcon}/>}
                            title={<a>{item}</a>}
                        />
                    </List.Item>
                )}
            />
        </CustomCard>
    );
};

export default NewsSection;
