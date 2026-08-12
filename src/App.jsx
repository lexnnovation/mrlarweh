import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='relative h-full min-h-screen overflow-y-auto antialiased bg-bg'>
      <div className='container relative z-10 flex flex-col items-center p-4 mx-auto space-y-8'>
        <Hero />
        <Navbar />
        <Skills />
        <Projects />
        <Bio />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
