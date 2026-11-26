import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';

// Counts from 0 to `to` when the number scrolls into view
function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const format = (v) => v.toFixed(decimals) + suffix;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.textContent = format(to);
      return;
    }
    el.textContent = format(0);
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(to * eased);
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, decimals, suffix]);

  return <span ref={ref} />;
}

function About() {
  return (
    <Element name='about'>
      <section className='section about' id='about'>
        <div className='wrap about-grid'>
          <div className='about-text reveal'>
            <span className='eyebrow'>About</span>
            <h2 className='section-title'>Briefly about <em>the main thing</em></h2>
            <p>The national beauty of the Ukrainian region is broad, powerful, beautiful forests.
              They occupy about 15.9% of the territory of the state and are formed
              by more than 30 types of tree species, among which conifers predominate.</p>
            <p>Ukraine ranks 9th in Europe in terms of forest area and 7th in terms of wood reserves.
              Most broad-leaved forests are planted by humans, so they need more attention and protection.
              In autumn, 86 million tree seedlings will be planted in the state forests of Ukraine.
            </p>
            <div className='stats'>
              <div className='stat'><strong><CountUp to={15.9} decimals={1} suffix='%' /></strong><span>of the country is forest</span></div>
              <div className='stat'><strong><CountUp to={30} suffix='+' /></strong><span>tree species</span></div>
              <div className='stat'><strong><CountUp to={86} suffix='M' /></strong><span>seedlings this autumn</span></div>
            </div>
          </div>
          <div className='collage reveal' style={{ '--delay': '.15s' }}>
            <img className='collage__main' src={'./img/about-img.jpg'} alt='forest' />
            <img className='collage__a' src={'./img/karpaty.jpg'} alt='forest with flowers' />
            <img className='collage__b' src={'./img/cunevir-karpatu.jpg'} alt='forest with mountains' />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
