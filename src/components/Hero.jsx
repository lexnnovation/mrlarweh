import React from "react";
import { HERO } from "../constants";
import lexImg from "../assets/lex1.jpeg";
const Hero = () => {
  return (
    <section className='flex flex-wrap items-center min-h-screen'>
      <div className='w-full md:w-1/2'>
        <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
          {HERO.name}
        </h2>
        <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
          {HERO.greet}
        </p>
        <p className='p-2 mb-8 text-xl'>{HERO.description}</p>
      </div>
      <div className='w-full md:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
          <img
            className='rounded-3xl'
            src={lexImg}
            alt={HERO.name}
            width={650}
            height={650}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
