import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const InvestmentBanking = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Nav/>
      <div>
        <div
          className="relative bg-[url('https://img.freepik.com/free-vector/polygonal-wireframe-handshake-abstract-blue-composition-as-symbol-friendship-business-partnership-vector-illustration_1284-30758.jpg?w=740&t=st=1691411070~exp=1691411670~hmac=6decac03719a4098bb878a836fb447be688e3574863694dd27898980d96f08ab')] bg-cover bg-center lg:h-[600px] h-[400px]"
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col lg:ml-[5rem] ml-[3rem] lg:mt-[12.5rem] mt-[5rem]">
            <h1 className="text-white lg:text-5xl text-[2rem] font-semibold text-center mb-4 mr-[58.7rem]">Trusteeship</h1>
            <p className="text-white lg:text-[1.4rem] text-[1.1rem] mb-4">Take Control of Your Finances. <br/>Open Your Account Today. Prosper Tomorrow.</p>
            <Link to="/Open-Account">
              <Button name="Get Started"/>
            </Link>
          </div>
        </div>

        <div className="lg:p-[2.6rem] p-[1.6rem] bg-gray-200">
          <div className="py-3 ">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-6 text-blue-500">Overview</h2>
              <p className="text-gray-700 lg:text-[1.5] text-[1.1rem]">
                At Belfry Investment and Securities Limited, we offer professional Trusteeship services designed to safeguard your assets and protect your interests. Our team of trusted trustees ensures the proper administration of trusts, estates, and other fiduciary arrangements.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-500 ml-[1.2rem]">Services Offered</h2>
            <div className="max-w-[72rem] mx-auto mt-8">
              <div className={`flex ${window.innerWidth < 640 ? 'flex-col' : 'flex-row'}`}>
                <div className={window.innerWidth < 640 ? 'w-full' : 'w-1/4'}>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 1 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    Trust Administration
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 2 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Pension Fund Trusteeship
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 3 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Custodianship
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 4 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(4)}
                  >
                    Corporate Trusteeship
                  </div>
                </div>
                <div className="lg:w-3/4 w-full p-4 bg-gray-300">
                  {activeTab === 1 && (
                    <div>Proper management and distribution of assets as per trust provisions.</div>
                  )}
                  {activeTab === 2 && (
                    <div>Assisting with the distribution of assets and wealth transfer to beneficiaries.</div>
                  )}
                  {activeTab === 3 && (
                    <div> Overseeing the management of pension funds for employees.</div>
                  )}
                  {activeTab === 4 && (
                    <div>Assisting businesses in managing financial and legal obligations.</div>
                  )}
                </div>
              </div>
          </div>
        </div>


        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default InvestmentBanking
