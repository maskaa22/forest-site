import { GiWoodPile, GiLindenLeaf, GiCoins } from 'react-icons/gi';
import { Element } from 'react-scroll';

const NEWS = [
  { Icon: GiWoodPile, tone: 'bark', title: 'Protest', text: 'A protest against deforestation is taking place' },
  { Icon: GiLindenLeaf, tone: '', title: 'Action', text: 'The campaign of planting new trees has started' },
  { Icon: GiCoins, tone: 'sun', title: 'Offer', text: 'The collection for the purchase of seeds is open' },
];

function News() {
  return (
    <Element name='news'>
      <section className='section news' id='news'>
        <div className='wrap'>
          <div className='section-head reveal'>
            <span className='eyebrow'>News</span>
            <h2 className='section-title'>What's <em>happening</em> now</h2>
          </div>
          <div className='news-grid'>
            {NEWS.map(({ Icon, tone, title, text }, i) => (
              <article className='news-card reveal' key={title} style={{ '--delay': `${i * 0.12}s` }}>
                <div className={`news-card__icon ${tone ? `news-card__icon--${tone}` : ''}`}><Icon /></div>
                <div className='news-card__body'>
                  <div className='news-card__tag'>Update</div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default News;
