import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import WindowCard from "./WindowCard";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section className='w-full max-w-5xl' id='skills'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3 mb-10'
      >
        <span className='font-mono text-3xl lg:text-4xl text-accent-amber'>0.</span>
        <h2 className='text-3xl font-extrabold font-display lg:text-4xl'>
          Skills
        </h2>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
        className='grid grid-cols-1 gap-6 md:grid-cols-2'
      >
        {SKILLS.map((group) => (
          <motion.div variants={itemVariants} key={group.category}>
            <WindowCard title={group.file}>
              <div className='p-5'>
                <p className='mb-4 font-mono text-xs tracking-wide uppercase text-text-muted'>
                  {group.category}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className='flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-bg border border-border text-text'
                    >
                      <span className='text-accent-teal'>{item.icon}</span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </WindowCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
