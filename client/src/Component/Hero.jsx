import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: 'Bungalow',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas.'
  },
  {
    image: 'https://www.mues.us/wp-content/uploads/2021/03/exterior_new-scaled-e1616805070908-2048x1024.jpg',
    title: 'Modern Apartment',
    text: 'Live where you love. Comfort, luxury, and style.'
  },
  {
    image: 'https://media.vrbo.com/lodging/100000000/99930000/99926500/99926452/07742dbf.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    title: 'Modern House',
    text: 'Charming homes in peaceful neighborhoods.'
  }
];

const Hero = () => {
  return (
    <section className="hero-carousel">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="swiper-container"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-info">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
