import { Element } from 'react-scroll';

const BENEFITS = [
  {
    title: 'For body and soul',
    text: `The forest strengthens the body and soul, provides mushrooms,
      berries and medicinal plants, provides firewood,
      we find inspiration in it, engaging in sports or forest tourism.`,
  },
  {
    title: 'For cities and climate',
    text: `They cool our cities and fight floods, as well as make rain and prevent climate change.
      They clean dirty air and soil, feed and heal us.
      They also provide resources for making things and create jobs. They are indispensable for human life.`,
  },
  {
    title: 'For the future',
    text: `Therefore, their preservation and renewal is one of
      the main issues for the survival of humanity as a whole.`,
  },
];

function Benefit() {
  return (
    <Element name='benefit'>
      <section className='section benefit' id='benefit'>
        <div className='wrap benefit-grid'>
          <div className='benefit-visual reveal'>
            <img className='benefit-visual__main' src={'./img/benefit-img.jpg'} alt='mountains' />
            <img className='benefit-visual__chip benefit-visual__chip--green' src={'./img/green-forest.jpg'} alt='green forest' />
            <img className='benefit-visual__chip benefit-visual__chip--yellow' src={'./img/yellow-forest.jpg'} alt='yellow forest' />
          </div>
          <div className='reveal' style={{ '--delay': '.15s' }}>
            <span className='eyebrow'>Benefit</span>
            <h2 className='section-title'>Benefits of <em>forests</em></h2>
            <div className='benefit-list'>
              {BENEFITS.map((item, i) => (
                <div className='benefit-item reveal reveal--right' key={item.title} style={{ '--delay': `${0.2 + i * 0.15}s` }}>
                  <div className='benefit-item__num'>{i + 1}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Benefit;
