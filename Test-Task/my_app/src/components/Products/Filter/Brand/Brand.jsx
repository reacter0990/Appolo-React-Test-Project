import React, { useState, useEffect } from 'react';
import Option from '../Option/Option';
import {
    Label,
    Container
} from '../../components';

import {
    IoIosArrowDown
} from 'react-icons/io'

import classes from '../Filter.module.css'



const Brand = ({ brandSelector, clothesArray, setBrandSelector, brandVisibility, setBrandVisibilityFoo }) => {

    const [neededArray, setNeededArray] = useState([]);

    const checkElement = (element) => {
        if (!neededArray.some(item => item.includes(element.brand))) {
            setNeededArray([...neededArray, element.brand]);
        }
    }

    const mainSelectorTitle = () => {
        setBrandSelector('All');
    }

    const sortArray = () => {

        clothesArray.forEach(item => checkElement(item));
        return neededArray;
    }

    useEffect(() => {
        sortArray();
    }, [clothesArray])

    return (
        <Container
            className={classes.search_input1}>
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
                Brand
            </Label>
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container className={classes.brand_selector_storage}>
                    <Container className={classes.main_brand_selector}>
                        <Container className={classes.brand_selector} onClick={setBrandVisibilityFoo}>
                            <Label className={classes.barnd_selector_title}>
                                {brandSelector}
                                <IoIosArrowDown style={{ position: 'absolute', right: '0', marginRight: '5px' }} />
                            </Label>
                            <Container className={classes.barnd_options} style={{ display: brandVisibility }}>
                                <ul className={classes.list}>
                                    <li className={classes.list_item} onClick={mainSelectorTitle}>
                                      All
                                    </li>
                                    {sortArray().map((item, index) =>
                                    (
                                        <Option
                                            key={index}
                                            item={item}
                                            onSelect={setBrandSelector}
                                        />
                                    ))}
                                </ul>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Brand