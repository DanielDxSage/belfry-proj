import React from 'react'
import Tabs from './Tabs';

const TabContent = () => {
  const tabs = [
    {
      label: 'Our Investment Approach',
      heading: 'At our investment firm',
      content: 'we prioritize a disciplined and proven investment approach that is designed to generate sustainable, long-term returns for our clients. Our philosophy is rooted in the belief that a diversified portfolio of high-quality investments is the best way to achieve financial success over the long term. We take a patient, value-driven approach to investing and seek out opportunities where we believe there is a disconnect between an assets intrinsic value and its market price.Risk management is also a key part of our investment approach. We aim to minimize the impact of any single market or economic event by diversifying portfolios across asset classes, geographies, and sectors. We believe that managing risk is just as important as generating returns, and we take a conservative approach to risk that is designed to protect our clients portfolios in both good times and bad.',
    },
    {
      label: 'Experience and Expertise',
      heading: 'Our Commitment to Your Investment Success',
      content: "At our investment firm, we are committed to providing our clients with the highest level of expertise and experience in the industry. We believe that our teams deep knowledge and understanding of the financial markets is a critical component of our ability to generate strong returns for our clients over the long term. Our team is composed of seasoned investment professionals who have extensive experience managing assets across a wide range of market conditions. We believe that our ability to navigate changing market conditions and identify new investment opportunities is a key driver of our success. In addition to our team's expertise, we also leverage a range of resources and tools to support our investment process.",
    },
    {
      label: 'Client-Centric Approach',
      heading: ' Putting Your Needs First',
      content: "At our investment firm, we believe that a client-centric approach is essential to building lasting relationships and achieving long-term investment success. We place a strong emphasis on understanding our clients' unique needs and goals, and we work closely with them to develop customized investment strategies that are tailored to their specific circumstances. Our client-centric approach is grounded in transparency and open communication. We believe that by keeping our clients informed and engaged throughout the investment process, we can build trust and foster a collaborative relationship that is focused on achieving our clients' goals. We also recognize that our clients' needs and goals may evolve over time. That's why we are committed to providing ongoing support and guidance to help our clients navigate changing market conditions and make informed investment decisions.",
    },
  ];

  return (
    <div className="container max-w-[1018px] p-4">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabContent;
