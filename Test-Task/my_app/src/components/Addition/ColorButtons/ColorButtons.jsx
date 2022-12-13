import React, { useState, useEffect } from 'react';
import Color from '../Color/Color'

import classes from '../Addition.module.css'

const ColorButtons = ({ item, setColor, clicked }) => {

  const [selected, setSelected] = useState(0);

  useEffect(() => {

    if (clicked == true) {
      setSelected(0);
    }

  }, [clicked])

  return (
    <div className={classes.color_button_container}>

      {item.category == 'clothes' && item.attributes != null && item.attributes.lenght > 0
        && item.attributes[0].id.includes('Color') ? item.attributes[0].items.map((size, index) =>
        (
          <Color
            key={size.id}
            color={size.value}
            id={index}
            selected={selected}
            setColor={setColor}
            setSelected={setSelected}
          />
        )) :

        item.category == 'tech' && item.attributes.length > 0 && item.attributes[0].id != null &&
          item.attributes[0].id.includes('Color') == true ?
          item.attributes[0].items.map((size, index) =>
          (
            <Color
              key={size.id}
              color={size.value}
              id={index}
              selected={selected}
              setColor={setColor}
              setSelected={setSelected}
            />
          )) :

          item.category == 'tech' && item.attributes.length > 0 && item.attributes[1].id != null &&
            item.attributes[1].id.includes('Color') == true ?
            item.attributes[1].items.map((size, index) =>
            (
              <Color
                key={size.id}
                color={size.value}
                id={index}
                selected={selected}
                setColor={setColor}
                setSelected={setSelected}
              />))

            : <span className={classes.no_size_span}>No Color Selection</span>}
    </div>
  )
}

export default ColorButtons