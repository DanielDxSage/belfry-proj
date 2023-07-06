import React from 'react'
import Slider from '../components/Slider/Slider'
import Nav from '../components/Nav'
import TabContent from '../components/TabContent';
import Ourservice from '../components/Ourservice';
import CTA from '../components/CTA';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer'

// import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div>
      <Nav/>
      <Slider />
      <div className="bg-gray-200">
        <h1 className="text-[2rem] p-[1.5rem]  lg:ml-[7.5rem] md:ml-0 text-gray-400 font-medium ">Why Us<span className='text-blue-600 text-[2.5rem]'>.</span></h1>
        <hr className="bg-blue-500 my-0 h-0.5 border-t-1 lg:w-[4rem] md:w-[1rem]  lg:ml-[9.5rem] md:ml-[4rem]  opacity-100" />
        {/* <Tabs/> */}
        <TabContent/>
      </div>
      <Ourservice />
      <CTA />
      <GetInTouch/>
      <Footer />
    </div>
  )
}

export default Home
