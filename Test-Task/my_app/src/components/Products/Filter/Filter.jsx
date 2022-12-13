import React from 'react';
import Brand from './Brand/Brand';
import Color from './Color/Color';
import Size from './Size/Size';
import Price from './Price/Price';
import {
    Button,
    Container,
    FilterBlock,
    BlackBackground
} from '../components'
import IoIosArrowDropleftCircle from '../Icon/IoIosArrowDropleftCircle'

import classes from './Filter.module.css';



const Filter = (props) => {

   const resetVisibility = () => {
     props.setFilterVisibility('none');
     props.setOpenFilter('flex');
   }

    return (
        <Container className={classes.container + ' filter_main_container'} style={{display: props.filterVisibility}}>
            <Button className={classes.filter_opener_closer + ' filter_closer'} onClick={resetVisibility}>
                <IoIosArrowDropleftCircle/>
            </Button>
            <main className={classes.main}>
                <BlackBackground className={classes.black_background}/>
                <FilterBlock className={classes.filter_block}>
                    <Container>
                        <Brand
                            brandSelector={props.brandSelector}
                            clothesArray={props.products}
                            setBrandSelector={props.setBrandSelector}
                            brandVisibility={props.brandVisibility}
                            setBrandVisibilityFoo={props.setBrandVisibilityFoo}
                        />
                        <Price 
                            priceSelector={props.priceSelector} 
                            pricesArray={props.neededProducts} 
                            currencySelector={props.currencySelector}
                            setPriceSelector={props.setPriceSelector} 
                            priceVisibility={props.priceVisibility}
                            setPriceVisibilityFoo={props.setPriceVisibilityFoo}
                        />
                        <Size 
                           setSizeSelector={props.setSizeSelector} 
                           products={props.neededProducts}
                        />
                        <Color 
                           setColorSelector={props.setColorSelector}
                           colorSelector={props.colorSelector} 
                           colors={props.neededProducts}
                        />
                    </Container>
                </FilterBlock>
            </main>
        </Container>
    )
}

export default Filter