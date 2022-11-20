import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import FillProducts from './FillProducts/FillProducts';
import { Cart_Spinner } from '../Spinners';
import 
{ 
    TbCurrencyDollar, 
    TbCurrencyPound, 
    TbCurrencyYen,
    TbCurrencyDollarAustralian,
    TbCurrencyRubel
} from "react-icons/tb"

import classes from './Cart.module.css';



const Cart = ({items, currencySelector}) => {

  const navigate = useNavigate();
  const [totalFee, setTotalFee] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState(false);
  const [tax, setTax] = useState(0);
 
  useEffect(() => {
    setTotalPrice();
  }, [currencySelector])
  
  
  const setTotalPrice = () => {
    let counter = 0;
    items.forEach(x => (counter += x.prices[currencySelector].amount))
    setTotalFee(counter);
    setQuantity(items.length);
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
        : items.map((product) => <FillProducts key={product.id} items={product} AddPriceOfItem={AddPriceOfItem} 
        RemovePriceOfItem={RemovePriceOfItem} currncySelector={currencySelector}/>)}
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