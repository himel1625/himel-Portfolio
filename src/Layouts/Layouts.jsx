import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GrReactjs } from 'react-icons/gr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
const Layouts = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rocketPosition = Math.min(
    Math.max(scrollY, 50),
    window.innerHeight - 100,
  );

  return (
    <div className='relative'>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: rocketPosition }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 10,
        }}
        className='fixed left-1/2 transform -translate-y-1/2'
      >
        <span  className='text-blue-700' >
          <GrReactjs size={30} />
        </span>
      </motion.div>

      <div className='mx-auto font-Roboto scroll-smooth bg-[#2d3748]'>
        <header className='sticky top-0 z-50'>
          <Navbar />
        </header>

        <main className='container mx-auto'>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layouts;
