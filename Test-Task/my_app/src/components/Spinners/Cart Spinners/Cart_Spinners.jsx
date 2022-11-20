import React, { useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

import { HiCheckCircle } from "react-icons/hi";

import classes from './Cart_Spinners.module.css'

const Cart_Spinners = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState('false');

    useEffect(() => {

        setLoading(true)

        const timer = setTimeout(() => {

            setLoading(false);
            setSent(true);

        }, 10000);

        setSent(false);

        return () => clearTimeout(timer)

    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setSent(false);

        }, 3000);

        return () => clearTimeout(timer)

    }, [sent])


    return (
        <div className={classes.main_container}>
            {
                loading ?
                    <div className={classes.spinner_container}>
                        <div className={classes.spnner_presenter}>
                            <FadeLoader color={'greenyellow'} radius={5} height={15} width={2} />
                        </div>
                        <h1 className={classes.loading_title}>Just a minute....</h1>
                    </div>
                    : sent ?
                        <div className={classes.order_container}>
                            <div className={classes.order_icon}>
                                <HiCheckCircle />
                            </div>
                            <div className={classes.order_title}>
                                Your order has successfully sent
                            </div>
                        </div> : <div style={{ display: 'none' }} />
            }
        </div>
    )
}

export default Cart_Spinners