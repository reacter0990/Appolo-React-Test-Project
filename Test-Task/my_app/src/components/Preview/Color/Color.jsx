import React  from 'react'

import classes from './Color.module.css'

const Color = ({color, id, identifier}) => {
   
  return (
    <>
        <button id={id} className={id == 0 ? classes.size_button_selected + ' color_button_' + identifier 
        : classes.size_button + ' color_button_' + identifier} 
        style={{background: color}} onClick={(e) => {document.querySelectorAll('.color_button_' + identifier)
        .forEach(x => x.id == e.currentTarget.id ? x.className = classes.size_button_selected + ' color_button_' + identifier : 
        x.className = classes.size_button + ' color_button_' + identifier)}}></button>
    </>
  )
}

export default Color