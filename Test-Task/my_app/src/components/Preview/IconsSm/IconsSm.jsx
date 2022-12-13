import React from 'react';
import PreviewUnits_Sm from '../PreviewUnits_Sm/PreviewUnits_Sm';

import classes from '../Preview.module.css'

const IconsSm = ({needed_product, itemImage, setItemImage}) => {
  return (
    <div className={classes.items_icons_sm}>
    <div className={classes.items_icon_container}>
      {needed_product.gallery.map((image, index) =>
      (
        <PreviewUnits_Sm
          key={image}
          image={image}
          id={index}
          unitId={needed_product.id}
          itemImage={itemImage}
          setItemImage={setItemImage}
        />
      ))}
    </div>
  </div>
  )
}

export default IconsSm