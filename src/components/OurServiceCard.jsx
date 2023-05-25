import React from "react";

const OurserviceCard = ({ services }) => {
  <div>
    {services.map((service, index) => (
      <div key={index} className="flex flex-col justify-between px-10 py-12 max-w-[370px]rounded-[20px] bg-gray-300">
        {/* <img src={service.img} alt={service.title} className="w-[60px] h-[60px]"/> */}
        <hr className="bg-blue-500 my-0 h-0.5 border-t-1  w-[4rem] ml-[9.5rem] opacity-100" />
        <h1 className="text-[1.2rem]">{service.title}</h1>
      </div>

    ))}
  </div>
}

export default OurserviceCard;