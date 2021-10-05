// Import Swiper React components
import { SliderData } from '../../components/Slider/SliderData';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

import 'swiper/swiper-bundle.css';

const SwiperSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);

  return (
    <Swiper
      loop={true}
      navigation={true}
      pagination={true}
      centeredSlides={true}
      autoplay={{
        "delay": 2500,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
    >
      {SliderData.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="overlay"></div>
            <img src={slide.url} alt={slide.title} />
            <figcaption className="swiper-slider-container">
              <p>{slide.preface}</p>
              <h1>{slide.title}</h1>
              <h5>{slide.subtitle}</h5>
              <p className="hide-mobile">{slide.description}</p>
              <a href="https://github.com/brou0071" alt="GitHub brou0071" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dave-brousseau/" className="px-2" alt="LinkedIn Dave Brousseau" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a><br/>
              <Button className="mt-3" onClick={() => { console.log('clicked')}}>
                Download Resume
              </Button>
            </figcaption>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default SwiperSlider;