import React from 'react';
import './Experience.scss';

function Experience() {
  return (
    <section className="experience">
        <p className="experience__about">ГЛАВНОЕ ПРЕИМУЩЕСТВО КОМПАНИИ</p>
        <div className="experience__container">
            <h2 className="experience__title">Работаем с 2017 года</h2>
            <span className="experience__text">Тут текст про то, какие мы молодцы, постоянно работаем над повышением качества и что у нас высокий контроль качества</span>
        </div>
    </section>
  );
}

export default Experience;
