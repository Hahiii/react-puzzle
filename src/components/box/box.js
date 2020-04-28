import React from 'react';
import './box.scss';

function Box({ value, onClick, style, moveTo }) {
  return (
    <div className={`box ${!value ? 'empty' : ''} ${moveTo ? moveTo : ""}`} onClick={value ? ((event) => onClick(event.target)) : null}> {value}</div >
  )
}

export default Box;