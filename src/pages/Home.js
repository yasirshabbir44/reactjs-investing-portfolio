// Home.js
import React from 'react';
import { Row, Col } from 'antd'; 
import StockChart from '../components/StockChart';
import StockTable from '../components/StockTable';
import CustomCard from '../components/CustomCard';
import PriceSection from '../components/section/PriceSection';
import CompaniesSection from '../components/section/CompaniesSection';
import ProfileSection from '../components/section/ProfileSection';
import NewsSection from '../components/section/NewsSection';


const HomePage = () => {
  const chartData = [
    {
      id: 'AAPL',
      data: [
        { x: '2022-01-01', y: 120 },
        { x: '2022-02-01', y: 130 },
        { x: '2022-03-01', y: 110 },
        // Add more data points as needed
      ],
    },
  ];

  const tableData = [
    {
      key: '1',
      date: '2022-01-01',
      open: 120,
      high: 130,
      low: 110,
      close: 115,
    },
    {
      key: '2',
      date: '2022-02-01',
      open: 130,
      high: 140,
      low: 120,
      close: 135,
    },
    {
      key: '3',
      date: '2022-03-01',
      open: 110,
      high: 120,
      low: 100,
      close: 105,
    },
    // Add more rows as needed
  ];

  return (
    <div style={{ padding: '16px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CustomCard title="Apple Inc (AAPL)">
            {/* Content for the card */}
          </CustomCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CustomCard title="Day's Range & 52-week Range">
            {/* Content for the card */}
          </CustomCard>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CompaniesSection />
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <ProfileSection />
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <NewsSection />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>


        <Col  span={22}>
          <PriceSection />
        </Col>

      </Row>



      <h1>Historical Data</h1>
      <StockChart data={chartData} />
      <StockTable data={tableData} />
    </div>
  );
};

export default HomePage;
