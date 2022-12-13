import React from 'react';
import {Link} from 'react-router-dom';
import {
    Figure,
    Container
} from '../components'


import classes from '../Navbar.module.css';


const BlockCenter = (props) => {
    
    const ButtonFunction = () => {
        props.closeAllWindows();
        props.closeModalWindow();
        props.setFilterVisibility();
    } 

    return (
        <Link to='./' className={classes.icon} onClick={ButtonFunction}>
            <Container className={classes.icon}>
                <Figure className={classes.fiqure}></Figure>
            </Container>
        </Link>
    )
}

export default BlockCenter