import React, {useState} from 'react'
import Color from '../Color/Color'

import classes from '../Preview.module.css'
import { Container } from '../components'

const ColorButtons = ({ needed_product }) => {

    const [selected, setSelected] = useState(0)

    return (
      <Container className={classes.color_button_container}>
  
        {needed_product.category == 'clothes' && needed_product.attributes != null && needed_product.attributes.lenght > 0
          && needed_product.attributes[0].id.includes('Color') ? needed_product.attributes[0].items.map((size, index) =>
            (
            <Color 
            key={size.id} 
            color={size.value} 
            id={index}
            selected={selected}
            setSelected={setSelected} 
            />
            )) :
  
            needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[0].id != null &&
            needed_product.attributes[0].id.includes('Color') == true ?
            needed_product.attributes[0].items.map((size, index) => 
            (
            <Color 
            key={size.id} 
            color={size.value} 
            id={index} 
            selected={selected}
            setSelected={setSelected}
            />
            )) :
  
            needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
            needed_product.attributes[1].id.includes('Color') == true ?
            needed_product.attributes[1].items.map((size, index) => 
            (
            <Color 
            key={size.id} 
            color={size.value} 
            id={index} 
            selected={selected}
            setSelected={setSelected}
            />))
  
            : <span className={classes.no_size_span}>No Color Selection</span>}
      </Container>
    )
  }

export default ColorButtons