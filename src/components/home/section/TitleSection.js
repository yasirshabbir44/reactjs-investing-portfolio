// ProfileSection.js
import React from 'react';
import CustomCard from '../card/CustomCard';
import {Alert, Avatar, Typography} from 'antd';

const {Title, Text, Paragraph} = Typography;

const TitleSection = (props) => {

    const stockData = props.stockValue;

    return (
        <CustomCard title={stockData.title}>
            <Title level={3}>
                <Avatar src={stockData.avatarSrc}/> {stockData.symbol}
            </Title>
            <Text type="secondary">{stockData.exchange}</Text>
            <Text type="secondary">{stockData.currency}</Text>

            <Paragraph>
                <strong>Live Price:</strong> {stockData.livePrice}
            </Paragraph>

            <Paragraph>
                <strong>Exchange:</strong> {stockData.stockExchange}
            </Paragraph>

            <Paragraph>
                <strong>P/E Ratio:</strong> {stockData.peRatio}
            </Paragraph>

            <Paragraph>
                <Text strong>Volume:</Text> {stockData.volume}
            </Paragraph>

            <Paragraph>
                <strong>Shares Outstanding:</strong> {stockData.sharesOutstanding}
            </Paragraph>

            <Alert
                message="Disclaimer"
                description={stockData.disclaimer}
                type="info"
                showIcon
            />
        </CustomCard>
    );
};

export default TitleSection;
