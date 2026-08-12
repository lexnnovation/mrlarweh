import { BIO } from "../constants";
import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import lexImg from "../assets/alex-professional.jpg";

const Bio = () => {
  return (
    <section className='flex flex-col w-full max-w-5xl gap-10 pt-20' id='bio'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3'
      >
        <span className='font-mono text-3xl lg:text-4xl text-accent-amber'>2.</span>
        <h2 className='text-3xl font-semibold font-display lg:text-4xl'>
          About Me
        </h2>
      </motion.div>

      <div className='flex flex-col-reverse items-start gap-10 lg:flex-row'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='lg:w-3/5'
        >
          {BIO.map((bio, index) => (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className='mb-4 text-lg leading-relaxed text-text-muted'
              key={index}
            >
              {bio}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='w-full lg:w-2/5'
        >
          <WindowCard title='~/about/alex-professional.jpg'>
            <img
              src={lexImg}
              alt='Alex Larweh'
              className='object-cover w-full h-80 lg:h-96'
            />
          </WindowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
