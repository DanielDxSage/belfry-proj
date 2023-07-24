import React from 'react'
import OurserviceCard from './OurserviceCard';
import assetmanagement from '../assets/assetmanagement.png'
import stocks from '../assets/stocks.png'
import trust from '../assets/trust.png'
import bank from '../assets/bank.png'

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
      img: trust,
    },
    {
      title: "Investment Banking",
      img: bank,
    }
  ];

  return (
    <section className="lg:mx-[9.5rem] my-[4rem] flex flex-col">
      <div className="flex flex-col  items-center md:flex-row justify-between lg:mt-0 mt-[-2rem]">
        <h1 className="lg:text-[2rem] sm:text-[1.5rem] font-semibold text-gray-400 lg:w-[18rem] w-[17rem]">Performance <br/> Through Passion<span className='text-blue-600 text-[2.5rem]'>.</span></h1>
        <div className='flex flex-col items-center  lg:space-x-[2.5rem] sm:space-x-0 sm:flex-row lg:w-[32rem] w-[18rem]'>
          <h3 className="lg:text-[1.1rem] sm:text[.8] text-gray-400">Established with a foundation of fidelity <br/> and trust. Belfry Investment Limited.</h3>
          <div className="bg-blue-500 lg:text-[1.2rem] sm:text-[.8] text-white px-6 py-2 lg:mt-0 mt-[1rem] lg:mr-0 mr-[9rem]">Our Services</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row m-auto mt-2">
        <OurserviceCard services={services}/>
      </div>
    </section>
  )
}

export default Ourservice;