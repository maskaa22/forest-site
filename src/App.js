import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import './sections.css';
import About from './components/About';
import Contact from './components/Contact';
import Benefit from './components/Benefit';
import Galery from './components/Galery';
import Header from './components/Header';
import News from './components/News';
import Foter from './components/Foter';

function App() {
  // Reveal sections as they scroll into view
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax: images drift at different speeds while scrolling
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const drift = (selector, yPercent) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.to(el, {
            yPercent,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          });
        });
      };
      drift('.collage__a', -14);
      drift('.collage__b', 12);
      drift('.benefit-visual__chip--green', -16);
      drift('.benefit-visual__chip--yellow', 14);
    });
    return () => mm.revert();
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress');
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main className="site-main">
        <About />
        <Galery />
        <Benefit />
        <News />
        <Contact />
      </main>
      <Foter />
    </div>
  );
}

export default App;
