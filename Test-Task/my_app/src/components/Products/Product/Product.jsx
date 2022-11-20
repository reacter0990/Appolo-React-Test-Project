import React, { useRef, useState, useEffect, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { ToggleContext } from '../../ToogleContext/ToggleContexx';


import classes from './Product.module.css'


const Product = (props) => {

  const lenght = useRef(0);

  const [showAddCartButton, setAddCartButtonShow] = useState('none');
  const { setCartItems } = useContext(ToggleContext);


  useEffect(() => {

    lenght.current = props.product.gallery.lenght;
    
  },[]);

  return (
    <div className={classes.card}
      onMouseOver={() => {
        
        setAddCartButtonShow('block');
        
      }} onMouseOut={() => {
      
        setAddCartButtonShow('none');

      }} style={{background: props.darkTheme}}>
      <div className={classes.card_image}>
        <Link to='/preview' className={classes.product_image_link}>
          <img src={props.product.gallery[0]} className={classes.product_image} onClick={
            () => {props.getNeededProduct(props.product);}
          } />
        </Link>
        <button className={classes.add_to_card} style={{display: showAddCartButton}} onClick={() => {
             setCartItems(props.product)
          }}>
          <FontAwesomeIcon icon={faCartShopping} className={classes.bascet_icon} />
        </button>
      </div>
      <div className={classes.card_content}>
        <h1 className={classes.product_title}>{props.product.brand}</h1>
        <h5 className={classes.product_price}>{props.product.prices[props.currencySelector].currency.symbol + ' ' + props.product.prices[props.currencySelector].amount}</h5>
      </div>
    </div>
  )
}

export default Product