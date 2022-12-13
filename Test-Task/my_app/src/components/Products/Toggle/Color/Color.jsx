import React from 'react'

import classes from './Color.module.css'

const Color = ({color, id, baseColor}) => {

  return (
    <div id={id} className={ id == baseColor ? classes.color_button_selected  :
    classes.color_button} style={{background: color}}></div>
  )
}

export default Color