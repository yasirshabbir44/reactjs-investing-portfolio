// NewsSection.js
import React from 'react';
import CustomCard from '../CustomCard';

const NewsSection = () => {
  return (
    <CustomCard title="News">
      <ul>
        <li>Apple announces record-breaking quarterly revenue</li>
        <li>New iPhone models expected to be released next month</li>
        <li>Apple's latest MacBook Pro receives positive reviews</li>
      </ul>
    </CustomCard>
  );
};

export default NewsSection;
