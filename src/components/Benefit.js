import './style.css';
import './style@media.css';
import { Element } from 'react-scroll';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Benefit() {

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to('.anim-rigth-benefit', {
      opacity: 1,
      translateX: '18%',
      duration: 3,
      scrollTrigger: {
        trigger: '.anim-rigth-benefit'
      }
    });
    gsap.to('.anim-left-benefit', {
      opacity: 1,
      translateX: '-17%',
      duration: 3,
      scrollTrigger: {
        trigger: '.anim-left-benefit'
      }
    });
  }, []);

  return (
    <Element name='benefit'>
      <div className='benefit' id='benefit'>
        <div className='flex-between height100'>
          <div className='about-image height100 benefit-image'>
            <img src={'./img/benefit-img.jpg'} className='height100 benefit-img-left' alt='mountains' />
            <img src={'./img/green-forest.jpg'} className='benefit-img-anim-1 anim-rigth-benefit' alt='green forest' />
            <img src={'./img/yellow-forest.jpg'} className='benefit-img-anim-2 anim-rigth-benefit' alt='yellow forest' />
          </div>
          <div className='about-content margin-r7 anim-left-benefit benefit-m-l-media about-content-benefit'>
            <h2 className='benefit-margin-l'>Benefits of forests </h2>
            <p className='benefit-margin-l'>The forest strengthens the body and soul, provides mushrooms,
              berries and medicinal plants, provides firewood,
              we find inspiration in it, engaging in sports or forest tourism.</p>
            <p className='benefit-margin-l'>They cool our cities and fight floods, as well as make rain and prevent climate change.
              They clean dirty air and soil, feed and heal us.
              They also provide resources for making things and create jobs. They are indispensable for human life.
            </p>
            <p className='benefit-margin-l'>Therefore, their preservation and renewal is one of
              the main issues for the survival of humanity as a whole.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Benefit;
