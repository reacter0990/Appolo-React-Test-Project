import {
    TbCurrencyDollar,
    TbCurrencyPound,
    TbCurrencyYen,
    TbCurrencyRubel,
    TbCurrencyDollarAustralian
} from './index'

import classes from './Navbar.module.css'

export const IconsArrayLg = () => {

    const currencyArray = [<TbCurrencyDollar className={classes.currency_symbol} />,
    <TbCurrencyPound className={classes.currency_symbol} />, <TbCurrencyDollarAustralian className={classes.currency_symbol} />,
    <TbCurrencyYen className={classes.currency_symbol} />, <TbCurrencyRubel className={classes.currency_symbol} />
    ];

    return currencyArray;

}


export const IconsArraySm = () => {

    const currencyArraySm = [<TbCurrencyDollar className={classes.currency_symbol_children} />,
    <TbCurrencyPound className={classes.currency_symbol_children} />, <TbCurrencyDollarAustralian className={classes.currency_symbol_children} />,
    <TbCurrencyYen className={classes.currency_symbol_children} />, <TbCurrencyRubel className={classes.currency_symbol_children} />
    ];

    return currencyArraySm;
}


export const Titles = () => {

    const currencyTitle = ['USD', "GBP", 'AUD', 'JPY', 'RUB'];
    return currencyTitle;
}


export const CategoryArray = () => {
    
    const categoryArray = [{ id: 0, title: 'All' }, { id: 1, title: 'Clothes' }, { id: 2, title: 'Tech' }];
    return categoryArray;

}