import React from 'react'
import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeIndex
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-r-lg mb-2 md:mb-0 md:mr-2`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-b-lg flex flex-col md:flex-row">
        <img className='w-[300px] h-[300px] bg-cover rounded-[10px] lg:mr-[1.3rem] mb-[1rem]' src="https://img.freepik.com/free-photo/stock-market-results-stock-trade-forex-shares-concept_53876-127803.jpg?w=826&t=st=1683538561~exp=1683539161~hmac=035dbaad456f57b989b605e2f5d6a6b9bc0c679e3218ff280d3732ecb358f5cf" alt="Belfry" />
        <div className="space-y-[0.7rem] ">
          <h1 className='uppercase font-medium text-gray-400 text-[1rem] mt-0 sm:mt-[1rem]'>{tabs[activeIndex].heading}</h1>
          <p >{tabs[activeIndex].content}</p> 
        </div>
        
      </div>
    </div>
  );
};

export default Tabs;

