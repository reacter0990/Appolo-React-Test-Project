import React, {useEffect} from 'react'
import { BsFillCartCheckFill } from "react-icons/bs";

import classes from './ItemAlreadtAdded.module.css'

const ItemAlreadyAdded = ({visibility, hideAddedItemExist}) => {

    useEffect(() => {
        if(visibility.includes('visible') === true)
        {
    
          const timer = setTimeout(() => {
    
            hideAddedItemExist();
            
          }, 1500);
    
          return () => clearTimeout(timer);
        }
    }, [visibility])

  return (
    <div className={classes.itemAlreadyAddedContainer} style={{visibility: visibility}}>
      <div className={classes.icon_container}>
        <BsFillCartCheckFill className={classes.already_added_icon}/>
      </div>
      <div className={classes.content}>
        Item already been added check out the cart
      </div>
    </div>
  )
}

export default ItemAlreadyAdded