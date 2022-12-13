import React, { useState, useEffect } from 'react';
import {
    Label,
    Checkbox,
    Container
} from '../../components'

import classes from '../Filter.module.css'

const Checkout = ({ size, checkOutCheck, selected, setSelected, id}) => {
    return (
        <Container style={{ display: 'flex', marginLeft: '10px' }}>
            <Checkbox type='checkbox' value='LG' checked={id == selected ? true : false}  onChange={(e) => { 
                setSelected(id);
                checkOutCheck(e.target, size) 
            }}/>
            <label htmlFor="LG" style={{ color: 'white', fontSize: '12px', marginLeft: '5px' }}>{size}</label>
        </Container>
    )
}



const Size = ({ products, setSizeSelector }) => {

    const [neededArray, setNeededArray] = useState([]);
    const [selected, setSelected] = useState(0);
 
    const checkSize= (size) => {

        if (!neededArray.some(item => item == size.value)) {
            setNeededArray([...neededArray, size.value]);
        }
    }

    const checkElement = (element) => {

        if (element.category == 'clothes' && element.attributes.length > 0 && element.attributes[0].id != null) {

            element.attributes[0].items.forEach(item => checkSize(item));
        }
        else if (element.category == 'tech' && element.attributes.length > 0 && element.attributes[0].id != null
         && element.attributes[0].id.includes('Color') == false){

            element.attributes[0].items.forEach(item => checkSize(item));
        }
    }

    const sortArray = () => {

        products.forEach(item => checkElement(item));
        return neededArray;

    }

    const checkOutCheck = (check, value) => {
        check.checked == true 
        ? setSizeSelector(value) 
        : resetCheckBox();
    }

    const resetCheckBox = () => {
        setSelected(0);
        setSizeSelector('All')
    }

    useEffect(() => {
        setNeededArray([]);
        sortArray();
    }, [products])

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
                Size
            </Label>
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container className={classes.brand_selector_color}>
                    <Container className={classes.main_brand_selector_size} style={{ display: 'flex', paddingLeft: '20px' }}>
                        <Container style={{ display: 'flex', marginLeft: '10px' }}>
                            <Checkbox type='checkbox' value='LG' checked={selected == 0 ? true : false} onClick={(e) => {
                                setSelected(0)
                                checkOutCheck(e.target, 'All') 
                            }} style={{display: sortArray().length > 0 ? 'block' : 'none'}}/>
                            <label htmlFor="LG" style={{ color: 'white', fontSize: '12px', marginLeft: '5px' }}>All</label>
                        </Container>
                        {sortArray().length > 0 ? sortArray().map((size, index) => (<Checkout key={size} size={size} setSizeSelector={setSizeSelector} 
                         selected={selected}  id={index + 1}  setSelected={setSelected} checkOutCheck={checkOutCheck}/>)) :
                            <h6 style={{
                                width: '100%', height: '100%', color: 'white',
                                display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px'
                            }}>No Size selection</h6>}
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Size