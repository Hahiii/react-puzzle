import React from 'react';
import './box.scss';

function Box({ value, onClick }) {
  return (
    <div className={`box ${!value && 'empty'}`} onClick={value ? ((event) => onClick(event.target)) : null}> {value}</div >
  )
}

export default Box;