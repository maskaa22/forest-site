import { MdOutlineCopyright } from 'react-icons/md';
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io';
import { RiLinkedinBoxLine } from 'react-icons/ri';

function Foter() {
  return (
    <footer className='site-footer'>
      <div className='wrap footer-inner'>
        <div className='footer-brand'>
          <img src={'./logo11.png'} alt='LOGO' />
          <span>Copyright <MdOutlineCopyright /> 2024 by Mariia Skydan</span>
        </div>
        <div className='footer-social'>
          <a href='https://www.linkedin.com/in/mariia-skydan/' aria-label='LinkedIn'><RiLinkedinBoxLine /></a>
          <a href='https://github.com/maskaa22' aria-label='GitHub'><IoLogoGithub /></a>
          <a href='https://www.instagram.com/mariigorevna656/' aria-label='Instagram'><IoLogoInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Foter;
