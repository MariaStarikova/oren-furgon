import React from 'react';
import './Brand.scss';
import IconStaff from '../../images/icon_staff.svg';
import IconWarranty from '../../images/icon_warranty.svg';
import IconUsers from '../../images/icon_customers.svg';
import IconEquipment from '../../images/icon_equipment.svg';

function Brand() {
  return (
    <section className="brand">
      <div className="brand__left">
        <h2 className="brand__title">
          Обратившись к нам, вы попадете в надежные руки специалистов, мы уделяем особое внимание
          каждой детали.
        </h2>
        <p className="brand__subtitle">Каждый фургон проходит строгий контроль качества, что обеспечивает его надежность и долговечность. Мы уверены в каждом нашем изделии и стремимся предложить вам только лучшее.</p>
      </div>
      <div className="brand__right">
        <div className="brand__card">
          <img className="card__image" src={IconWarranty} alt="" />
          <p className="card__text">Гарантия работы</p>
        </div>
        <div className="brand__card">
          <img className="card__image" src={IconStaff} alt="" />
          <p className="card__text">Квалифицированные сотрудники</p>
        </div>
        <div className="brand__card">
          <img className="card__image" src={IconUsers} alt="" />
          <p className="card__text">Довольные клиенты</p>
        </div>
        <div className="brand__card">
          <img className="card__image" src={IconEquipment} alt="" />
          <p className="card__text">Современное оборудование</p>
        </div>
      </div>
    </section>
  );
}

export default Brand;
