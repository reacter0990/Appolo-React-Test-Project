import React  from 'react'

import classes from './Color.module.css'

const Color = ({color, id, identifier, selected, setSelected}) => {
   
  return (
    <>
        <button id={id} className={id == selected ? classes.size_button_selected + ' color_button_' + identifier 
        : classes.size_button + ' color_button_' + identifier} style={{background: color}} onClick={() => 
        { setSelected(id) }}></button>
    </>
  )
}

export default Color