// PriceRangeSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const PriceRangeSection = ({ daysRange, weeksRange, previousClose, open, volume }) => {
    return (
        <CustomCard title="Day's Range & 52-week Range">
            <Title level={3}>Stock Details</Title>

            <Paragraph>
                <Text strong>Day's Range:</Text> {daysRange}
            </Paragraph>

            <Paragraph>
                <Text strong>52-week Range:</Text> {weeksRange}
            </Paragraph>

            <Paragraph>
                <Text strong>Previous Close:</Text> {previousClose}
            </Paragraph>

            <Paragraph>
                <Text strong>Open:</Text> {open}
            </Paragraph>

            <Paragraph>
                <Text strong>Volume:</Text> {volume}
            </Paragraph>

            <Paragraph>
                <strong>Forward P/E:</strong> 28.8
            </Paragraph>
            <Paragraph>
                <strong>EPS (Earnings Per Share):</strong> $6.40
            </Paragraph>
            <Paragraph>
                <strong>Dividend Yield:</strong> 1.2%
            </Paragraph>

            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default PriceRangeSection;
