import './style.css';
import './style@media.css';
import { Element } from 'react-scroll';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to('.anim-rigth-about', {
      opacity: 1,
      translateX: '18%',
      duration: 3,
      scrollTrigger: {
        trigger: '.anim-rigth-about'
      }
    });
    gsap.to('.anim-left-about', {
      opacity: 1,
      translateX: '-5%',
      duration: 3,
      scrollTrigger: {
        trigger: '.anim-left-about'
      }
    });
  }, []);


  return (
    <Element name='about'>
      <div className='about' id='about'>
        <div className='flex-between height100 main_wow'>
          <div className='about-content margin-l7 anim-rigth-about'>
            <h2>Briefly about<span>the main thing</span></h2>
            <p>The national beauty of the Ukrainian region is broad, powerful, beautiful forests.
              They occupy about 15.9% of the territory of the state and are formed
              by more than 30 types of tree species, among which conifers predominate.</p>
            <p>Ukraine ranks 9th in Europe in terms of forest area and 7th in terms of wood reserves.
              Most broad-leaved forests are planted by humans, so they need more attention and protection.
              In autumn, 86 million tree seedlings will be planted in the state forests of Ukraine.
            </p>
          </div>
          <div className='about-image height100'>
            <img src={'./img/about-img.jpg'} className='height100' alt='forest' />
            <img src={'./img/karpaty.jpg'} className='img-anim-1 anim-left-about' alt='forest with flowers' />
            <img src={'./img/cunevir-karpatu.jpg'} className='img-anim-2 anim-left-about' alt='forest with mountains' />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
