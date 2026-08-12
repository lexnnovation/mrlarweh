import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import ContactCTA from "./ContactCTA";

const Footer = () => {
  function getYear() {
    return `${new Date().getFullYear()}`;
  }
  return (
    <div className='w-full max-w-5xl pt-16 mt-8 border-t border-border'>
      <div className='flex flex-col items-center gap-6 py-10'>
        <a href='#' className='font-mono text-lg font-medium text-text'>
          alexander<span className='text-accent-amber'>.</span>teye
        </a>

        <ContactCTA />

        <div className='flex items-center justify-center gap-5'>
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.label}
              className='text-text-muted hover:text-accent-amber transition-colors'
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <p className='text-sm tracking-wide text-text-muted'>
          &copy; Alexander Teye. All rights reserved {getYear()}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
