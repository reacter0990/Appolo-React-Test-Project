import React, {useEffect} from 'react'

import classes from './Buttons.module.css';

const Buttons = ({ size, id, identifier}) => {

    return (
        <>
            <button id={id} className={id == 0 ? classes.size_button_selected + ' size_buttons_' +  identifier :
             classes.size_button + ' size_buttons_' +  identifier} onClick={(e) =>
             {document.querySelectorAll('.size_buttons_' + identifier).forEach(x => x.id == e.currentTarget.id ?
             x.className = classes.size_button_selected + ' size_buttons_' +  identifier : 
             x.className = classes.size_button + ' size_buttons_' +  identifier)}}>{size}</button>
        </>
    )

}

export default Buttons