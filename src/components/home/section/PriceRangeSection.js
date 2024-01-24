// PriceRangeSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import {Typography} from 'antd';

const {Title, Paragraph, Text} = Typography;

const PriceRangeSection = ({stockDetail}) => {

    return (
        <CustomCard title="Day's Range & 52-week Range">
            <Title level={3}>Stock Details</Title>

            <Paragraph>
                <Text strong>Day's Range:</Text> {stockDetail.daysRange}
            </Paragraph>

            <Paragraph>
                <Text strong>52-week Range:</Text> {stockDetail.weeksRange}
            </Paragraph>

            <Paragraph>
                <Text strong>Previous Close:</Text> {stockDetail.previousClose}
            </Paragraph>

            <Paragraph>
                <Text strong>Open:</Text> {stockDetail.open}
            </Paragraph>

            <Paragraph>
                <Text strong>Volume:</Text> {stockDetail.volume}
            </Paragraph>

            <Paragraph>
                <strong>Forward P/E:</strong> {stockDetail.forwardPE}
            </Paragraph>
            <Paragraph>
                <strong>EPS (Earnings Per Share):</strong>{stockDetail.earningsPerShare}
            </Paragraph>
            <Paragraph>
                <strong>Dividend Yield:</strong> {stockDetail.dividendYield}
            </Paragraph>

            {/* Add more details as needed */}
        </CustomCard>
    );
};

export default PriceRangeSection;
