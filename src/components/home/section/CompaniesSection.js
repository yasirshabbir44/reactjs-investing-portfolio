// CompaniesSection.js
import React, {useEffect, useState} from 'react';
import {Avatar, List, Space} from 'antd';
import CustomCard from '../card/CustomCard';
import '../../../style.css';
import {companyList} from "../../../util/Data";


const CompaniesSection = ({onItemSelected}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (selectedItem) => {
        // Call the callback function passed from the parent
        onItemSelected(selectedItem);
        setSelectedItem(selectedItem);
    };
    useEffect(() => {
        // Set the first item as the default selected item
        if (companyList.length > 0) {
            setSelectedItem(companyList[0]);
        }
    }, [companyList]);

    return (
        <CustomCard title="Other Companies">
            <List
                itemLayout="horizontal"
                dataSource={companyList}
                renderItem={(item) => (
                    <List.Item
                        onClick={() => handleItemClick(item)}
                        style={{
                            backgroundColor: selectedItem === item ? '#e6f7ff' : 'white',
                            cursor: 'pointer',
                        }}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.logo}/>}
                            title={item.companyName}
                            description={
                                <Space>
                                    <span>Stock Price: ${item.stockPrice.toFixed(2)}</span>
                                    <span style={{color: item.changePercentage >= 0 ? 'green' : 'red'}}>
                  Change: {item.changePercentage.toFixed(2)}%
                </span>
                                </Space>
                            }
                        />
                    </List.Item>
                )}
            />
        </CustomCard>
    );
};

export default CompaniesSection;
