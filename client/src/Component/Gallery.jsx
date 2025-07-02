import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', title: 'Luxury Living Room', category: 'villa' },
  { src: 'https://media.vrbo.com/lodging/100000000/99930000/99926500/99926452/07742dbf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill', title: 'Oceanfront Villa', category: 'villa' },
  { src: 'https://media.graphassets.com/kcqbCpucTbmzbM5yqelI', title: 'Urban Apartment', category: 'apartment' },
  { src: 'https://caboplatinum.com/wp-content/uploads/2020/04/international-luxury-villa.jpg', title: 'Private Getaway', category: 'villa' },
  { src: 'https://imageio.forbes.com/specials-images/imageserve/63b2de485b32f856ebb22f90/Modern-house-and-electric-car/960x0.jpg?format=jpg&width=960', title: 'Modern Exterior', category: 'modern' },
  { src: 'https://i.pinimg.com/736x/28/33/f4/2833f46538228a36159aede2ebbee18b.jpg', title: 'Countryside House', category: 'villa' },
  { src: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_737,h_414/q_auto,f_auto/4227-21/radius-koreatown-apartments-exterior', title: 'Downtown Apartment', category: 'apartment' },
  { src: 'https://niche905.com/wp-content/uploads/2017/05/Niche-905-768x512.jpg', title: 'High-Rise Apartment', category: 'apartment' }
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('villa')}>Villa</button>
        <button onClick={() => setFilter('apartment')}>Apartment</button>
        <button onClick={() => setFilter('modern')}>Modern</button>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setIndex(i)}
            data-aos="fade-up"
          >
            <img src={img.src} alt={img.title} loading="lazy" />
            <p>{img.title}</p>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filteredImages.map((img) => ({ src: img.src, title: img.title }))}
        render={{
          slide: ({ slide }) => (
            <div style={{ textAlign: 'center' }}>
              <img src={slide.src} alt={slide.title} style={{ width: '100%' }} />
              <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '1rem' }}>{slide.title}</p>
            </div>
          )
        }}
      />
    </section>
  );
};

export default Gallery;
