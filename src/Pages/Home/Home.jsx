import AboutMe from '../AboutMe/AboutMe';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div className='container'>
      <div className='mx-20'>
        <Hero />
      </div>
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
