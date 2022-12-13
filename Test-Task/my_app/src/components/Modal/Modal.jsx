import React from 'react'
import classes from './Modal.module.css'
const Modal = ({isOpened, closeModalWindow}) => {
  return (
    <div className={classes.main_container} style={{display: isOpened}} 
    onClick={closeModalWindow}></div>
  )
}

export default Modal