import React from 'react'

import classes from './Buttons.module.css';

const Buttons = ({ size, id, identifier, selected, setSelected, setSize}) => {

    return (
     <>
       <button id={id} className={id == selected ? classes.size_button_selected + ' size_buttons_' +  identifier :
         classes.size_button + ' size_buttons_' +  identifier} onClick={() =>{ setSelected(id); setSize(id) }}>{size}</button>
     </>
    )

}

export default Buttons