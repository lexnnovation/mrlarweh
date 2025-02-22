import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-8 text-4xl font-semibold text-center lg:text-4xl'
      >
        Portfolio
      </motion.h2>
      <div className='grid grid-cols-1 lg:gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className='relative mb-6 overflow-hidden group rounded-3xl'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
            />
            <motion.div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white transition-opacity duration-500 opacity-100 backdrop-blur-lg'>
              <h3 className='pb-2 text-xl font-bold text-center'>
                {project.name}
              </h3>
              <p className=' pb-4 text-center max-w-[90%] sm:max-w-[90%] lg:max-w-[70%]'>
                {project.description}
              </p>
              <div className='flex flex-col items-center justify-center transition-opacity duration-500 opacity-100 gap-y-4'>
                <a
                  href={project.liveSite}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-6 py-2 text-black bg-white rounded-full hover:bg-black hover:text-white hover:duration-700 w-fit'
                >
                  <div className='flex items-center'>
                    <span>View Website</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
