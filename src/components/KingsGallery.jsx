import React from 'react';
import Slider from 'react-slick';
import './KingsGallery.css';

import king1 from '../images/king1.jpg';
import king2 from '../images/king2.jpg';
import king3 from '../images/king3.jpg';
import king4 from '../images/king4.jpg';
import king5 from '../images/king5.jpg';
import king6 from '../images/king6.jpg';
import king7 from '../images/king7.jpg';

const kings = [
  { name: 'الملك عبدالعزيز', image: king1, honor: 'رحمه الله' },
  { name: 'الملك سعود', image: king2, honor: 'رحمه الله' },
  { name: 'الملك فيصل', image: king3, honor: 'رحمه الله' },
  { name: 'الملك خالد', image: king4, honor: 'رحمه الله' },
  { name: 'الملك فهد', image: king5, honor: 'رحمه الله' },
  { name: 'الملك عبدالله', image: king6, honor: 'رحمه الله' },
  { name: 'الملك سلمان', image: king7, honor: 'حفظه الله' },
];

const KingsGallery = () => {
  const settings = {
    dots: true,  // فعل النقاط
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    rtl: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title"> حكام المملكة العربية السعودية</h2>
      <div className="gallery-carousel">
        <Slider {...settings}>
          {kings.map((king, index) => (
            <div className="gallery-card" key={index}>
              <img src={king.image} alt={king.name} className="king-img" />
              <p className="king-name">
                {king.name} <span className="honor-text">{king.honor}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default KingsGallery;
