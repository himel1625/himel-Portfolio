import Title from '../../Components/Title/Title';

const AboutMe = () => {
  return (
    <section className='mt-28 px-6 sm:px-10 lg:px-20 xl:px-32'>
      <Title Header='About Me' />
      <div className='mt-10   w-full  rounded-lg p-6 container'>
        <p className='text-black font-medium text-justify text-base sm:text-lg lg:text-xl leading-relaxed '>
          <span className='block font-medium text-lg sm:text-xl lg:text-2xl text-primary mb-4'>
            Assalamu Alaikum!
          </span>
          I am <span className='font-bold'>Himel Mia</span>, a dedicated and
          passionate web developer with a lifelong fascination for technology.
          Despite not pursuing formal studies in computer science, my curiosity
          and determination led me to embark on a self-taught journey into web
          development in December 2023. Using resources like Google, YouTube,
          and the "Complete Web Development Course with Jhankar Mahbub" by
          Programming Hero, I have built a strong foundation in modern web
          technologies.
          <br />
          <br />I specialize in front-end development, with expertise in{' '}
          <span className='font-bold'>HTML</span>,
          <span className='font-bold'> CSS</span>,{' '}
          <span className='font-bold'>JavaScript</span>,
          <span className='font-bold'> React</span>, and{' '}
          <span className='font-bold'>Next.js</span>. Additionally, I have
          foundational knowledge of back-end technologies, including
          <span className='font-bold'> Node.js</span>,{' '}
          <span className='font-bold'>Express.js</span>, and{' '}
          <span className='font-bold'>MongoDB</span>, enabling me to build and
          manage server-side functionalities and databases. I am actively honing
          my backend skills to achieve full-stack proficiency.
          <br />
          <br />
          My career aspiration is to contribute to the tech industry by applying
          my skills to innovative, real-world projects that deliver impactful
          solutions. I thrive in environments that value creativity,
          collaboration, and a commitment to excellence, and I am eager to grow
          as part of a forward-thinking team.
          <br />
          <br />
          With a strong work ethic and a passion for continuous learning, I am
          confident in my ability to make meaningful contributions to the
          dynamic and ever-evolving field of technology.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
