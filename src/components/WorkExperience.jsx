import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className='pt-20 ' id='work'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-4xl font-semibold tracking-tighter text-center'
      >
        Professional Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='p-10 space-y-10'
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className='p-4 mb-6 border rounded-xl border-stone-50/30 bg-white/10'
          >
            <h3 className='text-2xl font-semibold '>{experience.title}</h3>
            <p className='text-xl '>{experience.company}</p>
            <p className='text-sm '>{experience.duration}</p>
            <p className='text-sm '>{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
