import React, {useState} from 'react'
import Buttons from '../Buttons/Buttons'

import classes from '../Preview.module.css'
import { Container } from '../components'

const SizeButtons = ({ needed_product, setSize }) => {
    
    const [selected, setSelected] = useState(0)

    return (

      <Container className={classes.size_buttons}>
        {needed_product.category == 'clothes' ?
          needed_product.attributes[0].items.map((size, index) => 
          (
          <Buttons 
          key={size.id} 
          size={size.value} 
          id={index}
          identifier={needed_product.id} 
          selected={selected}
          setSelected={setSelected}
          setSize={setSize}
          />
          )) :
  
          needed_product.category == 'tech' && needed_product.attributes.length > 0 
          && needed_product.attributes[0].id != null &&
          needed_product.attributes[0].id.includes('Color') == false ?
          needed_product.attributes[0].items.map((size, index) => 
          (
          <Buttons 
          key={size.id} 
          size={size.value} 
          id={index}
          identifier={needed_product.id} 
          selected={selected}
          setSelected={setSelected}
          setSize={setSize}
          />
          )) :
  
          needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
          needed_product.attributes[1].id.includes('Color') == false ?
          needed_product.attributes[1].items.map((size, index) => 
          (
          <Buttons 
          key={size.id} 
          size={size.value} 
          id={index}
          identifier={needed_product.id} 
          selected={selected}
          setSelected={setSelected}
          setSize={setSize}
          />
          )) :
          
          <span className={classes.no_size_span}>No Size</span>}
      </Container>
    )
  }
export default SizeButtons