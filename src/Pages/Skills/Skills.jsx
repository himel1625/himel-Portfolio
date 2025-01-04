import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import Title from '../../Components/Title/Title';

const skills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 size={40} />, color: '#FF5733' },
  { id: 2, name: 'CSS', icon: <FaCss3Alt size={40} />, color: '#00acc1' },
  {
    id: 3,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={40} />,
    color: '#38BDF8',
  },
  {
    id: 4,
    name: 'JavaScript',
    icon: <SiJavascript size={40} />,
    color: '#F7DF1E',
  },
  { id: 5, name: 'React JS', icon: <FaReact size={40} />, color: '#61DAFB' },
  { id: 6, name: 'Node JS', icon: <FaNodeJs size={40} />, color: '#68A063' },
  { id: 7, name: 'Express JS', icon: <SiExpress size={40} /> },
  { id: 8, name: 'MongoDB', icon: <SiMongodb size={40} />, color: '#47A248' },
  {
    id: 9,
    name: 'Redux Toolkit',
    icon: <SiRedux size={40} />,
    color: '#764ABC',
  },
  { id: 10, name: 'JWT' },
  {
    id: 11,
    name: 'Bootstrap',
    icon: <FaBootstrap size={40} />,
    color: '#7952B3',
  },
  { id: 12, name: 'Postman', icon: <SiPostman size={40} />, color: '#FF6C37' },
  {
    id: 13,
    name: 'Firebase',
    icon: <IoLogoFirebase size={40} />,
    color: '#F7DF1E',
  },
];

const Skills = () => {
  return (
    <div className='mt-20'>
      <Title Header='My Skills' />
      <div className='mt-20 mb-20'>
        <Marquee gradient={false} speed={20}>
          {skills.map(skill => (
            <div
              key={skill.id}
              className='flex items-center justify-center space-x-4 px-6 py-2 hover:scale-105 transition duration-300'
              style={{ backgroundColor: skill.color }}
            >
              {skill.icon}
              <span className='text-white font-bold'>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
