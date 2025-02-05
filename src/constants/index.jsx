import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Professional Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ALEXANDER LARWEH",
  greet: "Hello! I'm 👋🏻",
  description:
    "a skilled web developer specialized in intuitive user interfaces and robust backend solutions. Passionate about transforming ideas into high-performance, engaging web experiences with a balance of creativity and technical excellence.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Sports Prediction Hub (Enokay69.com)",
    description:
      "I created Enokay69.com, a sports prediction platform offering free and VIP betting tips with features like user authentication, Telegram integration, and responsive design. The website was built using PHP Laravel for backend functionality and Bootstrap for a sleek, mobile-friendly front end. This combination ensures a scalable, secure, and user-focused experience.",
    image: projectImage1,
    githubLink: "https://github.com/lexnnovation/k69_v2",
    liveSite: "https://www.enokay69.com/",
  },
  {
    id: 2,
    name: "Business Website (levotude.com)",
    description:
      "I developed Levotude.com, a business development consulting website specializing in market entry and growth strategies for small and medium-sized enterprises in Africa. The site features detailed services, methodology, and contact information. It was built using WordPress with custom HTML and CSS for a tailored, responsive design.",
    image: projectImage2,
    liveSite: "https://www.levotude.com/",
  },
  {
    id: 3,
    name: "International Speaker & Author Website ",
    description:
      "Built with WordPress and custom HTML and CSS for a personalized, responsive design.I developed Dr. Amanda Foo-Ryland's website, showcasing her work as a speaker, author, and coach. The site includes details about her background, books, and client testimonials.",
    image: projectImage3,
    liveSite: "https://dramandafoo-ryland.com/",
  },
  {
    id: 4,
    name: "Business Website (calonhapus.co.uk)",
    description:
      "CalonHapus.co.uk, a personal coaching website based in the United Kingdom offering hypnotherapy and NLP services to help clients achieve personal transformation. The site features detailed information about services, a blog, and contact details. It was built using WordPress with custom HTML and CSS for a tailored, responsive design.",
    image: projectImage4,
    liveSite: "https://calonhapus.co.uk/",
  },
  {
    id: 5,
    name: "Neural Coding Training Website",
    description:
      "I developed YourLifeLiveIt.com, a personal development platform offering Neural Coding® techniques to help individuals eliminate negative habits and beliefs. The website features information about their services, online and live courses, and coaching opportunities. It was built using Shopify, providing a user-friendly interface and secure payment processing.",
    image: projectImage5,
    liveSite: "https://yourlifeliveit.com/",
  },
  {
    id: 6,
    name: "Portfolio Website",
    description:
      "I developed a portfolio website using ReactJS, Tailwind CSS, Framer, and EmailJS. The site features a modern, responsive design, with an active contact form that allows seamless communication with visitors. It also showcases my web development skills and various projects, offering an interactive and user-friendly experience. The integration of Framer adds smooth animations, while EmailJS powers the contact form for efficient communication.",
    image: projectImage6,
    githubLink: "https://github.com/lexnnovation/mrlarweh",
    liveSite: "https://lexnnovation.com",
  },
];

export const BIO = [
  "Alex is a highly skilled web developer who is specialized in backend development, Alex’s primary focus is on JavaScript (React/Vue) on the frontend and PHP, using the powerful Laravel framework on the backend to build scalable, efficient, and robust applications. He is driven by a deep passion for coding and always eager to take on new challenges, tackling any hurdles that come his way with enthusiasm and determination.",
  "With experience in both front-end and back-end technologies, Alex is proficient in delivering dynamic, responsive websites and web applications. His hands-on experience with WordPress and custom development enables him to create tailored, user-friendly solutions for clients. Constantly seeking to improve and expand his skills, Alex embraces learning new technologies and refining his craft to stay at the cutting edge of web development.",
  "In his downtime, Alex enjoys photography, video editing, and listening to music, drawing inspiration from the world around him. If you're looking for a developer who's dedicated, adaptable, and ready to take on any challenge, Alex is the ideal collaborator and team player!",
  ,
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className='text-4xl text-white lg:text-5xl' />,
    name: "React",
  },
  {
    icon: <RiTailwindCssFill className='text-4xl text-white lg:text-5xl' />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiPhp className='text-4xl text-white lg:text-5xl' />,
    name: "PHP",
  },
  {
    icon: <SiLaravel className='text-4xl text-white lg:text-5xl' />,
    name: "Laravel",
  },
  {
    icon: <SiMysql className='text-4xl text-white lg:text-5xl' />,
    name: "SQL",
  },
  {
    icon: <FaWordpress className='text-4xl text-white lg:text-5xl' />,
    name: "Wordpress",
  },
  {
    icon: <FaShopify className='text-4xl text-white lg:text-5xl' />,
    name: "Shopify",
  },
  {
    icon: <FaGitAlt className='text-4xl text-white lg:text-5xl' />,
    name: "Git",
  },
];

