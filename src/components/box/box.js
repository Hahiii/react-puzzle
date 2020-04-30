import React from 'react';
import './box.scss';

function Box({ value, onClick, moveTo, imageUrl, onAnimationEnd, isSolved }) {
  return (
    <div
      id={value}
      className={`box ${!value ? 'empty' : ''} ${moveTo ? moveTo : ""} ${isSolved ? "salved" : ""}`}
      onClick={value ? ((event) => onClick(event.target)) : null}
      onAnimationEnd={() => onAnimationEnd()}
    >
      {parseInt(imageUrl) ? value : <img id={value} src={`/react-puzzle${imageUrl}`} alt={`part ${value}`} />}
    </div >
  )
}

export default Box;