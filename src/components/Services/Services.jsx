import React, { useState } from 'react';
import './Services.scss';
// import ArrowYellow from '../../images/aroow_yellow.svg';
import BreadVan1 from '../../images/bread_van.jpg';
import BreadVan2 from '../../images/bread_van_2.jpg';
import BreadVan3 from '../../images/bread_van_3.jpg';
import BreadVan4 from '../../images/bread_van_4.jpg';
import IsothermalVan1 from '../../images/isothermal_van_1.jpg';
import IsothermalVan2 from '../../images/isothermal_van_2.jpg';
import IsothermalVan3 from '../../images/isothermal_van_3.jpg';
// import RepairVans from '../../images/repair_vans.png';
import VanGate1 from '../../images/van_gate_1.jpg';
import VanGate2 from '../../images/van_gate_2.jpg';

function Services() {
  const breadVans = [ 
    BreadVan1,
    BreadVan2,
    BreadVan3,
    BreadVan4
  ];

  const vanGates = [
    VanGate1,
    VanGate2
  ];

  const isothermalVans = [
    IsothermalVan1,
    IsothermalVan2,
    IsothermalVan3
  ];

  const [currentBreadIndex, setCurrentBreadIndex] = useState(0);
  const [currentIsothermalIndex, setCurrentIsothermalIndex] = useState(0);
  const [currentGateIndex, setCurrentGateIndex] = useState(0);

  const goToNext = (array, currentIndex, setCurrentIndex) => {
    const isLastSlide = currentIndex === array.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="services" id='services'>
      <h2 className="services__title">Услуги</h2>
      <ul className="services__container">
        <li className="services__card">
          <div className="card__top">
            <img className="card__img" src={breadVans[currentBreadIndex]} alt="" />
          </div>
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Производство хлебобулочных фургонов</p>
              <p className="description__number">01</p>
            </div>
            <button className="description__button" onClick={() => goToNext(breadVans, currentBreadIndex, setCurrentBreadIndex)}></button>
          </div>
        </li>
        <li className="services__card">
          <div className="card__top">
            <img className="card__img" src={isothermalVans[currentIsothermalIndex]} alt="" />
          </div>
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Производство изотермических фургонов</p>
              <p className="description__number">02</p>
            </div>
            <button className="description__button" onClick={() => goToNext(isothermalVans, currentIsothermalIndex, setCurrentIsothermalIndex)}></button>
          </div>
        </li>
        {/* <li className="services__card">
          <div className="card__top">
            <img className="card__img" src={RepairVans} alt="" />
          </div>
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Ремонт фургонов</p>
              <p className="description__number">03</p>
            </div>
            <button className="description__button"></button>
          </div>
        </li> */}
        <li className="services__card">
          <div className="card__top">
            <img className="card__img" src={vanGates[currentGateIndex]} alt="" />
          </div>
          <div className="card__description">
            <div className="description__left">
              <p className="description__text">Изготовление новых ворот, ремонт</p>
              <p className="description__number">03</p>
            </div>
            <button className="description__button" onClick={() => goToNext(vanGates, currentGateIndex, setCurrentGateIndex)}></button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Services;
