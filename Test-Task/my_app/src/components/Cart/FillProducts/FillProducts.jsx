import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { ToggleContext } from '../../ToogleContext/ToggleContexx'

import classes from './FillProducts.module.css';



const Color = ({ id, color, identifier, selected }) => {

  return (
    <button id={id} className={id == selected ? classes.color_button_first + ' color_button_selector_' + identifier : classes.color_button_second + ' color_button_selector_' + identifier}
      style={{ background: color }} onClick={(e) => { document.querySelectorAll('.color_button_selector_' + identifier).forEach(x => (x.className.includes(' color_button_selector_' + identifier) == true && 
      x.id == e.currentTarget.id ? x.style.border = '3px solid #5ECE7B' : x.style.border = '1px solid black'))}}></button>
  )
}


const Size = ({ id, size, identifier, selected }) => {
   
  return (
    <button id={id} className={id == selected ? classes.size_button_selected + ' size_button_selector_' + identifier : 
    classes.size_button + ' size_button_selector_' + identifier}>{size}</button>
  )
}


const SizeButtons = ({items}) => {
  return (
    <div className={classes.size_buttons}>
    {items.selectedItem.category == 'clothes' ?
      items.selectedItem.attributes[0].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} identifier={items.id}
      selected={items.size}/>)) :
      items.selectedItem.category == 'tech' && items.selectedItem.attributes.length > 0 && items.selectedItem.attributes[0].id != null &&
      items.selectedItem.attributes[0].id.includes('Color') == false ?
      items.selectedItem.attributes[0].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} identifier={items.id}
      selected={items.size}/>)) :
      items.selectedItem.category == 'tech' && items.selectedItem.attributes.length > 0 && items.selectedItem.attributes[1].id != null &&
      items.selectedItem.attributes[1].id.includes('Color') == false ?
      items.selectedItem.attributes[1].items.map((size, index) => (<Size key={size.id} size={size.value} id={index} identifier={items.id}
      selected={items.size}/>))
      : <span className={classes.no_size_span}>No Size</span>}
  </div>
  )
}


const ColorButtons = ({items}) => {
    return (
      <div className={classes.color_buttons}>
      {items.selectedItem.category == 'clothes' && items.selectedItem.attributes != null && items.selectedItem.attributes.lenght > 0
        && items.selectedItem.attributes[0].id.includes('Color') ? 
        items.selectedItem.attributes[0].items.map((size, index) => (<Color key={size.id} id={index} color={size.value} identifier={items.id}  
        selected={items.color}/>)) :
        items.selectedItem.category == 'tech' && items.selectedItem.attributes.length > 0 && items.selectedItem.attributes[0].id != null &&
        items.selectedItem.attributes[0].id.includes('Color') == true ?
        items.selectedItem.attributes[0].items.map((size, index) => (<Color key={size.id} id={index} color={size.value} identifier={items.id}
        selected={items.color}/>)) :
        items.selectedItem.category == 'tech' && items.selectedItem.attributes.length > 0 && items.selectedItem.attributes[1].id != null &&
        items.selectedItem.attributes[1].id.includes('Color') == true ?
        items.selectedItem.attributes[1].items.map((size, index) => (<Color key={size.id} id={index} color={size.value} identifier={items.id}
        selected={items.color}/>))
        : <span className={classes.no_size_span}>No Color Selection</span>}
    </div>
    )
}


const FillProducts = ({ items, AddPriceOfItem, RemovePriceOfItem, currncySelector, itemId }) => {

  const [count, setCount] = useState(1);
  const {changeItemQuantity} = useContext(ToggleContext);
  
  useEffect(() => {

    items.item_quantity > 0 ? setCount(items.item_quantity) : setCount(1);

  }, [])
  

  return (
    <>
      <div className={classes.main_container}>
        <ul className={classes.ul_list}>
          <li className={classes.ul_list_item}>
            <div className={classes.child_container}>
              <div className={classes.ul_list_item_item}>
                <div className={classes.selection}>
                  <div className={classes.info_side}>
                    <div className={classes.item_name}>
                      <h1 className={classes.item_name_header}>{items.selectedItem.brand}</h1>
                    </div>
                    <div className={classes.item_title}>
                      <h1 className={classes.title_header}>{items.selectedItem.name}</h1>
                    </div>
                    <div className={classes.item_price}>
                      <h1 className={classes.item_price_header}>{items.selectedItem.prices[currncySelector].currency.symbol 
                      + items.selectedItem.prices[currncySelector].amount}</h1>
                    </div>
                    <div className={classes.size_title_container}>
                      <h5 className={classes.size_text_title}>SIZE:</h5>
                    </div>
                    <div className={classes.size_selection_container}>
                       <SizeButtons items={items}/>
                    </div>
                    <div className={classes.color_title}>
                      <h5 className={classes.color_text}>COLOR</h5>
                    </div>
                    <div className={classes.color_selection}>
                       <ColorButtons items={items}/>
                    </div>
                  </div>
                  <div className={classes.item_increaser_reducer}>
                    <button className={classes.add_item} onClick={() => {
                      setCount(count + 1)
                      AddPriceOfItem(items.selectedItem.prices[currncySelector].amount);
                      changeItemQuantity(count);

                    }}>+</button>
                    <h5 className={classes.quantity_header}>{count}</h5>
                    <button className={classes.add_item} onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                        RemovePriceOfItem(items.selectedItem.prices[currncySelector].amount);
                        changeItemQuantity(count);

                      }
                    }}>-</button>
                  </div>
                </div>
                <div className={classes.picture_container}>
                  <img src={items.selectedItem.gallery[0]} alt="" className='object-contain' />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FillProducts