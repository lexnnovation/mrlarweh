import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className='w-full max-w-5xl pt-20' id='work'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3 mb-10'
      >
        <span className='font-mono text-3xl lg:text-4xl text-accent-amber'>3.</span>
        <h2 className='text-3xl font-extrabold font-display lg:text-4xl'>
          Experience
        </h2>
      </motion.div>

      <div className='relative pl-8 border-l border-border'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            key={index}
            className='relative pb-10 last:pb-0'
          >
            <span className='absolute w-3 h-3 -left-[2.15rem] top-1.5 rounded-full bg-accent-amber' />
            <p className='mb-2 font-mono text-xs text-accent-teal'>
              {experience.duration}
            </p>
            <h3 className='text-xl font-semibold text-text'>
              {experience.title}
            </h3>
            <p className='mb-3 text-sm text-text-muted'>{experience.company}</p>
            <p className='max-w-3xl text-sm leading-relaxed text-text-muted'>
              {experience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
