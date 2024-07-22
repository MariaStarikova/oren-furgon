import React from 'react';
import './Header.scss';
import Logo from '../../images/logo.svg';
import IconPhone from '../../images/icon__phone.svg';
import IconArrow from '../../images/icon__arrow.svg';

function Header() {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+79320108888';
  };

  const handleServicesClick = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <img className="header__logo" alt="" src={Logo} />
          <a className="header__link header__link-phone" href="tel:+79320108888">
            <img className="header__icon" alt="" src={IconPhone} />
            <h2 className="header__subtitle">+7 (932) 010-88-88</h2>
          </a>
        </div>
        <div className="header__info">
          <button className="header__button-popup" onClick={handleServicesClick}>
            <h2 className="header__subtitle">Услуги</h2>
            <img className="header__arrow" alt="" src={IconArrow} />
          </button>
          <a className="header__link" href="#contacts">
            Контакты
          </a>
          <button className="header__button-phone" onClick={handlePhoneClick}>
            <p className="header__subtitle_btn">Записаться</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
