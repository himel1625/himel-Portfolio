import { Card, CardActionArea, CardMedia } from '@mui/material';
import img1 from '../../assets/ss1.png';
import img2 from '../../assets/ss2.png';
import img3 from '../../assets/ss3.png';
import Title from '../../Components/Title/Title';

const Projects = () => {
  return (
    <div id='Projects' className='lg:pt-32 '>
      <Title Header='My Projects' />

      <div className='flex flex-wrap gap-6 p-4 justify-center lg:mt-32'>
        <Card className='w-80 shadow-lg transition-shadow duration-300 ease-in-out'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              width='100%'
              image={img1}
              alt='Project 1'
            />
            <div className='flex justify-center p-4'>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/himel1625/Full-Stack-Restaurant-Management-Web-Application?tab=readme-ov-file'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  GitHub
                </a>
                <a
                  href='https://dinemaster-6b18e.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  Visit Project
                </a>
              </div>
            </div>
          </CardActionArea>
        </Card>

        <Card className='w-80 shadow-lg transition-shadow duration-300 ease-in-out'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              width='100%'
              image={img2}
              alt='Project 2'
            />
            <div className='flex justify-center p-4'>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/himel1625/Full-Stack-Marketplace-Web-Application'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  GitHub
                </a>
                <a
                  href='https://solosphere-9150a.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  Visit Project
                </a>
              </div>
            </div>
          </CardActionArea>
        </Card>

        <Card className='w-80 shadow-lg transition-shadow duration-300 ease-in-out'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='200'
              width='100%'
              image={img3}
              alt='Project 3'
            />
            <div className='flex justify-center p-4'>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/himel1625/Green-Sports'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  GitHub
                </a>
                <a
                  href='https://green-sports-4eb7c.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-navColor shadow-md shadow-navColor transition-all duration-300 ease-in-out px-4 py-2 text-sm rounded-lg hover:bg-navColor-dark hover:border-navColor-dark'
                >
                  Visit Project
                </a>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
