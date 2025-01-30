import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className='py-8' id='education'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-4xl font-semibold text-center'
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='p-10 space-y-10'
      >
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className='p-4 mb-6 border rounded-xl border-stone-50/30'
          >
            <h3 className='text-xl font-semibold'>{edu.degree}</h3>
            <p className='text-sm '>{edu.institution}</p>
            <p className='text-sm text-stone-300'>{edu.duration}</p>
            <p className='mt-2'>{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
