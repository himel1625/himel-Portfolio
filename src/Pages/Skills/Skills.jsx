import React from 'react';
import Marquee from 'react-fast-marquee';
import Title from '../../Components/Title/Title';
const Skills = () => {
  return (
    <div className='mt-20 '>
      <Title Header='My Skills' />
      <div className='mt-10 mb-10'>
        <Marquee gradient={true} speed={30} pauseOnHover={true}>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#00acc1'
                d='M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z'
              ></path>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='40'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#80deea'
                d='M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16 c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z'
              ></path>
              <path
                fill='#80deea'
                d='M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5  c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4 c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9  c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z'
              ></path>
              <path
                fill='#80deea'
                d='M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19 c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2  c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z'
              ></path>
              <circle cx='24' cy='24' r='4' fill='#80deea'></circle>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#388e3c'
                d='M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013'
              ></path>
              <path
                fill='#37474f'
                d='M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z'
              ></path>
              <path
                fill='#2e7d32'
                d='M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076'
              ></path>
              <path
                fill='#4caf50'
                d='M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076'
              ></path>
              <path
                fill='#37474f'
                d='M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z'
              ></path>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#5d4037'
                d='M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z'
              ></path>
              <path
                fill='#4caf50'
                d='M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z'
              ></path>
              <path fill='#dcedc8' d='M23 28H25V36H23z'></path>
              <path
                fill='#4caf50'
                d='M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z'
              ></path>
              <path
                fill='#81c784'
                d='M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z'
              ></path>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='40'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#4db6ac'
                d='M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177  c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458  C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097  c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z'
              ></path>
            </svg>
          </div>
          <div className='pr-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <path fill='#f7df1e' d='M6,42V6h36v36H6z'></path>
              <path
                fill='#000001'
                d='M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z'
              ></path>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <polygon
                fill='#546e7a'
                points='21.906,31.772 24.507,29.048 27.107,31.772 27.107,43 21.906,43'
              ></polygon>
              <polygon
                fill='#f50057'
                points='17.737,29.058 21.442,28.383 21.945,32.115 15.345,41.199 11.138,38.141'
              ></polygon>
              <polygon
                fill='#d500f9'
                points='15.962,24.409 19.355,26.041 17.569,29.356 6.89,32.825 5.283,27.879'
              ></polygon>
              <polygon
                fill='#29b6f6'
                points='17.256,19.607 19.042,22.922 15.649,24.554 4.97,21.084 6.577,16.137'
              ></polygon>
              <polygon
                fill='#00e5ff'
                points='21.126,16.482 20.623,20.214 16.918,19.539 10.318,10.455 14.526,7.398'
              ></polygon>
              <polygon
                fill='#546e7a'
                points='26.094,16.228 23.493,18.952 20.893,16.228 20.893,5 26.094,5'
              ></polygon>
              <polygon
                fill='#f50057'
                points='30.262,18.943 26.558,19.618 26.055,15.886 32.654,6.802 36.862,9.859'
              ></polygon>
              <polygon
                fill='#d500f9'
                points='32.039,23.59 28.645,21.958 30.431,18.643 41.11,15.174 42.717,20.12'
              ></polygon>
              <polygon
                fill='#29b6f6'
                points='30.744,28.393 28.958,25.078 32.351,23.447 43.03,26.916 41.423,31.863'
              ></polygon>
              <polygon
                fill='#00e5ff'
                points='26.874,31.518 27.378,27.786 31.082,28.461 37.682,37.545 33.474,40.602'
              ></polygon>
            </svg>
          </div>
          <div className='pr-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='50'
              height='100'
              viewBox='0 0 48 48'
            >
              <path
                fill='#ff8f00'
                d='M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z'
              ></path>
              <path
                fill='#ffa000'
                d='M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z'
              ></path>
              <path
                fill='#ff6f00'
                d='M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z'
              ></path>
              <path
                fill='#ffc400'
                d='M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z'
              ></path>
            </svg>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
