import React from 'react'
import Button from './Button';
import Coins from '../assets/coins.jpg';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative">
      <img src={Coins} alt="" className="bg-no-repeat bg-cover bg-center lg:h-[36rem] h-[22rem] w-full brightness-75 "/>
      <div className="flex flex-col absolute lg:top-4 top-[.7rem] lg:p-[7rem] p-[2rem]">
        <h1 className="lg:text-[3.5rem] text-[1.6rem] mb-[2rem] text-white">Seize the Moment: Build Your Investment Empire Today</h1>
        <h3 className="text-[1rem] md:text-[1.5rem] mb-[2rem] text-white">Your Path to Financial Freedom Starts Here - <br/> Open Your Investment Account Now.</h3>
        <div className="w-full md:w-[12rem]">
          <Link to="/Open-Account">
            <Button name="Open An Account" />
          </Link>
          
        </div>
      </div>
      
    </section>

  )
}

export default CTA;
