import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../Preview.module.css'
const Empty = () => {
    return (
        <div className={classes.empty_product_warning}> <h1 color='primary'>{':( Usp '}
            Something Went Wrong Please Try Again
        </h1>
            <Link to='/' className={classes.link_decoration}>Click here</Link>
        </div>
    )
}

export default Empty