import AboutMe from '../AboutMe/AboutMe';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div className='container'>
      <div className='mx-20'>
        <Hero />
      </div>
      <AboutMe />
    </div>
  );
};

export default Home;
