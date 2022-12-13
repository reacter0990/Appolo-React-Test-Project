import React from 'react'

import classes from './Buttons.module.css';

const Buttons = (props) => {

    return (
     <>
       <button id={props.id} className={props.id == props.selected ? classes.size_button_selected + 
       ' size_buttons_' +  props.identifier :
        classes.size_button + ' size_buttons_' +  props.identifier} onClick={() =>
        {props.setSelected(props.id); props.setSize(props.id)}}>{props.size}</button>
     </>
    )

}

export default Buttons