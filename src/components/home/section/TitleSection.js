// ProfileSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import {Typography, Alert, Avatar} from 'antd';
import { AppleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const TitleSection = () => {


    return (
        <CustomCard title="Apple Inc (AAPL)">
            <Title level={3}  >
                <Avatar src='https://companiesmarketcap.com/img/company-logos/64/AAPL.webp'/>  AAPL
            </Title>
            <Text type="secondary">NASDAQ: AAPL</Text>
            <Text type="secondary">Currency in USD</Text>

            <Paragraph>
                <strong>Live Price:</strong> $195.01
            </Paragraph>

            <Paragraph>
                <strong>Exchange:</strong> NASDAQ
            </Paragraph>



            <Paragraph>
                <strong>P/E Ratio:</strong> 30.5
            </Paragraph>



            <Paragraph>
                <strong>Shares Outstanding:</strong> 17.3 billion
            </Paragraph>


            <Alert
                message="Disclaimer"
                description="This is just a sample. Stock data may not be accurate."
                type="info"
                showIcon
            />
            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default TitleSection;
