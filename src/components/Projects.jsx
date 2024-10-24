import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      <h2 className='mb-8 text-3xl text-center lg:text-4xl'>Projects</h2>
      <div className='grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map()}
      </div>
    </section>
  );
};

export default Projects;
