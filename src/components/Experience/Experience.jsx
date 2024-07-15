import React from 'react';
import './Experience.scss';

function Experience() {
  return (
    <section className="experience">
      <p className="experience__about">ГЛАВНОЕ ПРЕИМУЩЕСТВО КОМПАНИИ</p>
      <div className="experience__container">
        <h2 className="experience__title">Работаем с 2017 года</h2>
        <div className="experience__right">
          <p className="experience__text">
            Наша компания гордится качеством выпускаемых фургонов. Мы стремимся к совершенству на
            каждом этапе производства.
          </p>
          <p className="experience__text">
            Используя только проверенные и качественные материалы, мы обеспечиваем долговечность и
            надежность наших изделий.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
