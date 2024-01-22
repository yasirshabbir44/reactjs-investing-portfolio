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
import PriceRangeSection from "../components/section/PriceRangeSection";
import TitleSection from "../components/section/TitleSection";
import GraphSection from "../components/section/GraphSection";
import {generateRandomData} from "../util/Util";


const HomePage = () => {

  const startDate = new Date('2022-01-01');
  const endDate = new Date('2022-04-10'); // Adjust end date as needed
  const minRandomValue = 100;
  const maxRandomValue = 250;
  const chartData = [
    {
      id: 'AAPL',
      data: generateRandomData(startDate, endDate, minRandomValue, maxRandomValue),
    },
  ];

  return (
    <div style={{ padding: '16px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <TitleSection/>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <PriceRangeSection
              daysRange="$192.26 - $195.10"
              weeksRange="$137.90 - $199.62"
              previousClose="$191.55"
              open="$192.26"
              volume="20M"
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <NewsSection />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <CompaniesSection />
        </Col>

        <Col span={16}>
          <ProfileSection />
        </Col>


      </Row>




      {/*<Row gutter={[16, 16]}>*/}
      {/*  <Col xs={24} sm={24} md={24} lg={24} xl={24}>*/}
      {/*    <GraphSection graphData={graphData} />*/}
      {/*  </Col>*/}
      {/*</Row>*/}



      <h1>Historical Data</h1>
      <StockChart data={chartData} />
      <Row>


        <Col  span={24}>
          <PriceSection />
        </Col>

      </Row>
    </div>
  );
};

export default HomePage;
