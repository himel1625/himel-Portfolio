import Title from '../../Components/Title/Title';
import Bootstrap from '../../assets/Bootstrap.png';
import ReactJS from '../../assets/React-icon.svg.png';
import Tailwind from '../../assets/Tailwind_CSS_Logo.svg.png';
import css from '../../assets/csss.png';
import firebase from '../../assets/firebase.png';
import html from '../../assets/html.webp';
import javascript from '../../assets/javascript.png';
import mui from '../../assets/mui.png';
import redux from '../../assets/redux.png';
import './skills.css';

import exprees from '../../assets/express-js.png';
import jwt from '../../assets/jwt.svg';
import mongodb from '../../assets/mongodb.png';
import node from '../../assets/nodejspng.png';
import typescript from '../../assets/typescript.png';

import { Tooltip } from 'react-tooltip';
const Skills = () => {
  return (
    <div id='skills' className='mt-20 lg:pt-32 '>
      <div className='mb-44'>
        <Title Header='My Skills' />
      </div>
      <div className='grid md:grid-cols-2 relative container'>
        <div className='flex min-h-[400px]  items-center justify-center'>
          <div className=''>
            <Tooltip id='html' place='bottom' className='absolute text-gray1' />
            <img
              src={html}
              className='html lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
              data-tooltip-id='html'
              data-tooltip-content='HTML5'
            />
            <Tooltip id='css' place='bottom' className='absolute text-gray1' />
            <img
              src={css}
              className='css lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='css'
              data-tooltip-id='css'
              data-tooltip-content='CSS3'
            />
            <Tooltip
              id='javascript'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={javascript}
              className='javascript lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='javascript'
              data-tooltip-id='javascript'
              data-tooltip-content='JavaScript'
            />
            <Tooltip
              id='Bootstrap'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={Bootstrap}
              className='Bootstrap lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='Bootstrap'
              data-tooltip-id='Bootstrap'
              data-tooltip-content='Bootstrap'
            />
            <Tooltip
              id='Tailwind'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={Tailwind}
              className='Tailwind lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='Tailwind'
              data-tooltip-id='Tailwind'
              data-tooltip-content='Tailwind CSS'
            />
            <Tooltip
              id='ReactJS'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={ReactJS}
              className='ReactJS lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='ReactJS'
              data-tooltip-id='ReactJS'
              data-tooltip-content='React JS'
            />
            <Tooltip
              id='firebase'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={firebase}
              className='firebase lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='firebase'
              data-tooltip-id='firebase'
              data-tooltip-content='Firebase'
            />
            <Tooltip id='mui' place='bottom' className='absolute text-gray1' />
            <img
              src={mui}
              className='mui lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt='mui'
              data-tooltip-id='mui'
              data-tooltip-content='Material-UI'
            />

            <h4 className='text md:-ml-7 -ml-4 title'>Frontend</h4>
          </div>
        </div>
        <div className='min-h-[400px] flex  items-center justify-center'>
          <div className=''>
            <Tooltip id='node' place='bottom' className='absolute text-gray1' />
            <img
              src={node}
              className='node lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
              data-tooltip-id='node'
              data-tooltip-content='Node Js'
            />
            <Tooltip
              id='exprees'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={exprees}
              className='exprees lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
              data-tooltip-id='exprees'
              data-tooltip-content='Express Js'
            />
            <Tooltip
              id='mongodb'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={mongodb}
              className='mongodb lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
              data-tooltip-id='mongodb'
              data-tooltip-content='MongoDB'
            />

            <Tooltip id='jwt' place='bottom' className='absolute text-gray1' />
            <img
              src={jwt}
              data-tooltip-id='jwt'
              data-tooltip-content='Json Web Token'
              className='jwt lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
            />
            <Tooltip
              id='typescript'
              place='bottom'
              className='absolute text-gray1'
            />
            <img
              src={typescript}
              className='typescript lg:h-[50px] md:h-[45px] h-[35px] absolute'
              alt=''
              data-tooltip-id='typescript'
              data-tooltip-content='Typescript'
            />
            <img
              src={redux}
              className='redux lg:h-[50px] md:h-[45px] h-[35px]  absolute'
              alt='redux'
              data-tooltip-id='redux'
              data-tooltip-content='Redux'
            />
            <Tooltip
              id='redux'
              place='bottom'
              className='absolute text-gray1'
            />
            <h4 className='text md:-ml-7 -ml-4 title'>Backend</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
