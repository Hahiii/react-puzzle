import React from 'react';
import './box.scss';

function Box({ value, onClick, moveTo, imageUrl }) {
  return (
    <div
      id={value}
      className={`box ${!value ? 'empty' : ''} ${moveTo ? moveTo : ""}`}
      onClick={value ? ((event) => onClick(event.target)) : null}>
      {parseInt(imageUrl) ? value : <img id={value} src={`${imageUrl}`} alt={`part ${value}`} />}
    </div >
  )
}

export default Box;