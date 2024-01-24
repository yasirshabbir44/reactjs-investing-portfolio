// Home.js
import React, {useState} from 'react';
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
import '../../style.css';
import stockData from "../../util/Data"; // Import the common styles


const HomePage = () => {

    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-02-10'); // Adjust end date as needed
    const minRandomValue = 50;
    const maxRandomValue = 300;

    const [data, setData] = useState([
        {
            id: 'Price',
            data: generateRandomData(startDate, endDate, minRandomValue, maxRandomValue),
        },
        // Add more series with data
    ]);

    const handleDateChange = (date, dateString) => {
        // Handle date change logic
        console.log('Selected Date:', dateString);
        if (date.length === 2){
            const newData = [
                {
                    id: 'Price',
                    data: generateRandomData(date[0], date[1], minRandomValue, maxRandomValue)
                },
                // Add more series with data
            ];
            setData(newData);
        }
    };

    const handleRangeChange = (e) => {
        // Handle range change logic
        console.log('Selected Range:', e.target.value);
    };

    // Callback function to receive the selected item from the child
    const handleItemSelected = (item) => {
       console.log(item)
    };
    return (

        <div>
            <AppHeader/>
            <div style={{padding: '24px'}}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <TitleSection stockValue={stockData}/>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <PriceRangeSection
                            stockDetail={stockData.stockDetails}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <CompaniesSection onItemSelected={handleItemSelected}/>
                    </Col>


                </Row>
                <Row gutter={[16, 16]}>

                    <Col  xs={24} sm={24} md={16} lg={16} xl={16}>
                        <ProfileSection profileData={stockData.profileData}/>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <NewsSection/>
                    </Col>

                </Row>
                <h1>Historical Data</h1>
                <StockFilters onDateChange={handleDateChange} onRangeChange={handleRangeChange}/>
                <Row>


                    <Col span={24}>
                        <StockChart data={data}/>
                    </Col>

                </Row>
                <br/>
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
