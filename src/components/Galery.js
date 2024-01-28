import './style.css';
import './style@media.css';
import { Element } from 'react-scroll';

function Galery() {

  return (
    <Element name='galery'>
      <div className='galery' id='galery'>
        <div className='flex-center height100'><img src={'./img/galery-big.jpg'} className='width100 b-i-media-none' alt='baground' /></div>
        <div className='container position-foto-box'>
          <div className='container-foto'>
            <div className='item-1 section'>
              <div className='image'><img src={'./img/Kaniv.jpeg'} className='width100' alt='Kaniv' /> </div>
              <div className='text'>
                <h3 className='h3'>Olena Studio</h3>
              </div>
            </div>
            <div className='item-2  section-top'>
              <div className='image'><img src={'./img/Синевир.jpg'} className='width100' alt='Синевир' /> </div>
              <div className='text text-top'>
                <h3 className='h3'>Olena Studio</h3>
              </div>
            </div>
            <div className='item-3 section'>
              <img src={'./img/Verhovuna.jpg'} className='width100' alt='Verhovuna' />
              <div className='text'>
                <h3 className='h3'>Olena Studio</h3>
              </div>
            </div>
            <div className='item-4 section'>
              <img src={'./img/Dzvinlovski.jpg'} className='width100' alt='Dzvinlovski' />
              <div className='text'>
                <h3 className='h3'>Olena Studio</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Galery;
