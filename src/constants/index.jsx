import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiOpenai,
  SiFastapi,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiAnthropic,
  SiHuggingface,
  SiLangchain,
  SiVuedotjs,
  SiTypescript,
  SiPydantic,
  SiN8N,
  SiZendesk,
  SiHubspot,
  SiGoogleanalytics,
  SiCloudflare,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbSitemap, TbEye, TbApi } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const RESUMES = {
  aiEngineer: "/resume/alex-larweh-ai-engineer-resume.pdf",
  softwareEngineer: "/resume/alex-larweh-software-engineer-resume.pdf",
};

export const HERO = {
  name: "Alexander Teye",
  greet: "Hello! I'm 👋🏻",
  role: "AI Engineer & Software Engineer",
  description:
    "I build AI-powered backend systems and full-stack products — from LLM-driven automation workflows to production web applications. 5+ years shipping code across Python/FastAPI, React, and PHP/Laravel, with a current focus on agentic systems, RAG pipelines, and workflow automation.",
};

export const PROJECTS = [
  {
    id: 1,
    type: "web",
    name: "Sports Prediction Hub (Enokay69.com)",
    description:
      "I created Enokay69.com, a sports prediction platform offering free and VIP betting tips with features like user authentication, Telegram integration, and responsive design. The backend runs on PHP Laravel and MySQL, with a Next.js and Tailwind CSS frontend for a fast, mobile-friendly experience. This combination ensures a scalable, secure, and user-focused experience.",
    image: projectImage1,
    githubLink: "https://github.com/lexnnovation/k69_v2",
    liveSite: "https://www.enokay69.com/",
    tags: ["Next.js", "Laravel", "Tailwind CSS", "PHP", "MySQL"],
  },
  {
    id: 2,
    type: "web",
    name: "Business Website (levotude.com)",
    description:
      "I developed Levotude.com, a business development consulting website specializing in market entry and growth strategies for small and medium-sized enterprises in Africa. The site features detailed services, methodology, and contact information. It was built using WordPress with custom HTML and CSS for a tailored, responsive design.",
    image: projectImage2,
    liveSite: "https://www.levotude.com/",
    tags: ["WordPress", "HTML/CSS"],
  },
  {
    id: 3,
    type: "web",
    name: "International Speaker & Author Website",
    description:
      "Built with WordPress and custom HTML and CSS for a personalized, responsive design. I developed Dr. Amanda Foo-Ryland's website, showcasing her work as a speaker, author, and coach. The site includes details about her background, books, and client testimonials.",
    image: projectImage3,
    liveSite: "https://dramandafoo-ryland.com/",
    tags: ["WordPress", "HTML/CSS"],
  },
  {
    id: 4,
    type: "web",
    name: "Business Website (calonhapus.co.uk)",
    description:
      "CalonHapus.co.uk, a personal coaching website based in the United Kingdom offering hypnotherapy and NLP services to help clients achieve personal transformation. The site features detailed information about services, a blog, and contact details. It was built using WordPress with custom HTML and CSS for a tailored, responsive design.",
    image: projectImage4,
    liveSite: "https://calonhapus.co.uk/",
    tags: ["WordPress", "HTML/CSS"],
  },
  {
    id: 5,
    type: "web",
    name: "Neural Coding Training Website",
    description:
      "I developed YourLifeLiveIt.com, a personal development platform offering Neural Coding® techniques to help individuals eliminate negative habits and beliefs. The website features information about their services, online and live courses, and coaching opportunities. It was built using Shopify, providing a user-friendly interface and secure payment processing.",
    image: projectImage5,
    liveSite: "https://yourlifeliveit.com/",
    tags: ["Shopify"],
  },
  {
    id: 6,
    type: "web",
    name: "WhatsApp AI Receptionist",
    description:
      "Landing page for the AI WhatsApp Receptionist product, built with Next.js and Tailwind CSS. Introduces the assistant, its automated-reply and customer-service capabilities, and its business workflow automation features.",
    image: projectImage6,
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 7,
    type: "ai",
    name: "Production AI Email Support System",
    description:
      "An AI email support system with FastAPI as the backend logic layer and n8n for workflow orchestration. Integrates OpenAI API processing, routing logic, and business-specific response validation to reduce manual response work and make support handling scalable. Validated through backend review, workflow checks, and production deployment testing.",
    githubLink: "https://github.com/lexnnovation",
    tags: ["Python", "FastAPI", "n8n", "OpenAI API", "Google Cloud Console"],
  },
  {
    id: 8,
    type: "ai",
    name: "AI WhatsApp Receptionist",
    description:
      "An AI-powered WhatsApp assistant for customer inquiries and business workflow automation. Uses RAG-style contextual response patterns backed by Supabase vector storage for retrieval, with automated replies, payment-processing workflows, and agent-like conversation flow.",
    githubLink: "https://github.com/lexnnovation",
    tags: ["Python", "RAG", "Supabase", "WhatsApp API"],
  },
];

