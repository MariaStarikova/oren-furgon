import React from 'react';
import './Information.scss';
import Photo from '../../images/photo.jpeg';
import BigArrow from '../../images/icon_arrow_big.svg';
// import Avtoliga from '../../images/avtoliga.png';

function Information() {
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
        <a className="info__link" href="#ксписку">
        <button className="info__button-services">
          <p className="info__button-text">Наши услуги</p>
          </button>
          </a>
      </div>
      <div className="info__slides">
        <div className="info__slides-container">
        <div className="info__array">
          <img className="info__photo" src={Photo} alt="" />
        </div>
        <div className="info__slider">
          <div className="info__buttons">
            <button className="info__button">
              <img className="info__arrow info__arrow_left" src={BigArrow} alt="" />
            </button>
            <button className="info__button">
              <img className="info__arrow" src={BigArrow} alt="" />
            </button>
          </div>
          <p className="info__quantity-photo">1/8</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
