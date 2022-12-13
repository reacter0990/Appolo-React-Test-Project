import React, {useState} from 'react';

import SizeButtons from '../SizeButtons/SizeButtons';
import ColorButtons from '../ColorButtons/ColorButtons';

import {
    Container
} from '../components'

import classes from '../Preview.module.css'

const RightBlock = ({needed_product, currencySelector, approvedItem}) => {
   
    const[size, setSize] = useState(0);
    const[color, setColor] = useState(0);

  return (
    <Container className={classes.selection_items}>
    <div className={classes.selection_tems_container}>
      <div className={classes.name_and_title}>
        <h1 className={classes.item_name}>{needed_product.brand}</h1>
        <h1 className={classes.item_title}>{needed_product.name}</h1>
      </div>
      <div className={classes.selection_buttons}>
        <div className={classes.size_title}>
          <h1 className={classes.size_title_text}>SIZE:</h1>
        </div>
        <div className={classes.size_buttons_container}>
          <SizeButtons
            needed_product={needed_product}
            setSize={setSize}
          />
        </div>
        <div className={classes.color_and_title}>
          <h1 className={classes.color_title_text}>COLOR</h1>
          <ColorButtons
            needed_product={needed_product}
            setColor={setColor}
          />
          <h1 className={classes.price_title}>PRICE:</h1>
        </div>
      </div>
      <div className={classes.confirm_container}>
        <h1 className={classes.price_title_presenter}>
          {
            needed_product.prices[currencySelector].currency.symbol + ' '
            + needed_product.prices[currencySelector].amount
          }
        </h1>
        <button className={classes.add_to_cart} onClick={() => {

          approvedItem(size, color, needed_product);

        }}>ADD TO CARD</button>
      </div>
    </div>
  </Container>
  )
}

export default RightBlock