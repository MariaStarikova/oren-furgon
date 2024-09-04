import React from 'react';
import './Footer.scss';

function Footer() {
  //Звонок на номер
  // const handlePhoneClick = () => {
  //   window.location.href = 'tel:+79320108888';
  // };

  // Отправка сообщения на WhatsApp
    const handleWhatsAppClick = () => {
      const phoneNumber = '89320108888';
      const message = 'Здравствуйте, хочу получить консультацию по изготовлению фургона';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <p className="footer__title">Наш адрес</p>
          <p className="footer__adress">г. Оренбург, ул. Лесозащитная, д. 20</p>
        </div>
        <button className="footer__button-phone" onClick={handleWhatsAppClick}>
          <p className="footer__subtitle_btn">Записаться</p>
        </button>
      </div>
      <p className="footer__text">&#169; 2017-2024. ООО "ОренФургон"</p>
    </footer>
  );
}

export default Footer;
