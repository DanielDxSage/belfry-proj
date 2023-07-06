import React from 'react'
import OurserviceCard from './OurserviceCard';
import assetmanagement from '../assets/assetmanagement.png'
import stocks from '../assets/stocks.png'

const Ourservice = () => {

  const services = [
    {
      title: "Asset Management",
      img: assetmanagement,
    },
    {
      title: "Securities Trading",
      img: stocks,
    },
    {
      title: "Trusteeship",
      img: stocks,
    },
    {
      title: "Investment Banking",
      img: stocks,
    }
  ];

  return (
    <section className="mx-[9.5rem] my-[4rem] flex flex-col">
      <div className="flex flex-col  items-center md:flex-row justify-between">
        <h1 className="lg:text-[2rem] sm:text-[1.3rem] font-semibold text-gray-400">Performance <br/> Through Passion<span className='text-blue-600 text-[2.5rem]'>.</span></h1>
        <div className='flex flex-col items-center  space-x-[2.5rem]  sm:flex-row'>
          <h3 className="lg:text-[1.1rem] sm:text[.8]">Established with a foundation of fidelity <br/> and trust. Belfry Investment Limited.</h3>
          <div className="bg-blue-500 lg:text-[1.2rem] sm:text-[.8] text-white px-6 py-2 text-white">Our Services</div>
        </div>
      </div>

      <div className="flex flex-col my-[2.2rem] mx-[-1rem] sm:flex-row">
        <OurserviceCard services={services}/>
      </div>
    </section>
  )
}

export default Ourservice;