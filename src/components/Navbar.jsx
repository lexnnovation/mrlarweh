import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import ResumeMenu from "./ResumeMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
        <div className='items-center justify-between hidden max-w-4xl gap-6 px-6 py-3 mx-auto border rounded-xl border-border bg-surface/80 backdrop-blur-lg lg:flex'>
          <a href='#' className='font-mono text-lg font-medium text-text'>
            alex<span className='text-accent-amber'>.</span>larweh
          </a>
          <ul className='flex items-center gap-5 font-mono text-sm'>
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className='text-text-muted hover:text-accent-amber transition-colors'
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <span className='text-accent-teal'>
                    0{index + 1}.
                  </span>{" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-3'>
            <ResumeMenu />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className='rounded-xl border border-border bg-surface/90 backdrop-blur-md lg:hidden'>
          <div className='flex items-center justify-between px-4 py-3'>
            <a href='#' className='font-mono text-base font-medium text-text'>
              alex<span className='text-accent-amber'>.</span>larweh
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
          {isMobileMenuOpen && (
            <div className='px-4 pb-6'>
              <ul className='flex flex-col gap-4 mb-6 font-mono text-base'>
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className='block text-text'
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      <span className='text-accent-teal'>0{index + 1}.</span>{" "}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ResumeMenu stacked />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
