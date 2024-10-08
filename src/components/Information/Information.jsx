import React, { useState, useEffect } from 'react';
import './Information.scss';
import PhotoSlider from '../PhotoSlider/PhotoSlider';

function Information() {
  const [imageWidth, setImageWidth] = useState(window.innerWidth / 2);

  useEffect(() => {
    const handleResize = () => {
      let newWidth;
      if (window.innerWidth >= 1920) {
        newWidth = 1920 / 2;
      } else if (window.innerWidth >= 1140 && window.innerWidth < 1920) {
        newWidth = window.innerWidth / 2;
      } else {
        newWidth = window.innerWidth;
      }
      setImageWidth(newWidth);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleServicesClick = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="info">
      <div className="info__all">
        <h1 className="info__title">Производство и ремонт фургонов</h1>
        <a className="info__phone" href="tel:+79320108888">
          8 (932)-010-88-88
        </a>
        <div className="info__schedule">
          <span className="info__about">Работаем для вас:</span>
          <span className="info__text">Ежедневно с 9:00 до 21:00</span>
        </div>
        <div className="info__adress">
          <span className="info__about">По адресу:</span>
          <span className="info__text">г. Оренбург, ул. Лесозащитная, д. 20</span>
        </div>
        <button className="info__button-services" onClick={handleServicesClick}>
          <p className="info__button-text">Наши услуги</p>
        </button>
      </div>
      <div className="info__slides" style={{ width: imageWidth }}>
        <PhotoSlider />
      </div>
    </section>
  );
}

export default Information;
