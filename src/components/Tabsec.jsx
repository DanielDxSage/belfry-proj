import React, { useState } from 'react';

const Tabsec = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-[72rem] mx-auto mt-8">
      <div className={`flex ${window.innerWidth < 640 ? 'flex-col' : 'flex-row'}`}>
        {window.innerWidth < 640 ? (
          <div className="flex">
            <div
              className={`py-2 px-4 cursor-pointer ${
                activeTab === 1 ? 'border-t-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick(1)}
            >
              Tab 1
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
              Tab 3
            </div>
          </div>
        ) : (
          <div className="w-1/4">
            <div
              className={`py-2 px-4 cursor-pointer ${
                activeTab === 1 ? 'border-l-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick(1)}
            >
              Equities Trading
            </div>
            <div
              className={`py-2 px-4 cursor-pointer ${
                activeTab === 2 ? 'border-l-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick(2)}
            >
              Fixed Income Trading
            </div>
            <div
              className={`py-2 px-4 cursor-pointer ${
                activeTab === 3 ? 'border-l-2 border-blue-500 bg-blue-100' : 'bg-gray-100'
              }`}
              onClick={() => handleTabClick(3)}
            >
              Tab 3
            </div>
          </div>
        )}
        <div className="w-3/4 p-4 bg-gray-100">
          {activeTab === 1 && <div>Access to local and global equities markets for potential capital growth.</div>}
          {activeTab === 2 && <div> Opportunities in bonds and other fixed-income instruments to generate stable returns.</div>}
          {activeTab === 3 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabsec;
