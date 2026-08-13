import { useEffect, useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import ContactCTA from "./ContactCTA";

const NAV_NUMBER_COLORS = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-amber-500",
  "text-purple-500",
  "text-pink-500",
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className='fixed left-0 right-0 z-50 top-4 px-4'>
        {/* Desktop Menu */}
        <div className='items-center justify-between hidden max-w-6xl gap-6 px-6 py-3 mx-auto border rounded-xl border-border bg-surface/80 backdrop-blur-lg lg:flex'>
          <a href='#' className='font-mono text-lg font-medium text-text shrink-0'>
            alexander<span className='text-accent-amber'>.</span>teye
          </a>
          <ul className='flex items-center gap-4 font-mono text-sm shrink-0'>
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index} className='whitespace-nowrap'>
                <a
                  className='text-text-muted hover:text-accent-amber transition-colors'
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <span className={NAV_NUMBER_COLORS[index % NAV_NUMBER_COLORS.length]}>
                    {index}.
                  </span>{" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-3 shrink-0'>
            <ContactCTA />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className='rounded-xl border border-border bg-surface/90 backdrop-blur-md lg:hidden'>
          <div className='flex items-center justify-between px-4 py-3'>
            <a href='#' className='font-mono text-base font-medium text-text'>
              alexander<span className='text-accent-amber'>.</span>teye
            </a>
            <div className='flex items-center gap-2'>
              <ThemeToggle />
              <button
                className='flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text focus:outline-none'
                onClick={toggleMobileMenu}
                aria-label='Toggle menu'
              >
                {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg/90 backdrop-blur-xl lg:hidden'
          >
            <div className='h-24 shrink-0' />
            <ul className='flex flex-col items-start flex-1 gap-8 px-8 pt-4 font-mono text-3xl landscape:gap-3 landscape:text-xl'>
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                >
                  <a
                    href={item.href}
                    className='text-text'
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    <span
                      className={NAV_NUMBER_COLORS[index % NAV_NUMBER_COLORS.length]}
                    >
                      {index}.
                    </span>{" "}
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className='flex justify-center px-6 py-8 shrink-0 landscape:py-4'>
              <ContactCTA stacked />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
