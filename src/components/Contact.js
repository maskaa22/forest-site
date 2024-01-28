import './style.css';
import './style@media.css';
import { Element } from 'react-scroll';

function Contact() {
  return (
    <Element name='contact'>
      <div className='contact' id='contact'>
        <div className='container'>
          <div className='flex-between-contact'>
            <div className='contact-block-info'>
              <img src={'./img/Lovepik_com-450090283-Tree Vector.png'} className='height100' alt='tree' />
            </div>
            <div className='contact-block-send'>
              <h3 className='contact-h3'>NEWSLETTER SIGN UP</h3>
              <p className='contact-p'>Write your mail and we will definitely answer you,
                and you will also receive the latest news - the first!</p>
              <div className='flex-center'>
                <input className='contact-input' />
                <button className='contact-button'>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
