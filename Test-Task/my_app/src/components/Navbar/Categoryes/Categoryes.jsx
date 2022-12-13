import React from 'react';

import {
    ListItem
} from '../components'

import classes from '../Navbar.module.css'

const Categoryes = (props) => {

    const onButtonClick = () => {
        props.changeCategoryValue(props.item.id); 
        props.setCategory(props.item.title);
        props.setCategoryLg(props.item.id);
        props.closeAllWindows();
    }

    return (
        <>
            <ListItem key={props.item.id} id={props.item.id} className={props.item.id == props.categoryLg ? classes.categoryes_list_item_selected + ' category_list' :
                classes.categoryes_list_item + ' category_list'}
                onClick={onButtonClick}>
                {props.item.title}
            </ListItem>
        </>
    )
}

export default Categoryes