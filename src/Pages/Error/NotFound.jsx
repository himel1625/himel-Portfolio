import React from 'react';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center p-6 bg-white shadow-lg rounded-lg border border-gray-300 max-w-md'>
        <h1 className='text-6xl font-bold text-red-500'>404</h1>
        <p className='text-xl text-gray-700 mt-2'>Oops! Page Not Found</p>
        <p className='mt-4 text-gray-600'>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href='/'
          className='mt-6 inline-block px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300'
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
