import React from 'react';

import classes from './PreviewUnit_lg.module.css'

const PreviewUnits_Lg = ({image, id, unitId, itemImage}) => {

  return (
    <div className={classes.picture_icon}>
      <img id={id} src={image} alt="" className={classes.unit_image  + ' unit_icon' + unitId} onClick={(e) => { 
        document.querySelectorAll('.unit_icon' + unitId).forEach(x => x.id == e.currentTarget.id ?
        x.className = classes.selected_unit_image + ' unit_icon' + unitId : x.className = classes.unit_image + 
        ' unit_icon' + unitId); itemImage(id)}
      }/>
    </div>
  )
}

export default PreviewUnits_Lg