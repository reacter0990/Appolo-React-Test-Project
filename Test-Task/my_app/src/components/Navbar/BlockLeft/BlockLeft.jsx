import React, {useState} from 'react';
import Categoryes from '../Categoryes/Categoryes.jsx';
import CategorySmall from '../Categoryes/CategorySmall.jsx';
import {
    List,
    Header,
    Container
} from '../components.js';

import {
    TbChevronDown,
    TbChevronUp,
} from "react-icons/tb"

import classes from '../Navbar.module.css'

const BlockLeft = (props) => {
    const [categoryes, setCategory] = useState('All');
    const [categoryLg, setCategoryLg] = useState(0);
    const [categorySm, setCategorySm] = useState(0);


    return (
        <Container className={classes.categoryes} onClick={props.closeAllWindows}>
            <List className={classes.categoryes_list}>
                {props.categoryArray.map((item) =>
                (
                    <Categoryes 
                        item={item}
                        id={item.id}
                        key={item}
                        categoryLg={categoryLg}
                        setCategory={setCategory}
                        setCategoryLg={setCategoryLg}
                        closeAllWindows={props.closeAllWindows}
                        changeCategoryValue={props.changeCategoryValue}
                        setCategoryProducts={props.setCategoryProducts}
                        setFilterVisibility={props.setFilterVisibility}
                        closeModalWindow={props.closeModalWindow}
                    />
                ))}
            </List>
            <Container className={classes.categoryes_list_sm}>
                <Header className={classes.caregoryes_header_sm} onClick={props.onCategorySelection
                }>{categoryes}
                    <TbChevronDown style={{
                        display: props.categorySelectorDown, height: '100%', alignItems: 'center',
                        paddingTop: '5px', paddingLeft: '5px'
                    }} />
                    <TbChevronUp style={{
                        display: props.categorySelectorUp, height: '100%', alignItems: 'center',
                        paddingTop: '5px', paddingLeft: '5px'
                    }} />
                </Header>
                <List className={classes.category_selection} style={{ display: props.categoryesVisibility }}>
                    {props.categoryArray.map((item) => 
                    (
                        <CategorySmall
                            key={item.id}
                            id={item.id}
                            changeCategoryValue={props.changeCategoryValue}
                            setCategory={setCategory}
                            onSelectCategory={props.onSelectCategory}
                            title={item.title}
                            categorySm={categorySm}
                            setCategorySm={setCategorySm}
                        />
                    ))}
                </List>
            </Container>
        </Container>
    )
}

export default BlockLeft