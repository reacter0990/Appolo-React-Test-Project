import React, { useState, useContext } from 'react'
import Size from './Size/Size';
import Color from './Color/Color';
import { ToggleContext } from '../../ToogleContext/ToggleContexx';

import classes from '../Toggle/Toggle.module.css';


const SizeButtons = ({item}) => {

    return(
      <div className={classes.toggle_item_size_buttons_container}>
      {item.selectedItem.category == 'clothes' ?
        item.selectedItem.attributes[0].items.map((size, index) => 
        (
        <Size 
        key={size.id} 
        size={size.value} 
        id={index} 
        baseSize={item.size}
        />
        )) :
        item.selectedItem.category == 'tech' && item.selectedItem.attributes.length > 0
         && item.selectedItem.attributes[0].id != null &&
        item.selectedItem.attributes[0].id.includes('Color') == false ?
        item.selectedItem.attributes[0].items.map((size, index) => 
        (
        <Size 
        key={size.id} 
        size={size.value} 
        id={index} 
        baseSize={item.size}
        />
        )) :
        item.selectedItem.category == 'tech' && item.selectedItem.attributes.length > 0 
        && item.selectedItem.attributes[1].id != null &&
        item.selectedItem.attributes[1].id.includes('Color') == false ?
        item.selectedItem.attributes[1].items.map((size, index) => (
        <Size 
        key={size.id} 
        size={size.value} 
        id={index} 
        baseSize={item.size}
        />
        ))
        : <span className={classes.no_size_span}>No Size</span>}
    </div>
    )
}


const ColorButtons = ({item}) => {

   return (
    <div className={classes.color_buttons_container}>
    {item.selectedItem.category == 'clothes' && item.selectedItem.attributes != null && item.selectedItem.attributes.lenght > 0
      && item.selectedItem.attributes[0].id.includes('Color') ? item.selectedItem.attributes[0].items.map((size, index) => 
      (
      <Color 
      key={size.id} 
      color={size.value} 
      id={index} 
      baseColor={item.color}
      />
      )) :
      item.selectedItem.category == 'tech' && item.selectedItem.attributes.length > 0 && item.selectedItem.attributes[0].id != null &&
      item.selectedItem.attributes[0].id.includes('Color') == true ?
      item.selectedItem.attributes[0].items.map((size, index) => 
      (
      <Color 
      key={size.id} 
      color={size.value} 
      id={index} 
      baseColor={item.color}
      />
      )) :
      item.selectedItem.category == 'tech' && item.selectedItem.attributes.length > 0 && item.selectedItem.attributes[1].id != null &&
      item.selectedItem.attributes[1].id.includes('Color') == true ?
      item.selectedItem.attributes[1].items.map((size, index) => 
      (
      <Color 
      key={size.id} 
      color={size.value} 
      id={index} 
      baseColor={item.color}
      />
      ))
      : <span className={classes.no_size_span}>No Color Selection</span>}
   </div> 
   )
}



const ItemsList = ({item, incrementer, decrimenter, currencySelector, itemId}) => {

  
  const [item_quantity, setItemQuantity] = useState(1);
  const {changeItemQuantity} =  useContext(ToggleContext);
  
  const ItemQuantityIncrement = () => {
    setItemQuantity(item_quantity + 1);
    incrementer(item.selectedItem.prices[0].amount);
    changeItemQuantity(itemId, item_quantity);
  }
  
  
  const ItemQuantitDecrement = () => {
    item_quantity > 1 ? setItemQuantity(item_quantity - 1) : setItemQuantity(1);
    item_quantity > 1 ? decrimenter(item.selectedItem.prices[0].amount) : decrimenter(0);
    changeItemQuantity(itemId, item_quantity);
  }  

  return (
    <li className={classes.toggle_list_item}>
      <div className={classes.toggle_list_item_container}>
        <div className={classes.toggle_list_item_child}>
          <h1 className={classes.toggle_item_brand_name}>{item.selectedItem.brand}</h1>
          <h1 className={classes.toggle_item_name}>{item.name}</h1>
          <h1 className={classes.toggle_item_price}>{item.selectedItem.prices[currencySelector].currency.symbol} 
          {item.selectedItem.prices[currencySelector].amount}</h1>
          <h5 className={classes.toggle_item_size_title}>SIZE</h5>
          <div className={classes.toggle_item_size_buttons_container}>
            <SizeButtons item={item}/>
          </div>
          <div className={classes.color_container_title_block}>Color</div>
           <ColorButtons item={item}/>
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
        <img src={item.selectedItem.gallery[0]} />
      </div>
    </li>
  )
}

export default ItemsList;