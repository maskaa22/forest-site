
import './style.css';
import { GiWoodPile } from "react-icons/gi";
import { GiLindenLeaf } from "react-icons/gi";
import { GiCoins } from "react-icons/gi";
import {Element} from 'react-scroll';

function News() {
  return (
    <Element name='news'>
    <div className='news' id='news'>
      
      <div className='container padding7'>
        <div className='container-news '>
          <div className='news-item'>
          <div className='flex-center news-icon'><GiWoodPile className='icon-color-broun'/></div>
          <h4 className='news-h4'>Protest</h4>
          <p className='news-p'>A protest against deforestation is taking place</p>
          </div>
          <div className='news-item'>
          <div className='flex-center news-icon'><GiLindenLeaf /></div>
          <h4 className='news-h4'>Action</h4>
          <p className='news-p'>The campaign of planting new trees has started</p>
          </div>
          <div className='news-item'>
          <div className='flex-center news-icon'><GiCoins className='icon-color-yellow'/></div>
          <h4 className='news-h4'>Offer</h4>
            <p className='news-p'>The collection for the purchase of seeds is open</p>

          </div>
        </div>
      </div>
    </div></Element>
  );
}

export default News;
