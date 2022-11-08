import './Hero.css';

import HeroImg from '../../assets/004.jpeg';

const Hero = () => {
  return (
    <section className='Hero'>
      <div
        className='Hero-img'
        style={{
          background: `url(${HeroImg}) no-repeat center center/cover`,
        }}
      ></div>
    </section>
  );
};

export default Hero;
