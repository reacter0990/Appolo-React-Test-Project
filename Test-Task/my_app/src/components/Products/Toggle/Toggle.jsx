import React, {useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemsList from '../Toggle/ItemList';
import { ToggleContext } from '../../../components/ToogleContext/ToggleContexx'
import {
TbCurrencyDollar,
TbCurrencyPound,
TbCurrencyYen,
TbCurrencyDollarAustralian,
TbCurrencyRubel
} from "../../Navbar/index"

import{
  Container
} from '../components'

import classes from './Toggle.module.css';



const Toggle = (props) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const {resetStorage} = useContext(ToggleContext);
  
  const currencyArray = [<TbCurrencyDollar className={classes.currency_symbol} />,
  <TbCurrencyPound className={classes.currency_symbol} />, <TbCurrencyDollarAustralian className={classes.currency_symbol} />,
  <TbCurrencyYen className={classes.currency_symbol} />, <TbCurrencyRubel className={classes.currency_symbol} />
  ];

  useEffect(() => {
    props.cartItems.forEach(x => { setTotalPrice(totalPrice + x.selectedItem.prices[props.currencySelector].amount) });
  }, [props.cartItems])


  const TotalPriceIncrementer = (price) => {
    setTotalPrice(totalPrice + price);
  }

  const TotalPriceDecrementer = (price) => {
    setTotalPrice(totalPrice - price);
  }

  const EmptyList = () => {
    return (
      <div className={classes.toggle_empty_list}>
        No Items yet start add some
      </div>
    )
  }

  return (
    <Container className={classes.card_toggle} style={{ display: props.isVisibele }}>
      <Container className={classes.toggle_storage}>
        <div className={classes.toggle_title}>
          <h5 className={classes.toggle_my_bag_title}>My Bag,</h5>
          <h5 className={classes.toggle_quantity_title}>{props.cartItems != null ? 
         props.cartItems.length : 0} items</h5>
        </div>
        <div className={classes.card_selected_products}>
          { props.cartItems != null && props.cartItems.length > 0 ? <ul className={classes.card_items_list}>
            {
              props.cartItems.map((item, index) => <ItemsList key={index} item={item} incrementer={TotalPriceIncrementer}
              decrimenter={TotalPriceDecrementer} currencySelector={props.currencySelector} itemId={index}
              changeItemQuantity={props.changeItemQuantity}
            />
            )} </ul> : <EmptyList />
          } </div>
      </Container>
      <Container className={classes.toggle_buttons}>
        <div className={classes.total_price_info}>
          <h5 className={classes.toggle_total_title}>Total:</h5>
          <h5 className={classes.toggle_quantity_title_bottom}>{currencyArray[props.currencySelector]}
            {' ' + totalPrice.toFixed(2)}</h5>
        </div>
        <div className={classes.toggle_view_and_checked_btn}>
          <Link to='/cart-items' className={classes.toggle_view_card_button_link}>
            <button className={classes.toggle_view_card_button} onClick={() => {
              props.OpenAndCloseToggle('none');
            }}>VIEW BAG</button>
          </Link>
          <button className={classes.toggle_chcek_out_button} onClick={resetStorage}
          >CHECK OUT</button>
        </div>
      </Container>
    </Container>


  )
}

export default Toggle