import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Box
        className='text-center text-gray-400 text-sm bg-black w-full'
        sx={{ padding: '20px 0', textAlign: 'center' }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} All rights reserved . (Himel Mia)
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
