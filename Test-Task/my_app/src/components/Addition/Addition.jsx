import React, {useState, useEffect, useContext} from 'react';
import SizeButtons from './SizeButtons/SizeButtons';
import ColorButtons from './ColorButtons/ColorButtons';
import { ToggleContext } from '../ToogleContext/ToggleContexx';

import classes from './Addition.module.css'

const Addition = (props) => {
   
  const[clicked, setCliked] = useState(false);
  const[size, setSize] = useState(0);
  const[color, setColor] = useState(0);
  const[item, setItem] = useState({});
  const{approvedItem} = useContext(ToggleContext);

  useEffect(() => {

    setItem(props.item);

  }, [props])

  useEffect(() => {

    if(clicked == true) {

      const timer = setTimeout(() => {

        setCliked(false);

      }, 1000);
  
      return () => clearTimeout(timer);
    }

  },[clicked])

  return (

    <div className={classes.container} style={{ display: props.additionWindow }}>
      <div className={classes.main}>
      <div className={classes.blur}></div>
      {props.item != null && props.item != undefined  ?
        <div className={classes.addition_wndw}>
          <div className={classes.image_container}>
            <img className={classes.image} src={props.item.gallery[0]} alt="" />
          </div>
          <div className={classes.selection_container}>
            <div className={classes.name_and_title}>
              <h1 className={classes.item_name}>{props.item.brand}</h1>
              <h1 className={classes.item_title}>{props.item.name}</h1>
            </div>
            <SizeButtons item={props.item} 
            setSize={setSize} clicked={clicked}/>
            <ColorButtons item={props.item} 
            setColor={setColor} clicked={clicked}/>
          </div>
          <div className={classes.buttons_container}>
             <button className={classes.add_to_cart} onClick={() => {
               setCliked(true); approvedItem(size, color, item);
               setSize(0); setColor(0);
               document.querySelector('body').setAttribute('style', 
               'overflow-x:hidden; overflow-y: auto;')
             }}>
               Add
             </button>
          </div>
        </div> : <div></div>}
      </div>
    </div>
  )
}

export default Addition