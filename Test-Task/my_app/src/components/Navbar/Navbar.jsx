import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { HiMenu } from "react-icons/hi";
import {
TbCurrencyDollar,
TbChevronDown,
TbCurrencyPound,
TbCurrencyYen,
TbChevronUp,
TbCurrencyDollarAustralian,
TbCurrencyRubel
} from "react-icons/tb"

import classes from './Navbar.module.css'



const Navbar = (props) => {

    const [currency, setCurrency] = useState(0);
    const [categoryes, setCategory] = useState('All');
    const [cartIsEmpty, setCartIsEmpty] = useState(0);


    const currencyArray = [<TbCurrencyDollar className={classes.currency_symbol} />,
    <TbCurrencyPound className={classes.currency_symbol} />, <TbCurrencyDollarAustralian className={classes.currency_symbol} />,
    <TbCurrencyYen className={classes.currency_symbol} />, <TbCurrencyRubel className={classes.currency_symbol} />
    ];

    const categoryArray = [{ id: 0, title: 'All' }, { id: 1, title: 'Clothes' }, { id: 2, title: 'Tech' }];

    const UptadeCurrency = (currency) => {
        setCurrency(currency);
    }

    useEffect(() => {
        setCartIsEmpty(props.cartItemsQuantityIcon);
    }, [props.cartItemsQuantityIcon]);

    return (
        <div className={classes.navbar_main_container}>
            <div className={classes.categoryes}>
                <ul className={classes.categoryes_list}>
                    {categoryArray.map((item) => (<li key={item.id} id={item.id} className={item.id == 0 ? classes.categoryes_list_item_selected + ' category_list' :
                        classes.categoryes_list_item + ' category_list'}
                        onClick={(e) => {
                            props.changeCategoryValue(item.id); setCategory(item.title); props.closeAllWindows();
                            document.querySelectorAll('.category_list').forEach(category =>
                            category.id == e.currentTarget.id ? category.className = classes.categoryes_list_item_selected + ' category_list' :
                            category.className = classes.categoryes_list_item + ' category_list')
                        }}>
                        {item.title}
                    </li>))}
                </ul>
                <div className={classes.categoryes_list_sm}>
                    <h1 className={classes.caregoryes_header_sm} onClick={() => {
                        props.onCategorySelection();
                    }}>{categoryes}
                        <TbChevronDown style={{
                            display: props.categorySelectorDown, height: '100%', alignItems: 'center',
                            paddingTop: '5px', paddingLeft: '5px'
                        }} />
                        <TbChevronUp style={{
                            display: props.categorySelectorUp, height: '100%', alignItems: 'center',
                            paddingTop: '5px', paddingLeft: '5px'
                        }} />
                    </h1>
                    <ul className={classes.category_selection} style={{ display: props.categoryesVisibility }}>
                        {categoryArray.map((item) => (<li key={item.id} id={item.id} className={item.id == 0 ? classes.category_selection_item + ' category_list_sm' :
                            classes.category_selection_item + ' category_list_sm'}
                            onClick={(e) => {
                                props.changeCategoryValue(item.id); setCategory(item.title); props.onSelectCategory();
                                document.querySelectorAll('.category_list').forEach(category =>
                                category.id == e.currentTarget.id ? category.className = classes.categoryes_list_item_selected + ' category_list' :
                                category.className = classes.categoryes_list_item + ' category_list')
                                document.querySelectorAll('.category_list_sm').forEach(category =>
                                category.id == e.currentTarget.id ? category.className = classes.classes.category_selection_item + ' category_list_sm' :
                                category.className = classes.category_selection_item + ' category_list_sm')
                            }}>
                            {item.title}
                        </li>))}
                    </ul>
                </div>
            </div>
            <Link to='./' className={classes.icon}>
              <div className={classes.icon} onClick={() => {
                props.closeAllWindows();
              }}>
                <figure className={classes.fiqure}></figure>
            </div>
            </Link>
            <div className={classes.card}>
                <ul className={classes.card_list}>
                    <div className={classes.menu_toggler} onClick={() => {props.closeAllWindows(); 
                    props.openAndCloseMenuToggler();
                    }}>
                        <HiMenu className={classes.menu_icon} />
                    </div>
                    <li className={classes.card_list_item}>
                        <div className={classes.selection_container}>
                            <div className={classes.selection_main_simbol} onClick={props.openAndCloseCurrencySelection} >
                                <h6 className={classes.currency_header}>
                                    {currencyArray[currency]}<TbChevronDown style={{ display: props.downArrow, fontSize: '10px' }} />
                                    <TbChevronUp style={{ display: props.visibility, fontSize: '10px' }} />
                                </h6>
                            </div>
                            <div className={classes.selection_items} style={{ display: props.visibility }}>
                                <div className={classes.currency_selector_item} onClick={() => {
                                    UptadeCurrency(0);
                                    props.onSelectCurrency(0);
                                }}>
                                    <div className={classes.insider}>
                                        <TbCurrencyDollar className={classes.currency_symbol_children} />
                                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                            USD
                                        </h6>
                                    </div>
                                </div>
                                <div className={classes.currency_selector_item} onClick={() => {
                                    UptadeCurrency(1);
                                    props.onSelectCurrency(1);
                                }}>
                                    <div className={classes.insider}>
                                        <TbCurrencyPound className={classes.currency_symbol_children} />
                                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                            GBP
                                        </h6>
                                    </div>
                                </div>
                                <div className={classes.currency_selector_item} onClick={() => {
                                    UptadeCurrency(2);
                                    props.onSelectCurrency(2);
                                }}>
                                    <div className={classes.insider}>
                                        <TbCurrencyDollarAustralian className={classes.currency_symbol_children} />
                                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                            AUD
                                        </h6>
                                    </div>
                                </div>
                                <div className={classes.currency_selector_item} onClick={() => {
                                    UptadeCurrency(3);
                                    props.onSelectCurrency(3);
                                }}>
                                    <div className={classes.insider}>
                                        <TbCurrencyYen className={classes.currency_symbol_children} />
                                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                            JPY
                                        </h6>
                                    </div>
                                </div>
                                <div className={classes.currency_selector_item} onClick={() => {
                                    UptadeCurrency(4);
                                    props.onSelectCurrency(4);
                                }}>
                                    <div className={classes.insider}>
                                        <TbCurrencyRubel className={classes.currency_symbol_children} />
                                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                            RUB
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={classes.card_list_item} onClick={() => {
                        props.openAndCloseToggle();
                    }}>
                        <div style={{ position: 'relative' }}>
                            <h6 className={classes.items_quantity_cart_icon} style={{
                                display: cartIsEmpty == 0 ? 'none' :
                                    'flex'
                            }}>{props.cartItemsQuantityIcon}</h6>
                            <IoCartOutline className={classes.bascket_icon} style={{ position: 'relative' }} />
                        </div>
                    </li>
                </ul>
            </div>
            <div className={classes.menu_toggler_container} style={{ display: props.menuToggler }}>
                <ul className={classes.menu_selection_list}>
                    <li className={classes.menu_selection_list_item} onClick={props.openAndCloseCurrencySelection}>
                        {currencyArray[currency]}
                        <h5 style={{ marginLeft: '5px' }}>Currency</h5>
                    </li>
                    <li className={classes.menu_selection_list_item} onClick={() => {
                        props.openAndCloseToggle();
                    }}>
                        <div style={{ position: 'relative' }}>
                            <h6 className={classes.items_quantity_cart_icon} style={{
                                display: cartIsEmpty == 0 ? 'none' :
                                    'flex'
                            }}>{props.cartItemsQuantityIcon}</h6>
                            <IoCartOutline className={classes.bascket_icon} style={{ position: 'relative' }} />
                        </div>
                        <h5 style={{ marginLeft: '5px' }}>Card</h5>
                    </li>
                </ul>
            </div>
            <div className={classes.selection_items_sm} style={{ display: props.visibility }}>
                <div className={classes.currency_selector_item} onClick={() => {
                    UptadeCurrency(0);
                    props.onSelectCurrency(0);
                }}>
                    <div className={classes.insider}>
                        <TbCurrencyDollar className={classes.currency_symbol_children} />
                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                            USD
                        </h6>
                    </div>
                </div>
                <div className={classes.currency_selector_item} onClick={() => {
                    UptadeCurrency(1);
                    props.onSelectCurrency(1);
                }}>
                    <div className={classes.insider}>
                        <TbCurrencyPound className={classes.currency_symbol_children} />
                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                            GBP
                        </h6>
                    </div>
                </div>
                <div className={classes.currency_selector_item} onClick={() => {
                    UptadeCurrency(2);
                    props.onSelectCurrency(2);
                }}>
                    <div className={classes.insider}>
                        <TbCurrencyDollarAustralian className={classes.currency_symbol_children} />
                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                            AUD
                        </h6>
                    </div>
                </div>
                <div className={classes.currency_selector_item} onClick={() => {
                    UptadeCurrency(3);
                    props.onSelectCurrency(3);
                }}>
                    <div className={classes.insider}>
                        <TbCurrencyYen className={classes.currency_symbol_children} />
                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                            JPY
                        </h6>
                    </div>
                </div>
                <div className={classes.currency_selector_item} onClick={() => {
                    UptadeCurrency(4);
                    props.onSelectCurrency(4);
                }}>
                    <div className={classes.insider}>
                        <TbCurrencyRubel className={classes.currency_symbol_children} />
                        <h6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                            RUB
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar