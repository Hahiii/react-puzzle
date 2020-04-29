import React from 'react';
import './switcher.scss';

import pikachu from '../../images/pikachu.png';
import bob from '../../images/bob.png';
import numbers from '../../images/numbers.png';


function ImageSwitcher() {
  const switchArray = [numbers, pikachu, bob];

  return (
    <div className="switcher">
      {switchArray.map((item) => {
        return (
          <img id={`${item}`} className="images" src={item} alt={`image of ${item}`} />
        )
      })}
    </div >
  )
}

export default ImageSwitcher;