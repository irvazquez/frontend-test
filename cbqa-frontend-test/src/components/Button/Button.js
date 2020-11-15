import React from 'react';
import './styles.css';

export const Button = ({type = 'button', text = '', onClick, moreClass = ''}) => {
  return (
    <button
      className={`btn ${moreClass}`}
      type={type}
      onClick={onClick}
    >{text}</button>
  )
}
