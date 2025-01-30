import { BIO } from "../constants";
import { delay, motion } from "framer-motion";

const Bio = () => {
  return (
    <section className='flex flex-col max-w-4xl gap-12 pt-20 max' id='bio'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-4xl font-semibold text-center lg:text-4xl'
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {BIO.map((bio, index) => (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
            className='mb-4 text-lg lg:text-xl'
            key={index}
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
