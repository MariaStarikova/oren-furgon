import React, { useState } from 'react';
import './Reviews.scss';
import { reviewsPhotos } from '../../constants/Photos.js';

function Reviews() {
  const [currentReviewsIndex, setCurrentReviewsIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentReviewsIndex === 0;
    const newIndex = isFirstSlide ? reviewsPhotos.length - 1 : currentReviewsIndex - 1;
    setCurrentReviewsIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentReviewsIndex === reviewsPhotos.length - 1;
    const newIndex = isLastSlide ? 0 : currentReviewsIndex + 1;
    setCurrentReviewsIndex(newIndex);
  };

  return (
    <section className="reviews">
      <div className="reviews__top">
        <h2 className="reviews__title">Отзывы о нашей работе</h2>
        <p className="reviews__estimation">5.0</p>
        <p className="reviews__subtitle">СРЕДНЯЯ ОЦЕНКА</p>
      </div>
      <div className="reviews__bottom">
        <img className="reviews__img" src={reviewsPhotos[currentReviewsIndex]} alt="" />
        <div className="reviews__buttons">
          <button className="reviews__button" onClick={goToPrevious}></button>
          <button className="reviews__button reviews__button_right" onClick={goToNext}></button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
