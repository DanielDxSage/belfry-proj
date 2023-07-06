import React from 'react'
import Button from './Button';

const CTA = () => {
  return (
    <section className="bg-[url('assets/coins.jpg')] bg-no-repeat bg-cover bg-center h-[36rem] p-[10rem] flex flex-col">
      <h1 className="text-[2.5rem] mb-[2rem]">Lorem ipsum dolor sit amet <br/> consectetur. Lorem ipsum dolor sit amet.</h1>
      <h3 className="mb-[2rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, <br/> aliquam.  Lorem ipsum dolor sit.</h3>
      <div className="w-[12rem]">
        <Button name="Open An Account" />
      </div>
      
      
    </section>
  )
}

export default CTA;
