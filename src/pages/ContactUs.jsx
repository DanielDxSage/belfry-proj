import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RegisterFormDe from '../components/RegisterFormDe';

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <div className="bg-gray-100 flex items-center justify-center">
        <RegisterFormDe/>
      </div>
      
      {/* <div className="m-[3rem] text-center">
        <h1 className="font-semibold text-[2rem]">Customers Details</h1>
      </div>

      <div className=" w-[53rem] ml-[12rem] ">
        <div className="bg-blue-500 p-[1.3rem] ">
          <h2 className="text-white">Bio-Data</h2>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div> */}

      <Footer/>
      
    </div>
  )
}

export default ContactUs
