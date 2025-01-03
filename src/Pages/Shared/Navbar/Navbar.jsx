import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../../public/icons8-h-64.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#2F4F6F] text-white shadow-md'>
      <div className='max-w-7xl mx-auto md:px-4 lg:px-2 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-2xl font-semibold px-4 md:px-0 flex items-center justify-center cursor-pointer'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6BAED9] to-[#A1D8F2] flex items-center'>
            <img className='h-8 w-8 ml-1' src={logo} alt='Logo' />
            <span>
              Himel <span className='text-white'>M</span>ia
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 font-bold'>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Home
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            About Me
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Skills
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Projects
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Contact Me
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden px-4'>
          <button onClick={toggleMenu} className='text-2xl'>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bg-[#2F4F6F] text-white w-72 h-full transition-transform ease-in-out duration-300`}
      >
        <div className='flex justify-end p-4 font-bold'>
          <button onClick={toggleMenu}>
            <FaTimes className='text-2xl' />
          </button>
        </div>
        <div className='flex flex-col items-center space-y-6 mt-8'>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Home
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            About Me
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Skills
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Projects
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
          <motion.a
            href='#'
            className='relative group text-white'
            whileHover={{ color: '#9538e2' }}
          >
            Contact Me
            <motion.div className='absolute bottom-0 left-0 h-0.5 bg-[#9538e2] w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
