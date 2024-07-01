import React from 'react';
import './Services.scss';
// import ArrowYellow from '../../images/aroow_yellow.svg';
import BreadVan from '../../images/bread_van.jpeg';
import IsothermalVan from '../../images/isothermal_van.jpeg';
import RepairVans from '../../images/repair_vans.png';
import VanGate from '../../images/van_gate.png';

function Services() {
  return (
    <section className="services">
      <h2 className="services__title">Услуги</h2>
      <ul className="services__container">
        <li className="services__card">
          <img className="card__img" src={BreadVan} alt="" />
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Производство хлебобулочных фургонов</p>
              <p className="description__number">01</p>
            </div>
            <button className="description__button">
            </button>
          </div>
        </li>
        <li className="services__card">
          <img className="card__img" src={IsothermalVan} alt="" />
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Производство изотермических фургонов</p>
              <p className="description__number">02</p>
            </div>
            <button className="description__button">
            </button>
          </div>
        </li>
        <li className="services__card">
          <img className="card__img" src={RepairVans} alt="" />
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Ремонт фургонов</p>
              <p className="description__number">03</p>
            </div>
            <button className="description__button">
            </button>
          </div>
        </li>
        <li className="services__card">
          <img className="card__img" src={VanGate} alt="" />
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Изготовление новых ворот</p>
              <p className="description__number">04</p>
            </div>
            <button className="description__button">
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Services;
