import React from 'react'
import Slider from '../components/Slider/Slider'
import Nav from '../components/Nav'
import TabContent from '../components/TabContent';
import Ourservice from '../components/Ourservice';

// import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div>
      <Nav/>
      <Slider />
      <div className="h-[39rem] bg-gray-200">
        <h1 className="text-[2rem] p-[1.5rem] ml-[7.8rem] text-gray-400 font-medium ">Why Us<span className='text-blue-600 text-[2.5rem]'>.</span></h1>
        <hr className="bg-blue-500 my-0 h-0.5 border-t-1  w-[4rem] ml-[9.5rem] opacity-100" />
        {/* <Tabs/> */}
        <TabContent/>
      </div>
      <Ourservice />

    </div>
  )
}

export default Home
