import React from "react";


const OurServiceCard = ({ title, img }) => {
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] bg-gray-300">
    <img src={img} alt="assetmanagement" />
    <hr className="bg-blue-500 my-0 h-0.5 border-t-1  w-[4rem] ml-[9.5rem] opacity-100" />
    <h1>{title}</h1>
  </div>
}

export default OurServiceCard;