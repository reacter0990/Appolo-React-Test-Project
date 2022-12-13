import React, { useRef, useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom'
import IoCartOutline from '../Icon/IoCartOutline'
import { ToggleContext } from '../../ToogleContext/ToggleContexx';

import {
   Container
} from '../components'


import classes from './Product.module.css'


const Product = (props) => {

  const lenght = useRef(0);

  const [showAddCartButton, setAddCartButtonShow] = useState('none');
  const { setAdditionWindowItem } = useContext(ToggleContext);

  const resetAllSettings = () => {
    props.closeAllWindows();
    props.setFilterVisibility('none');
    props.setOpenFilter('flex');
  }
 
  const neededProductSet = () => [
    props.getNeededProduct(props.product)
  ]

  useEffect(() => {

    lenght.current = props.product.gallery.lenght;
    
  },[]);

  return (
    <Container className={classes.card}
      onMouseOver={() => { setAddCartButtonShow('flex');}} onMouseOut={() => {setAddCartButtonShow('none');}} 
      onClick={resetAllSettings} style={{background: props.darkTheme}}>
      <div className={classes.card_image}>
        <Link to='/preview' className={classes.product_image_link}>
          <img src={props.product.gallery[0]} className={classes.product_image} onClick={
            neededProductSet
          } />
        </Link>
        <button className={classes.add_to_card} style={{display: showAddCartButton}} onClick={() => {
             setAdditionWindowItem(props.product);
             document.querySelector('body').setAttribute('style',
              'overflow-x:hidden; overflow-y: hidden;')
          }}>
          <IoCartOutline/>
        </button>
      </div>
      <div className={classes.card_content}>
        <h1 className={classes.product_title}>{props.product.brand}</h1>
        <h5 className={classes.product_price}>{props.product.prices[props.currencySelector].currency.symbol + ' ' + props.product.prices[props.currencySelector].amount}</h5>
      </div>
    </Container>
  )
}

export default Product