import AboutMe from '../AboutMe/AboutMe';
import Hero from '../Hero/Hero';
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
    </div>
  );
};

export default Home;
