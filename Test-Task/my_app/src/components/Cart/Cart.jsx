import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import FillProducts from './FillProducts/FillProducts';
import { Cart_Spinner } from '../Spinners';
import 
{ 
    TbCurrencyDollar, 
    TbCurrencyPound, 
    TbCurrencyYen,
    TbCurrencyDollarAustralian,
    TbCurrencyRubel
} from "./index"

import classes from './Cart.module.css';



const Cart = ({items, currencySelector}) => {

  console.log(items);

  const [totalFee, setTotalFee] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState(false);
  const [tax, setTax] = useState(0);
 
  useEffect(() => {

    setTotalPrice();

  }, [currencySelector])
  
  
  const setTotalPrice = () => {

    let counter = 0;
    let items_counter = 0;

    items.forEach(x => (counter += x.selectedItem.prices[currencySelector].amount));
    items.forEach(x => (items_counter += x.item_quantity));
    setTotalFee(counter);
    setQuantity(items_counter);
    setTax(counter * 21/100);
  }

  const AddPriceOfItem = (price) => {
    setTotalFee(totalFee + price);
    setQuantity(quantity + 1);
    setTax(totalFee * 21/100);
  }


  const RemovePriceOfItem = (price) => {
    setTotalFee(totalFee - price);
    setQuantity(quantity - 1);
    setTax(totalFee * 21/100);
  } 

  const currencyArray = [<TbCurrencyDollar className={classes.currency_symbol}/>,
  <TbCurrencyPound className={classes.currency_symbol}/>,  <TbCurrencyDollarAustralian className={classes.currency_symbol}/>, 
  <TbCurrencyYen className={classes.currency_symbol}/>,  <TbCurrencyRubel className={classes.currency_symbol}/>
 ];

  

  const EmptyCart = () => (
    <>
      <Link to='/'>
         <h1 className={classes.go_back_title}> No Items get start add some</h1> 
         <a href="" className={classes.click_here_title}>Click here</a>
      </Link>
    </>
  )

  if (items);

  return (

    
    <div className={classes.main_block}>
      {order == true ? <Cart_Spinner/> : <div/>} 
      <div className={classes.main_block_insider}>
        <div className={classes.cart_title}>
          <h1 className={classes.cart_title_header}>Cart</h1>
        </div>
      </div>
      <div className={classes.empty_content}>
        {items != null && items.length == 0 ? <EmptyCart/> 
        : items.map((product, index) => <FillProducts key={product.selectedItem.id} items={product} AddPriceOfItem={AddPriceOfItem} 
        RemovePriceOfItem={RemovePriceOfItem} currncySelector={currencySelector} itemId={index}/>)}
      </div>
      <div className={classes.total_tax_title}>
        <h1 className={classes.tax_title_text}>Tax 21%:</h1>
        <h1 className={classes.tax_price_header}>{currencyArray[currencySelector]}{tax.toFixed(2)}</h1>
      </div>
      <div className={classes.tax_price_text_second}>
        <h1 className={classes.tax_title_text}>Quantity:</h1>
        <h1 className={classes.item_quantity_header}>{quantity}</h1>
      </div>
      <div className={classes.tax_price_text_second}>
        <h1 className={classes.tax_title_text}>Total:</h1>
        <h1 className={classes.total_price_header}>{currencyArray[currencySelector]}{totalFee.toFixed(2)}</h1>
      </div>
      <div className={classes.order_button_container}>
        <button className={classes.order_button} onClick={() => setOrder(true)}>ORDER</button>
      </div>
    </div>
  )
}

export default Cart