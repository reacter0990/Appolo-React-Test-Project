import React from 'react';

import classes from './PreviewUnits_Sm.module.css';


const PreviewUnits_Sm = ({ image, id, unitId, itemImage, setItemImage }) => {

  return (
    <div className={classes.picture_icon_sm}>
      <img id={id} src={image} className={id == itemImage ? classes.selected_unit_image + ' unit_icon' + unitId
        : classes.unit_image + ' unit_icon' + unitId
      } onClick={() => { setItemImage(id) }} />
    </div>
  )
}

export default PreviewUnits_Sm