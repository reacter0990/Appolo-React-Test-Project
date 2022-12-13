import React from 'react';

import classes from './Size.module.css'

const Size = ({size, id, baseSize}) => {
  return (
    <div id={id} className={id == baseSize ? classes.size_button  
    : classes.size_button_margin}>{size}</div>
  )
}

export default Size