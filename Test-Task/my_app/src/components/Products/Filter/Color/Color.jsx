import React, { useState, useEffect, useMemo } from 'react'
import {
    Label,
    Container
} from '../../components'


import classes from '../Filter.module.css';


const FillColor = ({ color, id, setColorSelector, setSelected }) => {
    return (
        <Container className={classes.color_button}
            style={{ background: color, height: '15px', width: '15px', border: '2px solid white' }}
            onClick={() => {
               setSelected(id);
               setColorSelector(color);
            }}
        />

    )
}


const Color = ({ colorSelector, colors, setColorSelector }) => {

    const [neededArray, setNeedednArray] = useState([]);
    const [selected, setSelected] = useState(0);

    const checkColor = (color) => {
        if (!neededArray.some(item => item == color.value)) {
            setNeedednArray([...neededArray, color.value]);
        }
    }

    const checkElement = (element) => {
        if (
            element.category == 'clothes'
            && element.attributes != null
            && element.attributes.lenght > 0
            && element.attributes[0].id.includes('Color') == true) {

            element.attributes[0].items.forEach(item => checkColor(item));
        }
        else if (
            element.category == 'tech'
            && element.attributes.length > 0
            && element.attributes[0].id != null
            && element.attributes[0].id.includes('Color') == true){

            element.attributes[0].items.forEach(item => checkColor(item));
        }
    }

    const sortArray =  () => {

        colors.forEach(item => checkElement(item));
        return neededArray;

    }

    const onSelectClick = () => {
        setSelected(0);
        setColorSelector('All');    
    }

    useEffect(() => {
        sortArray();
    }, [colors])


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
                Color
            </Label>
            <Container style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Container className={classes.brand_selector_color}>
                    <Container className={classes.main_brand_color}
                        style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Container className={selected == 0 ? classes.first_color_select : classes.first_color_select_1}
                        style={{display: sortArray().length > 0 ? 'block' : 'none' }}
                            onClick={onSelectClick}
                        />
                        {sortArray().length > 0 ? sortArray().map((color, index) => (<FillColor key={index} color={color} id={index + 1}
                            colorSelector={colorSelector} setColorSelector={setColorSelector} setSelected={setSelected}
                        />))
                            : <h6 style={{
                                width: '100%', height: '100%', color: 'white',
                                display: 'flex', justifyContent: 'center'
                            }}>No color selection</h6>}
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Color