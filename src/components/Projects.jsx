import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      <h2 className='mb-8 text-4xl font-semibold text-center lg:text-4xl'>
        Projects
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className='relative overflow-hidden group rounded-3xl'
          >
            <img
              src={project.image}
              alt={project.name}
              className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 opacity-0 backdrop-blur-lg group-hover:opacity-100'>
              <h3 className='mb-2 text-xl'>{project.name}</h3>
              <p className='p-4 mb-12'>{project.description}</p>
              <a
                href={project.githubLink}
                target='_blank'
                rel=' noopener noreferrer'
                className='px-6 py-2 text-black bg-white rounded-full hover:bg-black hover:text-white hover:duration-700'
              >
                <div className='flex items-center'>
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
