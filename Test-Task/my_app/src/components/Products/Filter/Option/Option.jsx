import React from 'react';

import classes from '../Filter.module.css'

const Option = ({ item, onSelect, symbol }) => {

    const selectClick = () => {
        onSelect(item);
    }

    return (
        <>
            <li className={classes.list_item} onClick={selectClick}>
               {typeof(item) === 'number' ? item + ' ' + symbol : item}
            </li>
        </>
    )
}

export default Option