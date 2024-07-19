import React, { useState, useEffect } from 'react';
import './Information.scss';
import PhotoSlider from '../PhotoSlider/PhotoSlider';

function Information() {
  const [imageWidth, setImageWidth] = useState(window.innerWidth / 2);

  useEffect(() => {
    const handleResize = () => {
      setImageWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    // Устанавливаем начальное значение ширины изображения
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <a className="info__link" href="#services">
          <button className="info__button-services">
            <p className="info__button-text">Наши услуги</p>
          </button>
        </a>
      </div>
      <div className="info__slides" style={{ width: imageWidth }}>
        <PhotoSlider />
      </div>
    </section>
  );
}

export default Information;
