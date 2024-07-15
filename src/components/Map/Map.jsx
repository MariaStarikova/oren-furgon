import React from 'react';
import './Map.scss';
import MapImg from '../../images/map.svg';
import Logo from '../../images/logo_white.svg';
import Geometric_1 from '../../images/geometric_blocks_background .svg';
import Geometric_2 from '../../images/geometric_blocks_background_2.svg';
import Background from '../../images/rectangle_1.svg';
import BackgroundYellow from '../../images/rectangle_2.svg';

function Map() {
  return (
    <section className="map">
      <div className="map__container">
        <img src={MapImg} alt="" className="map__geography" />
        <div className="map__right">
          <img src={Logo} alt="" className="map__logo"  />
          <h2 className="map__title">География поставок</h2>
        </div>
        <img src={Geometric_1} alt='' className='map__geometric-1'/>
        <img src={Geometric_2} alt='' className='map__geometric-2'/>
        <img src={Background} alt='' className='map__background'/>
        <img src={BackgroundYellow} alt='' className='map__background-yellow'/>
      </div>
    </section>
  );
}

export default Map;
