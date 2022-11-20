import { faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import classes from './Size.module.css'

const Size = ({size, id, identifier}) => {
  return (
    <div id={id} className={id == 0 ? classes.size_button + ' size_button_' + identifier : classes.size_button_margin 
    + ' size_button_' + identifier} onClick={(e) => {document.querySelectorAll('.size_button_' + identifier)
    .forEach(x => x.id == e.currentTarget.id ? x.className = classes.size_button_selected + ' size_button_' + identifier :
     x.className =  classes.size_button_margin + ' size_button_' + identifier)}}>{size}</div>
  )
}

export default Size