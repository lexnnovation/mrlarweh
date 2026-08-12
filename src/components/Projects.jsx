import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import WindowCard from "./WindowCard";

const Projects = () => {
  const webProjects = PROJECTS.filter((p) => p.type === "web");
  const aiProjects = PROJECTS.filter((p) => p.type === "ai");

  return (
    <section className='w-full max-w-5xl pt-20' id='projects'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex items-center gap-3 mb-4'
      >
        <span className='font-mono text-lg text-accent-amber'>1.</span>
        <h2 className='text-3xl font-semibold font-display lg:text-4xl'>
          Projects
        </h2>
      </motion.div>

      {/* AI & Automation Systems */}
      <p className='mb-6 font-mono text-sm text-text-muted'>
        AI & Automation Systems
      </p>
      <div className='grid grid-cols-1 gap-6 mb-14 md:grid-cols-2'>
        {aiProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={project.id}
          >
            <WindowCard title={`~/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <div className='flex flex-col h-full p-6'>
                <h3 className='mb-2 text-lg font-semibold text-text'>
                  {project.name}
                </h3>
                <p className='flex-1 mb-4 text-sm leading-relaxed text-text-muted'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 text-xs rounded font-mono text-accent-teal bg-bg border border-border'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center self-start gap-2 px-4 py-2 text-sm font-mono transition-colors border rounded-lg border-border text-text hover:border-accent-amber hover:text-accent-amber'
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            </WindowCard>
          </motion.div>
        ))}
      </div>

      {/* Web & Product Builds */}
      <p className='mb-6 font-mono text-sm text-text-muted'>
        Web & Product Builds
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {webProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className='overflow-hidden border rounded-xl border-border bg-surface group'
          >
            <div className='relative h-48 overflow-hidden'>
              <img
                src={project.image}
                alt={project.name}
                className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='p-5'>
              <h3 className='mb-2 text-lg font-semibold text-text'>
                {project.name}
              </h3>
              <p className='mb-4 text-sm leading-relaxed text-text-muted line-clamp-3'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className='px-2 py-1 text-xs rounded font-mono text-accent-teal bg-bg border border-border'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.liveSite}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 text-sm font-mono transition-colors border rounded-lg border-accent-amber text-accent-amber hover:bg-accent-amber hover:text-surface'
              >
                View Website
                <MdArrowOutward />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
