import { SKILLS1 } from "../constants";
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
const Skills1 = () => {
  return (
    <section className='container mx-auto' id='skills'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-12 text-4xl font-semibold text-center '
      >
        Old Skills
      </motion.h2>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
        className='flex flex-col px-4 py-2 mx-2 text-3xl border rounded-3xl lg:px-20 border-stone-50/30'
      >
        {SKILLS1.map((skill1, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS1.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className='flex items-center'>
              {skill1.icon}
              <h3 className='px-6 text-lg lg:text-2xl'>{skill1.name}</h3>
            </div>
            <div className='text-xl font-semibold lg:text-xl'>
              <span>{skill1.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills1;
