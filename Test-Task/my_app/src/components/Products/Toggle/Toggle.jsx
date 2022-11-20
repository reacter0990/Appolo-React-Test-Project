import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import ItemsList from '../Toggle/ItemList';
import {
TbCurrencyDollar,
TbCurrencyPound,
TbCurrencyYen,
TbCurrencyDollarAustralian,
TbCurrencyRubel
} from "react-icons/tb"

import classes from './Toggle.module.css';



const Toggle = ({ cartItems, isVisibele, currencySelector, OpenAndCloseToggle }) => {

  const [itemsQuantityArray, setItemQuantityArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const currencyArray = [<TbCurrencyDollar className={classes.currency_symbol} />,
  <TbCurrencyPound className={classes.currency_symbol} />, <TbCurrencyDollarAustralian className={classes.currency_symbol} />,
  <TbCurrencyYen className={classes.currency_symbol} />, <TbCurrencyRubel className={classes.currency_symbol} />
  ];

  let navigate = useNavigate();

  useEffect(() => {
    cartItems.forEach(x => { setTotalPrice(totalPrice + x.prices[currencySelector].amount) });
  }, [cartItems])


  const TotalPriceIncrementer = (price) => {
    setTotalPrice(totalPrice + price);
  }

  const TotalPriceDecrementer = (price) => {
    setTotalPrice(totalPrice - price);
  }

  const SetCheckOutCart = (quantity) => {
    setItemQuantityArray([...itemsQuantityArray, quantity]);
  }


  const EmptyList = () => {
    return (
      <div className={classes.toggle_empty_list}>
        No Items yet start add some
      </div>
    )
  }

  return (
    <div className={classes.card_toggle} style={{ display: isVisibele }}>
      <div className={classes.toggle_storage}>
        <div className={classes.toggle_title}>
          <h5 className={classes.toggle_my_bag_title}>My Bag,</h5>
          <h5 className={classes.toggle_quantity_title}>{cartItems != null ? cartItems.length : 0} items</h5>
        </div>
        <div className={classes.card_selected_products}>
          {cartItems != null && cartItems.length > 0 ? <ul className={classes.card_items_list}>
            {cartItems.map((item) => <ItemsList key={item.id} item={item} incrementer={TotalPriceIncrementer}
            decrimenter={TotalPriceDecrementer} setItemsQuantity={SetCheckOutCart} currencySelector={currencySelector} />)} </ul> : <EmptyList />}
        </div>
      </div>
      <div className={classes.toggle_buttons}>
        <div className={classes.total_price_info}>
          <h5 className={classes.toggle_total_title}>Total:</h5>
          <h5 className={classes.toggle_quantity_title_bottom}>{currencyArray[currencySelector]}
            {' ' + totalPrice.toFixed(2)}</h5>
        </div>
        <div className={classes.toggle_view_and_checked_btn}>
          <Link to='/cart-items' className={classes.toggle_view_card_button_link}>
            <button className={classes.toggle_view_card_button} onClick={() => {
              OpenAndCloseToggle('none');
            }}>VIEW BAG</button>
          </Link>
          <button className={classes.toggle_chcek_out_button}
          >CHECK OUT</button>
        </div>
      </div>
    </div>


  )
}

export default Toggle