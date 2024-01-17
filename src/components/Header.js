
import './style-header.css';

function Header() {

  window.onload = function() {
    document.addEventListener('mousemove', e => {
      Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
      })
    })
 };

  return (
    <div >
      <img className='logo' src={'./logo11.png'} alt='header 3D'/>
      <section className='layers'>
        <div className='layers__container'>
          <div className='layers__item layer-1 img7'></div>
          <div className='layers__item layer-2 img6'></div>
          
          <div className='layers__item layer-5 img5'></div>
          <div className='layers__item layer-6 img4'></div>
          <div className='layers__item layer-7 img3'></div>
          
          <div className='layers__item layer-8 img2'></div>
          <div className='layers__item layer-9 img1'></div>
          <div className='layers__item layer-3'>
            <div className='hero-contant'>
              <h1>Natural Forest <span>HTML / CSS</span></h1>
              <div className='hero-contant__p'>Creating a beautiful 3D website with a 'lens effect'</div>
              <button className='button-start'>Start Learning</button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Header;
