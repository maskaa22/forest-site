import { Element } from 'react-scroll';

const PHOTOS = [
  { src: './img/Kaniv.jpeg', title: 'Kaniv', className: 'gallery-card--tall' },
  { src: './img/Синевир.jpg', title: 'Synevyr', className: 'gallery-card--wide' },
  { src: './img/Verhovuna.jpg', title: 'Verkhovyna', className: '' },
  { src: './img/Dzvinlovski.jpg', title: 'Dzvinlovski', className: '' },
];

function Galery() {
  return (
    <Element name='galery'>
      <section className='section gallery' id='galery'>
        <div className='wrap'>
          <div className='section-head reveal'>
            <span className='eyebrow'>Gallery</span>
            <h2 className='section-title'>Places worth <em>protecting</em></h2>
          </div>
          <div className='gallery-grid'>
            {PHOTOS.map((photo, i) => (
              <figure
                key={photo.title}
                className={`gallery-card reveal ${photo.className}`}
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <img src={photo.src} alt={photo.title} loading='lazy' />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Galery;
