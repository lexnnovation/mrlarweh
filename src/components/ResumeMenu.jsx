import { useState } from "react";
import { RESUMES } from "../constants";
import { FiChevronDown, FiDownload } from "react-icons/fi";

const ResumeMenu = ({ stacked = false, buttonClassName = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <a
        href={RESUMES.aiEngineer}
        download
        onClick={() => setIsOpen(false)}
        className='flex items-center gap-2 px-4 py-2.5 text-sm text-text hover:bg-surface-chrome'
      >
        <FiDownload className='text-accent-teal shrink-0' />
        AI Engineer Resume
      </a>
      <a
        href={RESUMES.softwareEngineer}
        download
        onClick={() => setIsOpen(false)}
        className='flex items-center gap-2 px-4 py-2.5 text-sm text-text hover:bg-surface-chrome'
      >
        <FiDownload className='text-accent-teal shrink-0' />
        Software Engineer Resume
      </a>
    </>
  );

  if (stacked) {
    return (
      <div className='flex flex-col overflow-hidden border rounded-lg border-border'>
        {links}
      </div>
    );
  }

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setIsOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-lg border border-accent-amber px-4 py-2 text-sm font-mono text-accent-amber hover:bg-accent-amber hover:text-surface transition-colors ${buttonClassName}`}
      >
        Download Resume
        <FiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className='absolute right-0 z-20 flex flex-col overflow-hidden border rounded-lg shadow-lg top-full mt-2 w-56 border-border bg-surface'>
          {links}
        </div>
      )}
    </div>
  );
};

export default ResumeMenu;
