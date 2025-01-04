import React from 'react';

const Title = ({ Header }) => {
  return (
    <div className='lg:mt-20'>
      <h2 className='text-center text-white text-3xl font-bold uppercase '>
        {Header}
      </h2>
    </div>
  );
};

export default Title;
