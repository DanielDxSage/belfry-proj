import React from "react";

const OurserviceCard = ({ services }) => {
  return (
    <>
    {services.map((service, index) => (
      <div key={index} className="flex flex-col  px-[1.2rem] py-[2.5rem] m-[1rem] rounded-[4px] bg-gray-200">
        <img src={service.img} alt={service.title} className="w-[60px] h-[60px]"/>
        <hr className="bg-blue-500 my-[1.5rem] h-0.5 border-t-1  w-[2.5rem] opacity-100" />
        <h1 className="text-[1.2rem]">{service.title} </h1>
      </div>

    ))}
  </>

  )
  
}

export default OurserviceCard;