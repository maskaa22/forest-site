import './style.css';
import './style@media.css';
import { MdOutlineCopyright } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinBoxLine } from "react-icons/ri";

function Foter() {
  return (
    <div className='foter'>
      <div className='container'>
        <div className='flex-between-foter footer-h-100'>
          <div className='left-foter'>
            <img className='foter-logo' src={'./logo11.png'} alt='LOGO' />
            <div>Copyright <MdOutlineCopyright /> 2024 by Mariia Skydan</div>
          </div>
          <div className='rigth-foter'>
            <RiLinkedinBoxLine onClick={() => window.location.assign('https://www.linkedin.com/in/mariia-skydan/')} />
            <IoLogoGithub onClick={() => window.location.assign('https://github.com/maskaa22')} />
            <IoLogoInstagram onClick={() => window.location.assign('https://www.instagram.com/mariigorevna656/')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foter;
