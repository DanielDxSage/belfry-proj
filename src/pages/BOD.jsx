import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SIR_ONYEMA from '../assets/SIR_ONYEMA.jpg';
import CelinaNnenna from '../assets/CelinaNnenna.jpg';
import KingsleyChinedu from '../assets/KingsleyChinedu.jpg';
import CollinsIfeanyi from '../assets/CollinsIfeanyi.jpg';
import helen_Onyeaka from '../assets/helen_Onyeaka.jpg';
import SamuelNnamdi from '../assets/SamuelNnamdi.jpg';
import Princewill from '../assets/Princewill.jpg';
import Patricia_Chionuma from '../assets/Patricia_Chionuma.jpg';


const BOD = () => {
  const directors = [
    {
      name: 'Chief Onyemauwa Nwaekpe Chionuma',
      position: 'Chairman',
      additionalInfo: 'Sir Onyemauwa Nwaekpe Chionuma is a consummate and an accomplished banker, whose banking career spanned over 42 years from 1965 to 2007 ...',
      image: SIR_ONYEMA,
    },
    {
      name: 'Chief (Mrs) Celina Nnenna Chionuma',
      position: 'Chairman',
      additionalInfo: 'Chief (Mrs) Celina N. Chionuma holds a Bachelor’s Degree of Science (B.Sc.) in Guidance and Counselling from University of Nigeria, Nsukka in 1991. Prior to assuming office as a Director of Belfry Investments and Securities Limited, she was a businesswoman of international',
      image: CelinaNnenna,
    },
    {
      name: 'Rev. Kingsley Chinedu Chionuma',
      position: 'Executive Director',
      additionalInfo: 'Rev. Kingsley Chinedu Chionuma holds a Bachelor of Science (B.Sc.) Degree in Geology and Mining from Nnamdi Azikiwe University, Akwa and a Post-Graduate Diploma (PGD) in Computer Sciences and a Master in Business Administration (MBA) Degree in Information Technology Management from the... ',
      image: KingsleyChinedu,
    },
    {
      name: 'Chief Collins Ifeanyi Chionuma',
      position: 'Executive Director',
      additionalInfo: 'Chief Collins Ifeanyi Chionuma holds a Bachelor of Science (B.Sc.) Degree in Management from the University of Port Harcourt. He is an Associate Member of the Nigerian Institute of Management (NIM). He was the Finance Manager of Conik Farms Ltd, Lekki. He was also the Managing Director/CEO of Urbane ...',
      image: CollinsIfeanyi,
    },
    {
      name: 'Dr. Mrs. Helen Onyeka',
      position: 'Director',
      additionalInfo: 'Mrs. Helen Onyeaka is a Micro Biology graduate of the Federal University of Technology, Owerri and a Master’s (M.Sc.) Degree holder in Industrial Micro Biology. At present, she is undergoing a Ph.D. program in University of Birmingham in England. Before moving to England for further studies, she worked at Pabod Breweries, Port Harcourt, and Conik Farms Ltd, Lagos...',
      image: helen_Onyeaka,
    },
    {
      name: 'Mr. Samuel Nnamdi Chionuma',
      position: 'Director',
      additionalInfo: 'Mr. Samuel N. Chionuma holds a Bachelor of Science (B.Sc.) Degree in Banking and Finance from Rivers State University of Science and Technology, Port Harcourt and a Post-Graduate Diploma (PGD) in International Finance and a Master of Science (M.Sc.) Degree in Accounting and Finance from the University of Birmingham, United Kingdom. He is an Associate Member of the...',
      image: SamuelNnamdi,
    },
    {
      name: 'Eng. Princewill Chionuma',
      position: 'Director',
      additionalInfo: 'Princewill Chionuma holds a (Msc) Human Resource Management From Univerty of Central England(UCE) Birmingham, UK, a (Pd) Management and Human Resource Managemnt (UCE) Birmingham, UK, (BEng) Electronic Engineering (UCE) Birmingham, UK. He is an associate with order companies such Zola Records, Belfry Bureau De Change ...',
      image: Princewill,
    },
    {
      name: 'Patricia Onyemauwa-Chionuma',
      position: 'Director',
      additionalInfo: 'Ms. Patricia Onyemauwa-Chionuma holds a Bachelor of Law (LLB) From Staffordshire Univertity Stroke-on-Trent, Uk as well A-levels Sociology, English literature and Physology From ABBEY Collage Birmingham, Uk. A-levels Mathematics From Bromsgrove, Uk ...',
      image: Patricia_Chionuma,
    },
  ];

  const [selectedDirector, setSelectedDirector] = useState(null);

  const openModal = (director) => {
    setSelectedDirector(director);
  };

  const closeModal = () => {
    setSelectedDirector(null);
  };

  return (
    <div>
      <Nav />
      <div className="relative w-full" >
        <img src="https://img.freepik.com/free-photo/business-people-board-room-meeting_53876-138090.jpg?w=900&t=st=1686646948~exp=1686647548~hmac=8fd9e7a6e8843b4c72d0f7428a60170ca61c21115cd9b5ee31251043e9816a8e" alt="Belfry BOD page" 
        className="object-cover object-center w-full max-h-[calc(100vh-64px)] md:h-[25rem] lg:h-[25rem] xl:h-[30rem] mx-auto" />
        <h1 className="lg:text-[2.5rem] text-[1.1rem] lg:font-bold font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Board of Directors</h1>
      </div>

      <div className="bg-gray-100 py-7">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-[2rem]">
            {directors.map((director, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer"
                onClick={() => openModal(director)}
              >
                <div
                  className="w-full h-64 bg-cover bg-center bg-no-repeat transform transition-transform duration-300 hover:scale-125"
                  style={{ backgroundImage: `url(${director.image})` }}
                ></div>
                <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-blue-500 w-[100%]">
                  <h2 className="text-xl font-bold">{director.name}</h2>
                  <h3 className="text-lg">{director.position}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedDirector && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="bg-blue-500 p-8 rounded-lg shadow-md max-w-md w-full mx-4">
              <button
                className="absolute top-2 right-2 p-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row items-center">
                <img
                  className="w-20 h-20 rounded-full md:mr-4"
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">{selectedDirector.name}</h2>
                  <h3 className="text-lg mb-4 text-white">{selectedDirector.position}</h3>
                </div>
              </div>
              <div className="mt-4 overflow-y-auto max-h-60">
                <p className="text-white">{selectedDirector.additionalInfo}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default BOD;
