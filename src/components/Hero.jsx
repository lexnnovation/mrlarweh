import React from "react";
import { HERO } from "../constants";
import lexImg from "../assets/lex1.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='flex flex-wrap items-center min-h-screen'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className='w-full md:w-1/2'
      >
        <p className='p-2 mt-16 text-3xl tracking-tighter lg:text-4xl'>
          {HERO.greet}
        </p>
        <h2 className=' p-2 text-6xl font-bold md:text-5xl lg:text-[7rem]'>
          {HERO.name}
        </h2>

        <p className='p-2 mb-8 text-xl'>{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2 lg:p-8'
      >
        <div className='flex justify-center'>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='rounded-3xl'
            src={lexImg}
            alt={HERO.name}
            width={650}
            height={650}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
