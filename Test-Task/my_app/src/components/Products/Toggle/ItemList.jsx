import React, { useState } from 'react'
import Size from './Size/Size';
import Color from './Color/Color';

import classes from '../Toggle/Toggle.module.css';



const ItemsList = ({ item, incrementer, decrimenter, currencySelector}) => {
  
  const [item_quantity, setItemQuantity] = useState(1);
  
  const ItemQuantityIncrement = () => {
    setItemQuantity(item_quantity + 1);
    incrementer(item.prices[0].amount);
  }
  
  
  const ItemQuantitDecrement = () => {
    item_quantity > 1 ? setItemQuantity(item_quantity - 1) : setItemQuantity(1);
    item_quantity > 1 ? decrimenter(item.prices[0].amount) :  decrimenter(0);
  }  

  return (
    <li className={classes.toggle_list_item}>
      <div className={classes.toggle_list_item_container}>
        <div className={classes.toggle_list_item_child}>
          <h1 className={classes.toggle_item_brand_name}>{item.brand}</h1>
          <h1 className={classes.toggle_item_name}>{item.name}</h1>
          <h1 className={classes.toggle_item_price}>{item.prices[currencySelector].currency.symbol} 
          {item.prices[currencySelector].amount}</h1>
          <h5 className={classes.toggle_item_size_title}>SIZE</h5>
          <div className={classes.toggle_item_size_buttons_container}>
            {item.category == 'clothes' ?
              item.attributes[0].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} 
              identifier={item.id}/>)) :
              item.category == 'tech' && item.attributes.length > 0 && item.attributes[0].id != null &&
              item.attributes[0].id.includes('Color') == false ?
              item.attributes[0].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} 
              identifier={item.id}/>)) :
              item.category == 'tech' && item.attributes.length > 0 && item.attributes[1].id != null &&
              item.attributes[1].id.includes('Color') == false ?
              item.attributes[1].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} 
              identifier={item.id}/>))
              : <span className={classes.no_size_span}>No Size</span>}
          </div>
          <div className={classes.color_container_title_block}>Color</div>
          <div className={classes.color_buttons_container}>
            {item.category == 'clothes' && item.attributes != null && item.attributes.lenght > 0
              && item.attributes[0].id.includes('Color') ? item.attributes[0].items.map((size, index) => 
              (<Color key={size.id} color={size.value} id={index} identifier={item.id}/>)) :
              item.category == 'tech' && item.attributes.length > 0 && item.attributes[0].id != null &&
              item.attributes[0].id.includes('Color') == true ?
              item.attributes[0].items.map((size, index) => (<Color key={size.id} color={size.value} id={index} identifier={item.id}/>)) :
              item.category == 'tech' && item.attributes.length > 0 && item.attributes[1].id != null &&
              item.attributes[1].id.includes('Color') == true ?
              item.attributes[1].items.map((size, index) => (<Color key={size.id} color={size.value} id={index} identifier={item.id}/>))
              : <span className={classes.no_size_span}>No Color Selection</span>}
          </div>
        </div>
        <div className={classes.toggle_items_quantity_container}>
          <div className={classes.toggle_items_button_top}>
            <button className={classes.toggle_item_incrementer} onClick={ItemQuantityIncrement}>+</button>
          </div>
          <div className={classes.toggle_quantity_title_little}>
            <p className={classes._quantity}>{item_quantity}</p>
          </div>
          <div className={classes.toggle_items_button_bottom}>
            <button className={classes.toggle_item_decrementer} onClick={ItemQuantitDecrement}>-</button>
          </div>
        </div>
      </div>
      <div className={classes.toggle_image}>
        <img src={item.gallery[0]} />
      </div>
    </li>
  )
}

export default ItemsList;