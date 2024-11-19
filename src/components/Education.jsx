import React from "react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section className='py-8' id='education'>
      <h2 className='mb-4 text-4xl font-bold text-center'>Education</h2>
      {EDUCATION.map((edu, index) => (
        <div key={index} className='p-10 mb-6'>
          <h3 className='text-xl font-semibold'>{edu.degree}</h3>
          <p className='text-lg '>{edu.institution}</p>
          <p className='text-sm text-stone-300'>{edu.duration}</p>
          <p className='mt-2'>{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
