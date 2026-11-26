import { useState } from 'react';
import { Element } from 'react-scroll';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <Element name='contact'>
      <section className='section contact' id='contact'>
        <div className='wrap'>
          <div className='contact-card reveal'>
            <div className='contact-art'>
              <img src={'./img/Lovepik_com-450090283-Tree Vector.png'} alt='tree' />
            </div>
            <div>
              <span className='eyebrow'>Contact us</span>
              <h3>Newsletter sign up</h3>
              <p>Write your mail and we will definitely answer you,
                and you will also receive the latest news - the first!</p>
              <form className='contact-form' onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='Your email' aria-label='Your email' required />
                <button type='submit'>SEND</button>
              </form>
              {sent && <p className='contact-thanks' role='status'>Thank you! We will be in touch.</p>}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
