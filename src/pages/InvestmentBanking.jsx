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
          className="relative bg-[url('https://img.freepik.com/premium-photo/blue-money-business-graph-finance-chart-diagram-economy-3d-coin-background-with-growth-financial-data-concept-investment-market-profit-bar-success-market-stock-technology-currency-report_79161-2359.jpg?w=900')] bg-cover bg-center lg:h-[600px] h-[400px]"
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col lg:ml-[5rem] ml-[3rem] lg:mt-[12.5rem] mt-[5rem]">
            <h1 className="text-white lg:text-5xl text-[2rem] font-semibold text-center mb-4 mr-[46.7rem]">Investment Banking</h1>
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
              Welcome to our Investment Banking services. At Belfry Investment and Securities Limited , we offer a wide range of investment banking solutions tailored to your business needs. Our expertise and industry knowledge empower us to assist you in achieving your financial goals.
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
                    Empowering Companies
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 2 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Mergers and Acquisitions (M&A)
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 3 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Advisory Services
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 4 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(4)}
                  >
                    Restructuring
                  </div>
                </div>
                <div className="lg:w-3/4 w-full p-4 bg-gray-300">
                  {activeTab === 1 && (
                    <div>Assisting companies in raising capital through equity, debt, or hybrid financing.</div>
                  )}
                  {activeTab === 2 && (
                    <div>Providing strategic advice and execution support for mergers and acquisitions.</div>
                  )}
                  {activeTab === 3 && (
                    <div>Offering financial and strategic advice to guide your business decisions.</div>
                  )}
                  {activeTab === 4 && (
                    <div>Helping companies optimize their capital structure and improve financial performance.</div>
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
