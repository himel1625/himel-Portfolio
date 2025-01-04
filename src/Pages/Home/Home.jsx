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
      <div>
        <AboutMe />
      </div>
      <div className=' mx-auto '>
        <Skills />
      </div>
      <div className='mx-auto text-center'>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
