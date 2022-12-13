import React from 'react';
import PreviewUnits_Lg from '../PreviewUnits/PreviewUnits_Lg';

import {
    Container
} from '../components'

import classes from '../Preview.module.css'

const LeftBlock = ({needed_product, itemImage, setItemImage}) => {
  return (
    <Container className={classes.preview_items}>
            <Container className={classes.picture_icon}>
              {
                needed_product.gallery.map((image, index) =>
                (
                  <PreviewUnits_Lg
                    id={index}
                    key={image}
                    image={image} 
                    unitId={needed_product.id}
                    itemImage={itemImage}
                    setItemImage={setItemImage}
                    index={index}
                  />
                ))}
            </Container>
            <Container className={classes.image_container}>
              <img
                src={needed_product.gallery[itemImage]}
                alt=""
                className={classes.preview_image}
              />
            </Container>
          </Container>
  )
}

export default LeftBlock