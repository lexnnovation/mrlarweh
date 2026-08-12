import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import WindowCard from "./WindowCard";

const Education = () => {
  return (
    <section className='w-full max-w-5xl pt-20' id='education'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3 mb-10'
      >
        <span className='font-mono text-3xl lg:text-4xl text-accent-amber'>4.</span>
        <h2 className='text-3xl font-semibold font-display lg:text-4xl'>
          Education
        </h2>
      </motion.div>

      <div className='space-y-6'>
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            key={index}
          >
            <WindowCard title='~/education/gctu.json'>
              <div className='p-6'>
                <p className='mb-2 font-mono text-xs text-accent-teal'>
                  {edu.duration}
                </p>
                <h3 className='text-xl font-semibold text-text'>
                  {edu.degree}
                </h3>
                <p className='mb-3 text-sm text-text-muted'>
                  {edu.institution}
                </p>
                <p className='text-sm leading-relaxed text-text-muted'>
                  {edu.description}
                </p>
              </div>
            </WindowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
