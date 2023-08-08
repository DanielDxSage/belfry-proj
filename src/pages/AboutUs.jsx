import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Nav/>
      <div>
        <div className="xl:p-[10rem] p-[3rem] bg-gradient-to-r from-blue-500 to-blue-900">
          <h3 className="xl:text-[1.6rem] text-[1rem] text-blue-300 font-semibold mb-3">About Us</h3>
          <h1 className="xl:text-[2rem] text-[1rem] text-white xl:font-bold font-semibold">Welcome to Belfry investment and securities limited where we pave the way for financial growth.</h1>
        </div>
        <div className="bg-gray-100 xl:p-[6rem] p-[4rem]">
          <div className="mt-[-2.7rem] xl:ml-[4rem] ml-[-1rem]">
            <h3 className="text-blue-300 text-[1.5rem]">About the firm</h3>
            <p className="mt-2 text-gray-500 lg:text-[1.2rem] text-[1rem] xl:leading-[2rem] leading-[1.5rem]">Belfry Investments And Securities Limited was incorporated on 27th April 1976 to carry on the business of stock broking amongst others. The Company is licensed as a Broker/Dealer by the Nigerian Stock Exchange and registered by the Securities & Exchange Commission to carry on the functions of Broker/Dealer and Corporate Investment Adviser.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-[2rem] rounded-lg">
              <h1 className="text-[2rem] text-blue-300 mb-2">Our Mission</h1>
              <p className="text-gray-500">Our mission is to provide superior financial services that enable us create and manage sustainable wealth for all our clients, by deploying world class technology and well trained personnel.</p>
            </div>
            <div className="bg-white p-[2rem] rounded-lg">
              <h1 className="text-[2rem] text-blue-300 mb-2">Our Vision</h1>
              <p className="text-gray-500">Our unwavering vision is to forge enduring, mutually beneficial relationships with our esteemed clients, culminating in the creation, implementation, and seamless management of financial services that surpass all expectations.
                At Belfry Investment and Securities Limited, we strive to craft a financial experience that leaves no room for disappointment. With an unwavering commitment to your success, we stand by your side, offering tailored solutions that cater to your unique needs and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs
