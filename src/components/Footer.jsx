import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from "react-router-dom";
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 flex-col">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 mt-[2rem] w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Link to="/">
            <img src={logo} alt="Belfry" className="w-[266px] h-[72px] object-contain " />
          </Link>
          
          <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px] ">Established with a foundation of fidelity and trust.</p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-medium text-[20px] leading-[27px] text-black mb-[1rem]">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`ont-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}><Link to={link.link}>{link.name}</Link> </li>  
                ))}                
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 mb-[1rem] border-t-[1px] border-t-[#3f3e45]">
        <p className="font-normal text-[18px] leading-[27px] text-black">
          2023 Belfry. All Right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img 
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0' }`}
            /> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer;
