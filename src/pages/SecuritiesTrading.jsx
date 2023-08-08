import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const SecuritiesTrading = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Nav/>
      <div>
        <div
          className="relative bg-[url('https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg?w=826&t=st=1691062352~exp=1691062952~hmac=84e8d4a7b1517410db047dea4e7961a66e2af414e3929391460bf8ff0c4f1bfd')] bg-cover bg-center lg:h-[600px] h-[400px]"
        >
          <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col lg:ml-[5rem] ml-[3rem] lg:mt-[12.5rem] mt-[5rem]">
            <h1 className="text-white lg:text-5xl text-[2rem] font-semibold text-center mb-4 mr-[48.7rem]">Securities Trading</h1>
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
              Belfry Investment and Securities Limited is a dealing member of the Nigerian Stock Exchange (NSE) and registered by the Securities & Exchange Commission (SEC) as a Broker/Dealer.
              Welcome to our Security Trading service. At Belfry Investment and Securities Limited, we provide comprehensive security trading solutions to meet your investment needs. Our team of experienced professionals is committed to helping you navigate the financial markets and make informed investment decisions.
              </p>
            </div>
          </div>

          <div className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-6 text-blue-500">Our Approach</h2>
              <p className="text-gray-700 lg:text-[1.5] text-[1.1rem]">
              At Belfry Investment and Securities Limited, we believe in a client-centric approach to security trading. We tailor our strategies to your unique financial goals and risk tolerance. Our dedicated team of experts is equipped with in-depth market knowledge, ensuring that your investments are handled with the utmost care.
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
                    Equities Trading
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 2 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    Fixed Income Trading
                  </div>
                  <div
                    className={`py-2 px-4 cursor-pointer ${
                      activeTab === 3 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    Portfolio Management Services
                  </div>
                </div>
                <div className="lg:w-3/4 w-full p-4 bg-gray-300">
                  {activeTab === 1 && (
                    <div>Access to local and global equities markets for potential capital growth.</div>
                  )}
                  {activeTab === 2 && (
                    <div>Opportunities in bonds and other fixed-income instruments to generate stable returns.</div>
                  )}
                  {activeTab === 3 && (
                    <div>Our Portfolio Management Services are tailored to elevate your investment journey to new heights. We understand that each investor has unique goals and risk appetites, which is why our dedicated team of experts crafts personalized investment strategies to align with your financial aspirations. With a keen eye on market trends and a deep understanding of risk management, we offer you a curated selection of investment opportunities that maximize potential returns while minimizing risks. Let us guide you through the dynamic world of investments and build a portfolio that speaks to your financial objectives and dreams. </div>
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

export default SecuritiesTrading
