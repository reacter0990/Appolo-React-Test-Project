import React, {useEffect} from 'react'
import { HiCheckCircle } from "react-icons/hi";

import classes from './ItemAddedNotificatin.module.css'
const ItemAddedNotificatin = ({visibility, hideAddedItemNotification}) => {
  
  useEffect(() => {

    if(visibility.includes('visible') === true)
    {

      const timer = setTimeout(() => {

        hideAddedItemNotification();
        
      }, 1500);

      return () => clearTimeout(timer);
    }
    
  }, [visibility])

  return (
    <div className={classes.addedItemNotificationContainer} style={{visibility: visibility}}>
      <div className={classes.added_icon}>
        <HiCheckCircle className={classes.checked_icon}/>
      </div>
      <div className={classes.add_content}>
        item succsessfuly added...
      </div>
    </div>
  )
}

export default ItemAddedNotificatin