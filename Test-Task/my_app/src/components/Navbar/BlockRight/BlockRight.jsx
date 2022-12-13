import React from 'react';
import { HiMenu } from "react-icons/hi";
import IoCartOutline from '../Icon/IoCartOutline';
import {
    TbChevronDown,
    TbChevronUp,
} from "react-icons/tb";

import {
    H6,
    List,
    Container,
    ListItem,

} from '../components';


import classes from '../Navbar.module.css'


const BlockRight = (props) => {


    return (
        <>
            <Container className={classes.card} >
                <List className={classes.card_list}>
                    <Container className={classes.menu_toggler} onClick={() => {
                        props.closeAllWindows();
                        props.closeModalWindow();
                        props.openAndCloseMenuToggler();
                    }}>
                        <HiMenu className={classes.menu_icon} />
                    </Container>
                    <ListItem className={classes.card_list_item}>
                        <Container className={classes.selection_container}>
                            <Container className={classes.selection_main_simbol} onClick={props.openAndCloseCurrencySelection} >
                                <H6 className={classes.currency_header}>
                                    {props.currencyArray[props.currency]}<TbChevronDown style={{ display: props.downArrow, fontSize: '12px' }} />
                                    <TbChevronUp style={{ display: props.visibility, fontSize: '12px' }} />
                                </H6>
                            </Container>
                            <Container className={classes.selection_items} style={{ display: props.visibility }}>
                                {props.currencyArray.map((currency, index) => (
                                    <Container className={classes.currency_selector_item} key={currency} onClick={() => {
                                        props.UptadeCurrency(index);
                                        props.onSelectCurrency(index);

                                    }}>
                                        <Container className={classes.insider}>
                                            {currency}
                                            <H6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                                {props.currencyTitle[index]}
                                            </H6>
                                        </Container>
                                    </Container>
                                ))}

                            </Container>
                        </Container>
                    </ListItem>
                    <ListItem className={classes.card_list_item} onClick={props.openAndCloseToggle}>
                        <Container style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <H6 className={classes.items_quantity_cart_icon} style={{
                                display: props.cartIsEmpty == 0 ? 'none' :
                                    'flex'
                            }}>{props.cartItemsQuantityIcon}</H6>
                            <IoCartOutline className={classes.bascket_icon} style={{ position: 'relative' }} />         
                        </Container>
                    </ListItem>
                </List>
            </Container>
            <Container className={classes.menu_toggler_container} style={{ display: props.menuToggler }}>
                <List className={classes.menu_selection_list}>
                    <ListItem className={classes.menu_selection_list_item} onClick={props.openAndCloseCurrencySelection}>
                        {props.currencyArray[props.currency]}
                        <h5 style={{ marginLeft: '5px' }}>Currency</h5>
                    </ListItem>
                    <ListItem className={classes.menu_selection_list_item} onClick={props.openAndCloseToggle}>
                        <Container style={{ position: 'relative' }}>
                            <H6 className={classes.items_quantity_cart_icon} style={{
                                display: props.cartIsEmpty == 0 ? 'none' :
                                    'flex'
                            }}>{props.cartItemsQuantityIcon}</H6>
                            <IoCartOutline className={classes.bascket_icon} style={{ position: 'relative' }} />
                        </Container>
                        <h5 style={{ marginLeft: '5px' }}>Card</h5>
                    </ListItem>
                </List>
            </Container>
            <Container className={classes.selection_items_sm} style={{ display: props.visibility }}>
                {props.currencyArraySm.map((currency, index) => (
                    <Container
                        key={currency}
                        className={classes.currency_selector_item} onClick={() => {
                            props.UptadeCurrency(index);
                            props.onSelectCurrency(index);
                        }}
                    >
                        <Container className={classes.insider}>
                            {currency}
                            <H6 style={{ width: '70%', height: '100%', fontSize: '18px' }}>
                                {props.currencyTitle[index]}
                            </H6>
                        </Container>
                    </Container>
                ))}
            </Container>
        </>
    )
}

export default BlockRight