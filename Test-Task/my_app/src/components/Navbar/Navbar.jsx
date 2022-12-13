import React, { useState, useEffect } from 'react';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockCenter from './BlockCenter/BlockCenter'
import BlockRight from './BlockRight/BlockRight'

import {
    Container
} from './components';

import {
    IconsArrayLg,
    IconsArraySm,
    Titles,
    CategoryArray
} from './storages'

import classes from './Navbar.module.css';

const Navbar = (props) => {

    const [currency, setCurrency] = useState(0);
    const [cartIsEmpty, setCartIsEmpty] = useState(0);

    const currencyArray = IconsArrayLg();
    const currencyArraySm = IconsArraySm();
    const currencyTitle = Titles();
    const categoryArray = CategoryArray();

    const UptadeCurrency = (currency) => {
        setCurrency(currency);
    }

    const onResetFoo = () => {
        props.setReloadSelectors(true)
        props.setFilterVisibility('none');
        props.setOpenFilter('flex');
    }

    useEffect(() => {
        setCartIsEmpty(props.cartItemsQuantityIcon);
    }, [props.cartItemsQuantityIcon]);


    return (
        <Container className={classes.navbar_main_container} onClick={onResetFoo}>
            <BlockLeft 
              categoryArray={categoryArray}
              changeCategoryValue={props.changeCategoryValue}
              onSelectCategory={props.onSelectCategory}
              categorySelectorDown={props.categorySelectorDown}
              categorySelectorUp={props.categorySelectorUp}
              onCategorySelection={props.onCategorySelection}
              categoryesVisibility={props.categoryesVisibility}
              closeAllWindows={props.closeAllWindows}
              setFilterVisibility={props.setFilterVisibility}
              closeModalWindow={props.closeModalWindow}
            />

            <BlockCenter 
               closeAllWindows={props.closeAllWindows}
               setFilterVisibility={props.setFilterVisibility}
               closeModalWindow={props.closeModalWindow}
            />

            <BlockRight      
              closeAllWindows={props.closeAllWindows}
              openAndCloseToggle={props.openAndCloseToggle}
              openAndCloseMenuToggler={props.openAndCloseMenuToggler}
              openAndCloseCurrencySelection={props.openAndCloseCurrencySelection}
              currency={currency}
              menuToggler={props.menuToggler}
              currencyArray={currencyArray}
              cartIsEmpty={cartIsEmpty}
              currencyTitle={currencyTitle}
              UptadeCurrency={UptadeCurrency}
              onSelectCurrency={props.onSelectCurrency}
              cartItemsQuantityIcon={props.cartItemsQuantityIcon}
              currencyArraySm={currencyArraySm}
              downArrow={props.downArrow}
              visibility={props.visibility}
              closeModalWindow={props.closeModalWindow}
              setFilterVisibility={props.setFilterVisibility}
            />
              
        </Container>
    )
}

export default Navbar