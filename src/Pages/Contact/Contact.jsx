import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import Title from '../../Components/Title/Title';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm('service_4z1r967', 'template_bd8m7de', form.current, {
        publicKey: 'DhNaJQDIbdMEC67pv',
      })
      .then(
        () => {
          toast.success('Message Sent Successfully!');
          console.log('Email sent successfully');
        },
        error => {
          console.log('Failed to send email...', error.text);
        },
      );
    e.target.reset();
  };

  const commonStyles =
    'p-6 flex flex-col justify-center items-center shadow-xl rounded-lg transition-all duration-300 ease-in-out hover:scale-105';

  return (
    <div id='Contact' className='lg:pt-20 pb-20'>
      <Box className='p-8'>
        <div className='mt-20 mb-32'>
          <Title Header='Contact Me' />
        </div>
        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Paper
              className={`${commonStyles}`}
              sx={{
                height: { xs: 'auto', md: '350px' },
                backgroundColor: 'transparent',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <form ref={form} className='w-full' onSubmit={sendEmail}>
                <div className='mb-4'>
                  <TextField
                    fullWidth
                    label='Your Name'
                    name='from_name'
                    type='text'
                    variant='outlined'
                    margin='normal'
                    required
                    sx={{
                      '& .MuiInputBase-root': {
                        color: '#0dccf2',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                    }}
                  />
                </div>
                <div className='mb-4'>
                  <TextField
                    fullWidth
                    label='Your Email'
                    name='from_email'
                    type='email'
                    variant='outlined'
                    margin='normal'
                    required
                    sx={{
                      '& .MuiInputBase-root': {
                        color: '#0dccf2',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                    }}
                  />
                </div>
                <div className='mb-4'>
                  <TextField
                    fullWidth
                    label='Your Message'
                    name='message'
                    multiline
                    rows={4}
                    variant='outlined'
                    margin='normal'
                    required
                    sx={{
                      '& .MuiInputBase-root': {
                        color: '#0dccf2',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#0dccf2',
                      },
                    }}
                  />
                </div>
                <div className='pb-6'>
                  <Button
                    type='submit'
                    variant='outlined'
                    color='inherit'
                    className='text-navColor border-navColor shadow-md hover:shadow-lg transition-all duration-300 ease-in-out'
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Paper
              className={`${commonStyles}`}
              sx={{
                height: { xs: 'auto', md: '350px' },
                backgroundColor: 'transparent',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant='h6'>
                <p className='text-4xl mb-4 text-white font-bold select-none'>
                  MY Location
                </p>
              </Typography>
              <div className='flex items-center mb-2 text-white'>
                <FaMapMarkerAlt className='mr-2 text-2xl' />
                <Typography
                  variant='body1'
                  className='text-lg hover:text-navColor'
                >
                  Rangpur, Bangladesh
                </Typography>
              </div>
              <div className='flex items-center mb-2 text-white'>
                <FaEnvelope className='mr-2 text-2xl' />
                <Typography variant='body1' className='text-lg'>
                  <a
                    href='mailto:himelmia1625@gmail.com'
                    className='text-white hover:underline hover:text-navColor'
                  >
                    himelmia1625@gmail.com
                  </a>
                </Typography>
              </div>
              <div className='flex items-center mb-2 text-white'>
                <FaPhoneAlt className='mr-2 text-2xl' />
                <Typography variant='body1' className='text-lg'>
                  <a
                    href='tel:+8801939827741'
                    className='text-white hover:underline hover:text-navColor'
                  >
                    +8801939827741
                  </a>
                </Typography>
              </div>
              <div className='flex items-center text-white'>
                <FaWhatsapp className='mr-2 text-2xl' />
                <Typography variant='body1' className='text-lg'>
                  <a
                    href='https://wa.me/8801939827741'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:underline hover:text-navColor'
                  >
                    +8801939827741
                  </a>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
