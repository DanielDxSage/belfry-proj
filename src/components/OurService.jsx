import React from 'react'
import OurServiceCard from './OurServiceCard';
import { service } from '../constants'

const OurService = () => {
  return (
    <section className="mx-[9.5rem] my-[4rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] font-semibold text-gray-400">Performance <br/> Through Passion<span className='text-blue-600 text-[2.5rem]'>.</span></h1>
        <div className='flex ml-[2rem] items-center space-x-[2.5rem]'>
          <h3 className="text-[1.2rem]">Established with a foundation of fidelity <br/> and trust. Belfry Investment Limited.</h3>
          <div className="bg-blue-500 text-[1.2rem] text-white px-6 py-2 text-white">Our Services</div>
        </div>
      </div>

      <div className="flex flex-col">
         {service.map((card) => (
          <OurServiceCard key={card.id} {...card}/>
         ))}
      </div>
    </section>
  )
}

export default OurService;