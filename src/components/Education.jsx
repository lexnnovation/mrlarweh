import React from "react";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {EDUCATION.map((edu, index) => (
        <div key={index} className='p-10 mb-6'>
          h3
        </div>
      ))}
    </section>
  );
};

export default Education;
