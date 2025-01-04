import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layouts = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='relative'>
      {/* Moving Dot with Smaller Size and Larger Shadows */}
      <div
        className='w-6 h-6  rounded-full bg-navColor fixed pointer-events-none transition-all duration-300 ease-out'
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: `
            0 0 10px 5px #0dccf2, 
            0 0 20px 10px #0dccf2, 
            0 0 30px 15px #0dccf2, 
            0 0 40px 20px #0dccf2, 
            0 0 50px 25px #0dccf2, 
            0 0 60px 30px #0dccf2
          `,
        }}
      ></div>

      {/* Main Layout */}
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