export const SKILLS1 = [
  {
    icon: <RiReactjsLine className='text-4xl text-white lg:text-5xl' />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className='text-4xl text-white lg:text-5xl' />,
    name: "Tailwind CSS",
    experience: "2+ year",
  },
  {
    icon: <SiPhp className='text-4xl text-white lg:text-5xl' />,
    name: "PHP",
    experience: "3+ years",
  },
  {
    icon: <SiLaravel className='text-4xl text-white lg:text-5xl' />,
    name: "Laravel",
    experience: "2+ year",
  },
  {
    icon: <SiMysql className='text-4xl text-white lg:text-5xl' />,
    name: "SQL",
    experience: "2+ years",
  },
  {
    icon: <FaWordpress className='text-4xl text-white lg:text-5xl' />,
    name: "Wordpress",
    experience: "4+ year",
  },
  {
    icon: <FaShopify className='text-4xl text-white lg:text-5xl' />,
    name: "Shopify",
    experience: "2+ year",
  },
  {
    icon: <FaGitAlt className='text-4xl text-white lg:text-5xl' />,
    name: "Git Verison Control",
    experience: "4+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Project Lead (Web Developer)",
    company: "Enokay69.com",
    duration: "November 2022 - Present",
    description:
      "Led web development project from concept to completion, ensuring they are delivered on time and within budget.  Work closely with other developers, cyber security expects and stakeholders to translate requirements and objectives into technical specifications and solutions.  Utilize PHP Laravel framework to build and maintain scalable and robust web applications.  Implement responsive and user-friendly interfaces using Bootstrap, HTML, CSS, and JavaScript.  Design and manage databases using MySQL, ensuring efficient data storage and retrieval.  Integrate third-party APIs and services to enhance the functionality of web applications....",
  },
  {
    title: "IT Support Analyst",
    company: "Betika Ghana",
    duration: "July 2023 - June 2024",
    description:
      "Provide first-line support to users experiencing technical issues with hardware, software, and network systems.  Provide and respond to support requests via phone, email, or in person, and log incidents and service requests in a tracking system.  Diagnose and troubleshoot hardware and software issues, providing timely resolution or escalation to higher-level support if necessary.   Assist users in understanding and effectively using various IT resources and applications like Zendesk, Free PBX (Asterisk PBX) and N-Computing.  Implement and enforce IT security policies and procedures to protect organizational data and systems....",
  },
  {
    title: "Creative Lead",
    company: "Betika Ghana",
    duration: "September 2020 - July 2023",
    description:
      "Conceptualizing and creating visual designs to convey marketing messages effectively.  Designing layouts for various mediums such as print publications, websites, and digital media.  Editing and enhancing images using software like Adobe Photoshop and Adobe Illustrator.  Producing designs for print production, ensuring quality and color accuracy.  Creating original artwork or graphics to complement designs....",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ghana Communication Technology University",
    duration: "January 2021 - June 2024",
    description:
      "The Ghana Communication Technology University instilled in Alex Larweh a deep understanding of core computer science principles, including algorithms, data structures, and software engineering. The academic environment fostered his knowledge of databases, operating systems, and networking, providing him with a solid foundation in both theory and practice. Through rigorous coursework and projects, Alex developed strong problem-solving skills and an appreciation for the fundamentals of algorithm design. Graduating with honors, the university’s focus on innovation and critical thinking continues to inspire his passion for advancing in the tech industry.",
  },
  // {
  //   degree: "Bachelor of Science in Information Technology",
  //   institution: "University of California, Berkeley",
  //   duration: "September 2008 - June 2012",
  //   description:
  //     "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className='hover:opacity-80' />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className='hover:opacity-80' />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className='hover:opacity-80' />,
  // },
  {
    href: "https://x.com/lexnnovation",
    icon: <FaXTwitter fontSize={25} className='hover:opacity-80' />,
  },
  {
    href: "https://github.com/lexnnovation",
    icon: <FaGithub fontSize={25} className='hover:opacity-80' />,
  },
  {
    href: "https://www.linkedin.com/in/alex-larweh-5143b093/",
    icon: <FaLinkedin fontSize={25} className='hover:opacity-80' />,
  },
];
