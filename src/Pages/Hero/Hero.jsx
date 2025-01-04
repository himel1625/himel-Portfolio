import { Button } from '@mui/material';
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Me from '../../assets/me.png';

const Hero = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-center justify-center lg:justify-between mx-4 pt-32'>
      <div className='text-center lg:text-left lg:max-w-lg'>
        <p className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white'>
          <span className='text-navColor'>Hello</span>! I am
        </p>
        <p className='text-xl sm:text-4xl font-bold mt-2 ml-10 text-white'>
          MD.<span className='text-navColor'>Himel</span> Mia
        </p>
        <p className='text-green-500 ml-20 font-bold mt-4'>
          I'm a Front-End Web Developer
        </p>

        <ul className='flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6'>
          <li>
            <Link
              to='https://github.com/himel1625'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub
                size={24}
                className='text-3xl sm:text-4xl text-white hover:text-navColor'
              />
            </Link>
          </li>
          <li>
            <Link to='#' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin
                size={24}
                className='text-3xl sm:text-4xl text-white hover:text-navColor'
              />
            </Link>
          </li>
          <li>
            <Link
              to='https://x.com/Himel1625'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter
                size={24}
                className='text-3xl sm:text-4xl text-white hover:text-navColor'
              />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.facebook.com/profile.php?id=100078858040957&mibextid=ZbWKwL'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook
                size={24}
                className='text-3xl sm:text-4xl text-white hover:text-navColor'
              />
            </Link>
          </li>
        </ul>

        {/* Permanent Glowing Button */}
        <div className='mt-6 text-white '>
          <Button
            variant='outlined'
            color='inherit'
            startIcon={<FaDownload />}
            className=' text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out'
            href='https://example.com/resume.pdf'
            download='Himel_Mia_Resume.pdf'
          >
            Download Resume
          </Button>
        </div>
      </div>

      <div className='mt-6 sm:mt-8 lg:mt-0'>
        <img
          src={Me}
          alt='MD. Himel Mia'
          className='w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover mx-auto lg:mx-0'
        />
      </div>
    </div>
  );
};

export default Hero;
