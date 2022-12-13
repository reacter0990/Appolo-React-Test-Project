import React, { useState } from 'react';
import LeftBlock from './LeftBlock/LeftBlock';
import RightBlock from './RightBlock/RightBlock';
import IconsSm from './IconsSm/IconsSm';
import ItemsSm from './ItemsSm/ItemsSm';
import UnderTitle from './UnderTitle/UnderTitle';
import Empty from './Empty/Empty';

import classes from './Preview.module.css'

import { Container } from './components'


function Preview({ needed_product, currencySelector, approvedItem }) {

  const [itemImage, setItemImage] = useState(0);


  return (

    needed_product.gallery != null && needed_product.attributes != null ?
      <Container className={classes.preview_container} >
        <Container className={classes.preview_insider}>
            <LeftBlock 
              needed_product={needed_product}
              itemImage={itemImage}
              setItemImage={setItemImage}
            />
            <RightBlock 
              needed_product={needed_product}
              currencySelector={currencySelector}
              approvedItem={approvedItem}
            />
        </Container>
        <Container>
        <IconsSm 
          needed_product={needed_product}
          itemImage={itemImage}
          setItemImage={setItemImage}
        />
        <ItemsSm 
          needed_product={needed_product}
          approvedItem={approvedItem}
          currencySelector={currencySelector}
        />
        <UnderTitle/>
        </Container>
      </Container> :
      <Empty/>

  )
}

export default Preview