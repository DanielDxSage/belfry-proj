// import React, {useState}  from 'react'
// import { NavLink } from 'react-router-dom'

// const Tabs = () => {
//   const [currentTab, setCurrentTab] = useState('1')

//   const tabs = [
//     {
//       id: 1,
//       tabTitle: "Tab 1",
//       title: "title 1",
//       content: "Lorem ipsum dolor sit amet consectetur 1."
//     },
//     {
//       id: 2,
//       tabTitle: "Tab 2",
//       title: "title 2",
//       content: "Lorem ipsum dolor sit amet consectetur 2."
//     },
//     {
//       id: 3,
//       tabTitle: "Tab 3",
//       title: "title 3",
//       content: "Lorem ipsum dolor sit amet consectetur 3."
//     },
//     {
//       id: 4,
//       tabTitle: "Tab 4",
//       title: "title 4",
//       content: "Lorem ipsum dolor sit amet consectetur 4."
//     }
//   ]

//   const handleTabClick = (e) => {
//     setCurrentTab(e.target.id)
//   }

//   return (
//     <div className='w-[960px] my-[0px] mx-auto'>
//       <div className='flex justify-between'>
//         {tabs.map((tab, i) => 
//           <NavLink className='p-3 text-white w-[100%] text-[18px] border-b-4 border-blue-500' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>
//             {tab.tabTitle}
//           </NavLink>       
//         )}
//       </div>

//       <div className="content">
//         {tabs.map((tab, i) => 
//         <div key={i}>
//           {currentTab === `${tab.id}` && 
//             <div>
//               <p className='title'>{tab.title}</p>
//               <p>{tab.content}</p>
//             </div>
//           }
//         </div>
          
//         )}
//       </div>
//     </div>
//   )
// }

// export default Tabs

import React from 'react'
import { useState } from 'react';
import Button from './Button';

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
      <div className="bg-gray-100 p-4 rounded-b-lg flex space-x-[2rem]">
        <img className='w-[300px] h-[300px] bg-cover rounded-[10px]' src="https://img.freepik.com/free-photo/stock-market-results-stock-trade-forex-shares-concept_53876-127803.jpg?w=826&t=st=1683538561~exp=1683539161~hmac=035dbaad456f57b989b605e2f5d6a6b9bc0c679e3218ff280d3732ecb358f5cf" alt="Belfry" />
        <div className="space-y-[0.7rem]">
          <h1 className='uppercase font-semibold text-gray-400 text-[2rem]'>{tabs[activeIndex].heading}</h1>
          <p>{tabs[activeIndex].content}</p> 
          <Button name="Learn More" />
        </div>
        
      </div>
    </div>
  );
};

export default Tabs;

