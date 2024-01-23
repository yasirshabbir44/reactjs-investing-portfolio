// Home.js
import React from 'react';
import {Col, Row} from 'antd';
import StockChart from './chart/StockChart';
import PriceSection from './section/PriceSection';
import CompaniesSection from './section/CompaniesSection';
import ProfileSection from './section/ProfileSection';
import NewsSection from './section/NewsSection';
import PriceRangeSection from "./section/PriceRangeSection";
import TitleSection from "./section/TitleSection";
import {generateRandomData} from "../../util/Util";
import StockFilters from "./section/StockFilters";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import '../../style.css'; // Import the common styles


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
    const handleDateChange = (date, dateString) => {
        // Handle date change logic
        console.log('Selected Date:', dateString);
    };

    const handleRangeChange = (e) => {
        // Handle range change logic
        console.log('Selected Range:', e.target.value);
    };

    return (

        <div>
            <AppHeader/>
            <div style={{padding: '24px'}}>
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
                        <CompaniesSection/>
                    </Col>


                </Row>
                <Row gutter={[16, 16]}>

                    <Col  xs={24} sm={24} md={16} lg={16} xl={16}>
                        <ProfileSection/>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <NewsSection/>
                    </Col>

                </Row>
                <h1>Historical Data</h1>
                <StockFilters onDateChange={handleDateChange} onRangeChange={handleRangeChange}/>
                <Row>


                    <Col span={24}>
                        <StockChart data={chartData}/>
                    </Col>

                </Row>
                <Row>


                    <Col span={24}>
                        <PriceSection/>
                    </Col>

                </Row>
            </div>

           <AppFooter/>
        </div>
    );
};

export default HomePage;
