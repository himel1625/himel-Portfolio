import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div className='container'>
      <div className='lg:mx-44 '>
        <Hero />
      </div>
      <AboutMe />
      <div className=' mx-auto '>
        <Skills />
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
