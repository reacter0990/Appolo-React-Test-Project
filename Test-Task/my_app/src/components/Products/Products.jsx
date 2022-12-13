import React, { useState, useMemo, useEffect } from 'react'
import Product from './Product/Product';
import Addition from '../Addition/Addition';
import Filter from './Filter/Filter';

import {
  Button,
  Container
} from './components.js'

import IoIosArrowDroprightCircle from './Icon/IoIosArrowDroprightCircle'

import classes from './Products.module.css'
import filter from './Filter/Filter.module.css';

const EmptyList = () => {
  return (
    <div className={classes.empty_list}>
      No Results For Show
    </div>
  )
}


const Products = (props) => {

  const [products, setProducts] = useState([]);
  const [brandSelector, setBrandSelector] = useState('All');
  const [brandVisibility, setBrandVisibility] = useState('none');
  const [brandVisibilityBool, setBrandVisibilityBool] = useState(false);
  const [priceSelector, setPriceSelector] = useState('All');
  const [priceVisibility, setPriceVisibility] = useState('none');
  const [priceVisibilityBool, setPriceVisibilityBool] = useState(false);
  const [sizeSelector, setSizeSelector] = useState('All');
  const [colorSelector, setColorSelector] = useState('All');


  useEffect(() => {
    setProducts(props.products)
  }, [])

  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Escape') {
        props.setFilterVisibility('none');
        props.setOpenFilter('flex');
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (props.reloadSelectors == false) {
      setBrandVisibility('none');
      setBrandVisibilityBool(false);
      setBrandVisibility('none');
      setBrandVisibilityBool(false);
    }
  }, [props.reloadSelectors])


  const setBrandVisibilityFoo = () => {
    switch (brandVisibilityBool) {
      case false:
        setPriceVisibility('none');
        setPriceVisibilityBool(false);
        setBrandVisibility('block');
        setBrandVisibilityBool(true);
        break;
      case true:
        setBrandVisibility('none');
        setBrandVisibilityBool(false);
        break;
    }

  }


  const setPriceVisibilityFoo = () => {
    switch (priceVisibilityBool) {
      case false:
        setBrandVisibility('none');
        setBrandVisibilityBool(false);
        setPriceVisibility('block');
        setPriceVisibilityBool(true);
        break;
      case true:
        setPriceVisibility('none');
        setPriceVisibilityBool(false);
        break;
    }

  }

  const resetAllWindows = () => {
    props.closeAllWindows();
    props.setFilterVisibility('none');
    props.setOpenFilter('flex');
    setBrandVisibility('none');
    setBrandVisibilityBool(false);
    setPriceVisibility('none');
    setPriceVisibilityBool(false);
  }

  const openFilterWindow = () => {
    props.setFilterVisibility('block')
    props.setOpenFilter('none');
    setBrandVisibility('none');
    setBrandVisibilityBool(false);
    setPriceVisibility('none');
    setPriceVisibilityBool(false);
  }

  

  const Color = (product) => {

    if (product.attributes != null && product.attributes.length > 0 &&
      product.attributes[0].id != undefined && product.attributes[0].id != null) {

      if (product.attributes[0].id == 'Color' && product.attributes[0].items.length > 0) {

        for (const iterator of product.attributes[0].items) {

          if (iterator.value == colorSelector) {

            return product;
          }
        }
      }

    }
    else if (product.attributes != null && product.attributes.length > 0 &&
      product.attributes[0].id != undefined && product.attributes[0].id != null) {

      if (product.attributes[1].id == 'Color' && product.attributes[0].items.length > 0) {

        for (const iterator of product.attributes[1].items) {

          if (iterator.value == colorSelector) {

            return product;
          }

        }
      }

    }
  }


  const Element = (product) => {

    if (product.attributes != null && product.attributes.length > 0 &&
      product.attributes[0].id.includes('Color') == false && product.attributes[0].items.length > 0) {

      for (const iterator of product.attributes[0].items) {
        if (iterator.value == sizeSelector) {
          return product;
        }
      }
    } else if (product.attributes != null && product.attributes.length > 0 &&
      product.attributes[1].id.includes('Color') == false && product.attributes[0].items.length > 0) {

      for (const iterator of product.attributes[1].items) {
        if (iterator.value == sizeSelector) {
          return product;
        }
      }
    }

  }


  const FilteredProducts = useMemo(() => {

    if (brandSelector == 'All' && priceSelector == 'All' && colorSelector == 'All' && sizeSelector == 'All') {
      return props.products
    }
    else if (brandSelector != 'All' && priceSelector == 'All' && colorSelector == 'All' && sizeSelector == 'All') {
      return products.filter(product => product.brand == brandSelector);
    }
    else if (brandSelector != 'All' && priceSelector != 'All' && colorSelector == 'All' && sizeSelector == 'All') {
      return products.filter(product => product.brand == brandSelector &&
        product.prices[props.currencySelector].amount == priceSelector)
    }
    else if (brandSelector != 'All' && priceSelector != 'All' && colorSelector != 'All' && sizeSelector == 'All') {
      return products.filter(product => product.brand == brandSelector &&
        product.prices[props.currencySelector].amount == priceSelector &&
        Color(product));
    }
    else if (brandSelector != 'All' && priceSelector != 'All' && colorSelector != 'All' && sizeSelector != 'All') {
      return products.filter(product => product.brand == brandSelector &&
        product.prices[props.currencySelector].amount == priceSelector && Element(product) &&
        Color(product));
    }
    else if (brandSelector != 'All' && priceSelector != 'All' && colorSelector != 'All' && sizeSelector == 'All') {
      return products.filter(product => product.brand == brandSelector &&
        product.prices[props.currencySelector].amount == priceSelector &&
        Color(product));
    }
    else if (brandSelector != 'All' && priceSelector != 'All' && colorSelector == 'All' && sizeSelector != 'All') {
      return products.filter(product => product.brand == brandSelector &&
        product.prices[props.currencySelector].amount == priceSelector && Element(product))
    }
    else if (brandSelector != 'All' && priceSelector == 'All' && colorSelector != 'All' && sizeSelector != 'All') {
      return products.filter(product => product.brand == brandSelector && Element(product) &&
        Color(product));
    }
    else if (brandSelector == 'All' && priceSelector != 'All' && colorSelector == 'All' && sizeSelector == 'All') {
      return products.filter(product => product.prices[props.currencySelector].amount == priceSelector)
    }
    else if (brandSelector == 'All' && priceSelector == 'All' && colorSelector != 'All' && sizeSelector == 'All') {
      return products.filter(product => Color(product))
    }
    else if (brandSelector == 'All' && priceSelector == 'All' && colorSelector == 'All' && sizeSelector != 'All') {
      return products.filter(product => Element(product))
    }
    else if (brandSelector != 'All' && priceSelector == 'All' && colorSelector != 'All' && sizeSelector == 'All') {
      return products.filter(product => product.brand == brandSelector && Color(product));
    }
    else if (brandSelector != 'All' && priceSelector == 'All' && colorSelector == 'All' && sizeSelector != 'All') {
      return products.filter(product => product.brand == brandSelector && Element(product))
    }
    else if (brandSelector == 'All' && priceSelector != 'All' && colorSelector == 'All' && sizeSelector != 'All') {
      return products.filter(product => product.prices[props.currencySelector].amount == priceSelector
        && Element(product))
    }
    else if (brandSelector == 'All' && priceSelector != 'All' && colorSelector != 'All' && sizeSelector == 'All') {
      return products.filter(product => product.prices[props.currencySelector].amount == priceSelector
        && Color(product));
    }
    else if (brandSelector == 'All' && priceSelector != 'All' && colorSelector != 'All' && sizeSelector != 'All') {
      return products.filter(product => product.prices[props.currencySelector].amount == priceSelector &&
        Color(product) && Element(product));
    }
    else if (brandSelector == 'All' && priceSelector == 'All' && colorSelector != 'All' && sizeSelector != 'All') {
      return products.filter(product => Element(product) && Color(product));
    }

  }, [brandSelector, priceSelector, colorSelector, sizeSelector, props.products])


  return (
    <Container className={classes.products_storage} style={{ background: props.DarkTheme }}>

      <Filter
        products={props.products}
        openFilter={props.openFilter}
        neededProducts={props.products}
        currencySelector={props.currencySelector}
        brandSelector={brandSelector}
        setBrandSelector={setBrandSelector}
        brandVisibility={brandVisibility}
        setBrandVisibility={setBrandVisibility}
        brandVisibilityBool={brandVisibilityBool}
        setBrandVisibilityBool={setBrandVisibilityBool}
        priceSelector={priceSelector}
        setPriceSelector={setPriceSelector}
        priceVisibility={priceVisibility}
        setPriceVisibility={setPriceVisibility}
        priceVisibilityBool={priceVisibilityBool}
        setPriceVisibilityBool={setPriceVisibilityBool}
        sizeSelector={sizeSelector}
        setSizeSelector={setSizeSelector}
        colorSelector={colorSelector}
        setColorSelector={setColorSelector}
        setFilterVisibility={props.setFilterVisibility}
        filterVisibility={props.filterVisibility}
        setOpenFilter={props.setOpenFilter}
        setBrandVisibilityFoo={setBrandVisibilityFoo}
        setPriceVisibilityFoo={setPriceVisibilityFoo}
      />
      <Addition item={props.additionProduct} additionWindow={props.additionWindow} />
      <Button className={filter.filter_opener} style={{ display: props.openFilter }} onClick={openFilterWindow}>
        <IoIosArrowDroprightCircle />
      </Button>
      <div className={classes.products_container} onClick={resetAllWindows}>
        <h1 className={classes.category_name_title} onClick={resetAllWindows}>{props.productsCategoryName}</h1>
      </div>
      <main className={classes.main} onClick={resetAllWindows}>
        <div className={classes.product_main_container}>
          {FilteredProducts != null && FilteredProducts.length > 0 ? FilteredProducts.map((product) => (
            <div item key={product.id} className={product.category + " " + classes.cart_parent}>
              <Product product={product} getNeededProduct={props.getNeededProduct}
                darkTheme={props.cartDarkTheme} currencySelector={props.currencySelector}
                closeAllWindows={props.closeAllWindows} setFilterVisibility={props.setFilterVisibility}
                setOpenFilter={props.setOpenFilter}
              />
            </div>
          )) : <EmptyList />}
        </div>
      </main>
    </Container>
  )
}

export default Products