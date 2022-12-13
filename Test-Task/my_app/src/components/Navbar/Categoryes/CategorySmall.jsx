import React from 'react'

import {
    ListItem,
    Container
} from '../components'


import classes from '../Navbar.module.css'

const CategorySmall = (props) => {
    return (
        <Container className={classes.ctgrs_sm}>
            <ListItem key={props.id} id={props.id} className={props.id == props.categorySm ? classes.category_selection_item + ' category_list_sm' :
                classes.category_selection_item + ' category_list_sm'}
                onClick={() => {
                    props.changeCategoryValue(props.id); 
                    props.setCategory(props.title); 
                    props.setCategorySm(props.item.id);
                    props.onSelectCategory();
                }}>
                {props.title}
            </ListItem>
        </Container>
    )
}

export default CategorySmall