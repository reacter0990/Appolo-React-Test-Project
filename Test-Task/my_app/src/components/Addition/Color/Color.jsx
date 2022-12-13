import React  from 'react'

import classes from './Color.module.css'

const Color = (props) => {
   
  return (
    <>
        <button id={props.id} className={props.id == props.selected ? classes.size_button_selected + ' color_button_' + props.identifier 
        : classes.size_button + ' color_button_' + props.identifier} style={{background: props.color}} onClick={() => 
        {props.setSelected(props.id); props.setColor(props.id)}}></button>
    </>
  )
}

export default Color