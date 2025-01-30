import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
const Footer = () => {
  function getYear() {
    const today = new Date();
    const year = today.getFullYear();

    return `${year}`;
  }
  return (
    <div className='mt-20 mb-8'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt={"logo"} width={200} className='my-4' />
      </div>
      <div className='flex items-center justify-center gap-4 '>
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p className='mt-8 text-sm tracking-wide text-center text-gray-400'>
        &copy;Alex Larweh. All rights reserved {getYear()}.
      </p>
    </div>
  );
};

export default Footer;
