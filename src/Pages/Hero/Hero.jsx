import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Me from '../../assets/me.png';

const Hero = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-center justify-center lg:justify-between mx-4 sm:mx-6 py-8 sm:py-12 px-6 mt-16 lg:mt-20'>
      <div className='text-center lg:text-left lg:max-w-lg'>
        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black'>
          MD. <span className='text-NavyBlue'>H</span>imel Mia
        </p>
        <p className='text-xl sm:text-2xl font-bold mt-2 text-black'>
          Front-End Web Developer
        </p>
        <p className='font-semibold mt-4 sm:ml-16 text-sm sm:text-base'>
          Let's Code The Future Together!
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
                className='text-3xl sm:text-4xl text-black hover:text-gray-600'
              />
            </Link>
          </li>
          <li>
            <Link to='#' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin
                size={24}
                className='text-3xl sm:text-4xl text-black hover:text-gray-600'
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
                className='text-3xl sm:text-4xl text-black hover:text-gray-600'
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
                className='text-3xl sm:text-4xl text-black hover:text-gray-600'
              />
            </Link>
          </li>
        </ul>
        <div className='mt-6 sm:mt-8'>
          <Link
            to='#'
            download
            className='bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all'
          >
            Download Resume
          </Link>
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
