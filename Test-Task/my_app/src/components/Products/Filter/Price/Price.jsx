import React, { useState, useEffect } from 'react';
import Option from '../Option/Option';
import {
    Label,
    Container
} from '../../components'

import {
    IoIosArrowDown
} from 'react-icons/io'


import classes from '../Filter.module.css'
const Price = ({ priceSelector, pricesArray, priceVisibility, setPriceSelector, setPriceVisibilityFoo, currencySelector }) => {


    const [neededArray, setNeededArray] = useState([]);

    const checkElement = (element) => {

        if (!neededArray.some(item => item == element.prices[currencySelector].amount)) {
            setNeededArray([...neededArray, element.prices[currencySelector].amount])
        }
    }

    const sortArray = () => {
        pricesArray.forEach(item => checkElement(item))
        return neededArray;
    }

    const PriceSelectorSey = () => {
        setPriceSelector('All')
    }

    useEffect(() => {

        setNeededArray([]);

    }, [currencySelector]);

    useEffect(() => {
        sortArray();
    }, [pricesArray])


    return (
        <Container className={classes.search_input1}>
            <Label htmlFor="select" style={{
                width: '100%',
                color: 'white',
                display: 'flex',
                fontSize: '15px',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '20px',
                justifyContent: 'flex-start',

            }}>
                Price
            </Label>
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container className={classes.brand_selector_storage}>
                    <Container className={classes.main_brand_selector}>
                        <Container className={classes.brand_selector} onClick={setPriceVisibilityFoo}>
                            <Label className={classes.barnd_selector_title} text>
                                {typeof (priceSelector) === 'number' ? priceSelector + ' ' +
                                    pricesArray[0].prices[currencySelector].currency.symbol : 'All'}
                                <IoIosArrowDown style={{ position: 'absolute', right: '0', marginRight: '5px' }} />
                            </Label>
                            <Container className={classes.barnd_options} style={{ display: priceVisibility }}>
                                <ul className={classes.list}>
                                    <li className={classes.list_item} onClick={PriceSelectorSey}>
                                        All
                                    </li>
                                    {sortArray().map((item, index) => (<Option key={index} item={item} onSelect={setPriceSelector}
                                        symbol={pricesArray[0].prices[currencySelector].currency.symbol} id={index} />))}
                                </ul>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Price