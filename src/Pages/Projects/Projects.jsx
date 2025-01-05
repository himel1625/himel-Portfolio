import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import Title from '../../Components/Title/Title';

const Projects = () => {
  return (
    <div id='Projects' className='lg:pt-32'>
      <Title Header='My Projects' />

      <div className='flex flex-wrap gap-8 justify-center p-4 lg:mt-32'>
        {/* Card 1 */}
        <Card className='w-80 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out border-t-4 border-navColor'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='250'
              width='100%'
              image={img1}
              alt='Project 1'
            />
            <CardContent className='flex flex-col items-center py-6'>
              <Typography
                variant='h6'
                component='h2'
                className='text-navColor font-semibold mb-4'
              >
                Full-Stack Restaurant Management
              </Typography>
              <div className='flex gap-6 mb-6'>
                <a
                  href='https://github.com/himel1625/Full-Stack-Restaurant-Management-Web-Application?tab=readme-ov-file'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  GitHub
                </a>
                <a
                  href='https://dinemaster-6b18e.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  Live Project
                </a>
              </div>
              <Typography variant='body2' color='textSecondary'>
                A complete full-stack restaurant management solution.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Card 2 */}
        <Card className='w-80 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out border-t-4 border-navColor'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='250'
              width='100%'
              image={img2}
              alt='Project 2'
            />
            <CardContent className='flex flex-col items-center py-6'>
              <Typography
                variant='h6'
                component='h2'
                className='text-navColor font-semibold mb-4'
              >
                Marketplace Web Application
              </Typography>
              <div className='flex gap-6 mb-6'>
                <a
                  href='https://github.com/himel1625/Full-Stack-Marketplace-Web-Application'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  GitHub
                </a>
                <a
                  href='https://solosphere-9150a.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  Live Project
                </a>
              </div>
              <Typography variant='body2' color='textSecondary'>
                A modern e-commerce platform with full functionality.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Card 3 */}
        <Card className='w-80 shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out border-t-4 border-navColor'>
          <CardActionArea>
            <CardMedia
              component='img'
              height='250'
              width='100%'
              image={img3}
              alt='Project 3'
            />
            <CardContent className='flex flex-col items-center py-6'>
              <Typography
                variant='h6'
                component='h2'
                className='text-navColor font-semibold mb-4'
              >
                Sports Management Application
              </Typography>
              <div className='flex gap-6 mb-6'>
                <a
                  href='https://github.com/himel1625/Green-Sports'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  GitHub
                </a>
                <a
                  href='https://green-sports-4eb7c.web.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-navColor border-b-2 border-navColor hover:border-navColor-dark py-2 px-4 text-sm transition-all duration-300 ease-in-out'
                >
                  Live Project
                </a>
              </div>
              <Typography variant='body2' color='textSecondary'>
                A comprehensive system to manage sports events and teams.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
