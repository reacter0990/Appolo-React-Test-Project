import React, {useState, useEffect} from 'react'
import Buttons from '../Buttons/Buttons'

import classes from '../Addition.module.css'

const SizeButtons = ({item, setSize, clicked}) => {
   
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        
       if(clicked == true)
       {
           setSelected(0);
       }

    }, [clicked])

    return (
        <div className={classes.size_buttons}>
            {item.category == 'clothes' ?
                item.attributes[0].items.map((size, index) =>
                (
                    <Buttons
                        key={size.id}
                        size={size.value}
                        id={index}
                        identifier={item.id}
                        selected={selected}
                        setSize={setSize}
                        setSelected={setSelected}
                    />
                )) :

                item.category == 'tech' && item.attributes.length > 0
                    && item.attributes[0].id != null &&
                    item.attributes[0].id.includes('Color') == false ?
                    item.attributes[0].items.map((size, index) =>
                    (
                        <Buttons
                            key={size.id}
                            size={size.value}
                            id={index}
                            identifier={item.id}
                            selected={selected}
                            setSize={setSize}
                            setSelected={setSelected}
                        />
                    )) :

                    item.category == 'tech' && item.attributes.length > 0
                        && item.attributes[1].id != null &&
                        item.attributes[1].id.includes('Color') == false ?
                        item.attributes[1].items.map((size, index) =>
                        (
                            <Buttons
                                key={size.id}
                                size={size.value}
                                id={index}
                                identifier={item.id}
                                selected={selected}
                                setSize={setSize}
                                setSelected={setSelected}

                            />
                        )) :

                        <span className={classes.no_size_span}>No Size</span>}
        </div>
    )
}

export default SizeButtons