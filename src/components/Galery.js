
import './style.css';
import {Element} from 'react-scroll';

function Galery() {
  return (
    <Element name='galery'>
    <div className='galery' id='galery'>
     
        {/* <div className='about-image height100'>
          <img src={'./img/about-img.jpg'} className='height100'/>
        </div> */}

      <div className='flex-center height100'><img src={'./img/galery-big.jpg'} className='width100'/></div>
      
        <div className='container position-foto-box'>
          <div className='container-foto'>
            <div className='item-1'>
            <img src={'./img/Kaniv.jpeg'} className='width100'/>
            </div>
            <div className='item-2'>
            <img src={'./img/Синевир.jpg'} className='width100'/>
            </div>
            <div className='item-3'>
            <img src={'./img/Verhovuna.jpg'} className='width100'/>
            </div>
            <div className='item-4'>
            <img src={'./img/Dzvinlovski.jpg'} className='width100'/>
            </div>
          </div>
        </div>
        
    </div></Element>
  );
}

export default Galery;
