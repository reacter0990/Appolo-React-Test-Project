import React from 'react';

import classes from './PreviewUnit_lg.module.css'

const PreviewUnits_Lg = ({image, id, unitId, itemImage, setItemImage}) => {

  return (
    <div className={classes.picture_icon}>
     
      <img id={id} src={image} alt="" className={id == itemImage ? classes.selected_unit_image + ' unit_icon' + unitId :
      
       classes.unit_image + ' unit_icon' + unitId
     
     } onClick={() => { setItemImage(id)}}/>

    </div>
  )
}

export default PreviewUnits_Lg