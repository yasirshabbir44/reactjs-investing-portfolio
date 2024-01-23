// ProfileSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import { Typography, Alert } from 'antd';
const { Title, Paragraph, Text } = Typography;

const TitleSection = () => {


    return (
        <CustomCard title="Apple Inc (AAPL)">
            <Title level={3}>AAPL</Title>
            <Text type="secondary">NASDAQ: AAPL</Text>
            <Text type="secondary">Currency in USD</Text>

            <Paragraph>
                <strong>Live Price:</strong> $195.01
            </Paragraph>

            <Paragraph>
                <strong>Exchange:</strong> NASDAQ
            </Paragraph>

            <Alert
                message="Disclaimer"
                description="This is just a sample, Data may not be accurate."
                type="info"
                showIcon
            />
            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default TitleSection;
