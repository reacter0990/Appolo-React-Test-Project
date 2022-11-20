import React from 'react'
import Product from './Product/Product';

import classes from './Products.module.css'

const Products = (props) => {
  
  return (
    <div className={classes.products_storage} style={{background: props.DarkTheme}} onClick={() => props.closeAllWindows()}>
      <div className={classes.products_container}>
        <h1 className={classes.category_name_title}>{props.productsCategoryName}</h1>
      </div>
      <main className={classes.main}>
        <div className={classes.product_main_container}>
          {props.products.map((product) => (
            <div item key={product.id} className={product.category + " " + classes.cart_parent}>
              <Product product={product} getNeededProduct={props.getNeededProduct}
              darkTheme={props.cartDarkTheme} currencySelector={props.currencySelector}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Products