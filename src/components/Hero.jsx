import { HERO } from "../constants";
import { motion } from "framer-motion";
import WindowCard from "./WindowCard";
import ResumeMenu from "./ResumeMenu";

const STACK_LINES = [
  { tag: "Python", color: "text-accent-teal" },
  { tag: "FastAPI", color: "text-accent-amber" },
  { tag: "OpenAI API", color: "text-accent-teal" },
  { tag: "LangChain", color: "text-accent-amber" },
  { tag: "React", color: "text-accent-teal" },
  { tag: "Next.js", color: "text-accent-amber" },
  { tag: "Laravel", color: "text-accent-teal" },
  { tag: "PHP", color: "text-accent-amber" },
  { tag: "PostgreSQL", color: "text-accent-teal" },
  { tag: "Supabase", color: "text-accent-amber" },
  { tag: "n8n", color: "text-accent-teal" },
  { tag: "Docker", color: "text-accent-amber" },
];

const Hero = () => {
  return (
    <section className='flex flex-wrap items-center min-h-[95vh] lg:min-h-0 lg:pt-20 lg:pb-28'>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2'
      >
        <p className='p-2 mt-28 text-2xl tracking-tighter lg:mt-16 lg:text-3xl'>
          {HERO.greet}
        </p>
        <h2 className='p-2 text-5xl font-extrabold font-hero md:text-5xl lg:text-[5.5rem] leading-[1.05]'>
          {HERO.name}
        </h2>
        <p className='px-2 mt-4 text-lg font-mono text-accent-amber lg:text-xl'>
          {HERO.role}
        </p>

        <p className='p-2 mt-4 mb-8 text-lg text-text-muted'>
          {HERO.description}
        </p>

        <div className='flex flex-wrap items-center gap-4 px-2'>
          <ResumeMenu />
          <a
            href='#projects'
            className='px-4 py-2 text-sm font-mono transition-colors border rounded-lg border-border text-text hover:border-accent-teal hover:text-accent-teal'
          >
            View Projects
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center justify-center w-full md:w-1/2 lg:p-8'
      >
        <WindowCard title='~/stack.jsx' className='w-full max-w-md'>
          <div className='p-6 font-mono text-sm leading-relaxed'>
            <div className='flex gap-4'>
              <span className='w-4 text-right shrink-0 text-text-muted/50'>1</span>
              <span className='text-accent-amber'>&lt;stack&gt;</span>
            </div>
            {STACK_LINES.map((line, i) => (
              <div key={line.tag} className='flex gap-4'>
                <span className='w-4 text-right shrink-0 text-text-muted/50'>
                  {i + 2}
                </span>
                <span className={`pl-4 ${line.color}`}>
                  &lt;{line.tag} /&gt;
                </span>
              </div>
            ))}
            <div className='flex gap-4'>
              <span className='w-4 text-right shrink-0 text-text-muted/50'>
                {STACK_LINES.length + 2}
              </span>
              <span className='text-accent-amber'>&lt;/stack&gt;</span>
            </div>
          </div>
        </WindowCard>
      </motion.div>
    </section>
  );
};

export default Hero;
