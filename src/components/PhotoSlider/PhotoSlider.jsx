import React, { useState } from 'react';
import './PhotoSlider.scss';
import BigArrow from '../../images/icon_arrow_big.svg';
import {photos} from '../../constants/Photos.js';

function PhotoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNext = () => {
        const isLastSlide = currentIndex === photos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

  return (
    <div className="info__slides-container">
      <div className="info__array">
        <img className="info__photo" src={photos[currentIndex]} alt="" />
      </div>
      <div className="info__slider">
        <div className="info__buttons">
          <button className="info__button" onClick={goToPrevious}>
            <img className="info__arrow info__arrow_left" src={BigArrow} alt="" />
          </button>
          <button className="info__button" onClick={goToNext}>
            <img className="info__arrow" src={BigArrow} alt="" />
          </button>
        </div>
        <p className="info__quantity-photo">{currentIndex + 1}/4</p>
      </div>
    </div>
  );
}

export default PhotoSlider;
