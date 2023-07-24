import React from 'react'
import Button from './Button';
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="h-[15rem] flex justify-between lg:flex-row flex-col items-center lg:p-[8rem] p-[3rem] bg-gradient-to-r from-blue-500 to-gray-500">
      <h1 className="lg:text-[2rem] text-[1.4rem] text-white">We Love  Hearing From  Our Customers</h1>
      <Link to="/contact-us">
        <Button name="Get In Touch"/>
      </Link>
      

      
    </section>
  )
}

export default GetInTouch
