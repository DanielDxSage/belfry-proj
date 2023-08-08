import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Nav/>
      <div>
        <div
          className="relative bg-[url('https://img.freepik.com/free-photo/finances-elements-wooden-cubes-arrangement_23-2148793814.jpg?w=996&t=st=1691403627~exp=1691404227~hmac=fdcec60630091fc685e4109151ca525425b961d9fc3c69d83b35d6a8be28152b')] bg-cover bg-center lg:h-[600px] h-[400px]"
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col lg:ml-[5rem] ml-[3rem] lg:mt-[12.5rem] mt-[5rem]">
            <h1 className="text-white lg:text-5xl text-[2rem] font-semibold text-center mb-4 mr-[48.7rem]">Asset Mangament</h1>
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
              Welcome to our Asset Management service. At Belfry Investment and Securities Limited, we offer professional asset management solutions to help you grow and preserve your wealth. Our team of experienced portfolio managers is dedicated to delivering optimal results.
              </p>
            </div>
          </div>

          <div className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-6 text-blue-500">Our Approach</h2>
              <p className="text-gray-700 lg:text-[1.5] text-[1.1rem]">
              At Belfry Investment and Securities Limited, we adopt a disciplined and research-driven approach to asset management. We strive to understand your financial objectives, risk tolerance, and investment horizon, creating personalized portfolios to suit your needs.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-blue-500 ml-[1.2rem]">Services Offered</h2>
            <div className="max-w-[72rem] mx-auto mt-8">
              <div className={`flex ${window.innerWidth < 640 ? 'flex-col' : 'flex-row'}`}>
                <div className={window.innerWidth < 640 ? 'w-full' : 'w-1/4' }>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 1 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    Portfolio Management
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 2 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Wealth Advisory
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 3 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Mutual Funds
                  </div>
                </div>
                <div className="lg:w-3/4 w-full p-4 bg-gray-300">
                  {activeTab === 1 && (
                    <div>Creating and managing diversified investment portfolios.</div>
                  )}
                  {activeTab === 2 && (
                    <div>Providing expert advice on wealth management and financial planning.</div>
                  )}
                  {activeTab === 3 && (
                    <div>Offering a range of mutual funds to match your investment preferences.</div>
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

export default AssetManagement
