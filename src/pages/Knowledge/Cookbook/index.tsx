import React from 'react';
import Card from './components/Card';
import CookbookData from './CookBookData';

const Cookbook = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-24 md:flex-row md:items-start md:gap-8">
      {CookbookData.map((item, idx) => (
        <Card item={{ ...item }} key={idx} />
      ))}
      {[...Array(1)].map((_, idx) => (
        <p className="w-80 xl:w-0" key={idx}></p>
      ))}
    </div>
  );
};

export default Cookbook;
