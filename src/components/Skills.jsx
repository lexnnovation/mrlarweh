import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  return (
    <section className='container mx-auto' id='skills'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-12 text-4xl font-semibold text-center '
      >
        Skills
      </motion.h2>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
        className='grid grid-cols-2 gap-6 text-3xl sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className='flex flex-col items-center py-6 text-center'
          >
            <div className='px-4 text-2xl sm:px-6 md:px-8'>{skill.icon}</div>
            <h3 className='px-4 text-base sm:text-lg md:text-xl'>
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