export const BIO = [
  "I'm an AI Engineer and Software Engineer with 5+ years of code-heavy experience across full-stack development, backend systems, and production workflow automation. Right now I'm building AI-powered backend systems — Python, FastAPI, n8n, OpenAI APIs, PostgreSQL, and Supabase — designing multi-step workflows that connect business processes, LLM integrations, and databases into reliable, production-ready products.",
  "My background spans both sides of the stack: React/Vue on the frontend, PHP/Laravel and FastAPI on the backend, with hands-on experience shipping and maintaining real client applications in WordPress, Shopify, and custom code. I care about debugging things properly — inspecting logs, tracing workflow failures, and validating behavior before calling something done.",
  "Outside of work, I enjoy photography, video editing, and listening to music, drawing inspiration from the world around me. If you're looking for an engineer who's dedicated, adaptable, and ready to take on any challenge — AI systems or full-stack web — I'm the ideal collaborator and team player.",
];

export const SKILLS = [
  {
    category: "AI Engineering",
    file: "ai-engineering.json",
    items: [
      { icon: <SiOpenai />, name: "OpenAI API" },
      { icon: <SiAnthropic />, name: "Claude" },
      { icon: <SiLangchain />, name: "LangChain" },
      { icon: <TbSitemap />, name: "LangGraph" },
      { icon: <FaUserGroup />, name: "CrewAI" },
      { icon: <SiPydantic />, name: "Pydantic AI" },
      { icon: <SiHuggingface />, name: "Hugging Face" },
    ],
  },
  {
    category: "Backend",
    file: "backend.json",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiLaravel />, name: "Laravel" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <TbApi />, name: "REST APIs" },
    ],
  },
  {
    category: "Frontend",
    file: "frontend.json",
    items: [
      { icon: <RiReactjsLine />, name: "React" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <SiVuedotjs />, name: "Vue.js" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Data",
    file: "data.json",
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiMysql />, name: "MySQL / SQL" },
    ],
  },
  {
    category: "Automation & Tools",
    file: "tools.json",
    items: [
      { icon: <SiN8N />, name: "n8n" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiCloudflare />, name: "Cloudflare" },
      { icon: <SiZendesk />, name: "Zendesk" },
      { icon: <SiHubspot />, name: "HubSpot" },
      { icon: <SiGoogleanalytics />, name: "Google Analytics 4" },
      { icon: <TbEye />, name: "Microsoft Clarity" },
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <FaShopify />, name: "Shopify" },
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "AI Automation Engineer",
    company: "Kioobi SRL, Italy",
    duration: "January 2026 - Present",
    description:
      "Building backend AI automation systems using Python, FastAPI, n8n, OpenAI APIs, PostgreSQL, and Supabase. Designing multi-step workflows connecting business processes, customer interactions, APIs, and databases. Integrating LLM-powered features into practical workflows, using Supabase and vector-based retrieval to support RAG-style contextual responses, and debugging automation behavior through log inspection and workflow execution review.",
  },
  {
    title: "Software Engineer",
    company: "Enokay69.com, Accra, Ghana",
    duration: "November 2022 - December 2025",
    description:
      "Led full-stack web development projects from requirements gathering through delivery, maintenance, and support. Built and maintained Laravel applications using PHP, JavaScript, Bootstrap, HTML, CSS, and MySQL. Designed backend logic, database structures, and API integrations, and applied security, debugging, analytics, and performance practices to improve application reliability.",
  },
  {
    title: "IT Support Analyst",
    company: "Betika Ghana, Accra, Ghana",
    duration: "September 2020 - July 2024",
    description:
      "Provided first-line technical support for hardware, software, network, and business application issues. Diagnosed and resolved technical problems, supported systems including Zendesk, FreePBX/Asterisk PBX, and NComputing, and built practical experience in structured troubleshooting and operational reliability.",
  },
  {
    title: "Frontend Developer / Graphic & Product Designer",
    company: "GoDropping Ghana Ltd, Accra, Ghana",
    duration: "2019 - 2020",
    description:
      "Designed landing pages and email templates using HTML, CSS, and JavaScript. Identified UI/UX issues in company mobile and web applications, manually tested websites and apps, and prepared reports for the development team.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Ghana Communication Technology University (GCTU)",
    duration: "January 2021 - June 2024",
    description:
      "Core computer science principles including algorithms, data structures, and software engineering, with a foundation in databases, operating systems, and networking. Graduated with honors, with a focus on innovation and critical thinking that continues to inform how I approach engineering problems today.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/alex-larweh-5143b093/",
    icon: <FaLinkedin fontSize={22} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/lexnnovation",
    icon: <FaGithub fontSize={22} />,
    label: "GitHub",
  },
  {
    href: "https://x.com/lexnnovation",
    icon: <FaXTwitter fontSize={22} />,
    label: "X",
  },
];
