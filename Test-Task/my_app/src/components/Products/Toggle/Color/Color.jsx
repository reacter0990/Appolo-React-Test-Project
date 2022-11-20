import React from 'react'

import classes from './Color.module.css'

const Color = ({color, id, identifier}) => {

  return (
    <div id={id} className={classes.color_button + ' color_button_' + identifier} 
    style={{background: color}} 
    onClick={(e) => {document.querySelectorAll('.color_button_' + identifier).
    forEach(x => x.id == e.currentTarget.id ? x.className = classes.color_button_selected + ' color_button_' 
    + identifier : x.className =  classes.color_button + ' color_button_' + identifier)}}></div>
  )
}

export default Color