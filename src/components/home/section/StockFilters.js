// StockFilters.js
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const StockFilters = ({ onDateChange, onRangeChange }) => {
    const disabledDate = (current) => {
        // Disable dates after today
        return current && current > moment().endOf('day');
    };

    const handleDateChange = (date, dateString) => {
        // Check if onDateChange is defined before invoking it
        if (onDateChange) {
            onDateChange(date, dateString);
        }
    };

    const handleRangeChange = (dates, dateStrings) => {
        // Check if onRangeChange is defined before invoking it
        if (onRangeChange) {
            onRangeChange(dates, dateStrings);
        }
    };

    return (
        <div className="filters-container">
            {/* Date Filter */}
            <DatePicker
                onChange={(date, dateString) => handleDateChange(date, dateString)}
                disabledDate={disabledDate}
                style={{ marginRight: '16px' }}
                placeholder="Select a Date"
            />

            {/* Range Filter */}
            <RangePicker
                style={{ width: '30%' }}
                placeholder={['Start Date', 'End Date']}
                allowEmpty={[true, true]}
                format="MM/DD/YYYY"
                disabledDate={disabledDate}
            />
        </div>
    );
};

export default StockFilters;
