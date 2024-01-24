// StockFilters.js
import React from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;

const StockFilters = ({onDateChange}) => {
    const disabledDate = (current) => {
        // Disable dates after today
        return current && current > moment().endOf('day');
    };


    return (
        <div className="filters-container">
            {/* Date Filter */}

            Date Range Filter :
            {/* Range Filter */}
            <RangePicker
                style={{width: '30%'}}
                placeholder={['Start Date', 'End Date']}
                allowEmpty={[true, true]}
                format="MM/DD/YYYY"
                disabledDate={disabledDate}
                onChange={onDateChange}
            />
        </div>
    );
};

export default StockFilters;
