import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { ToggleContext } from './components/ToogleContext/ToggleContexx';
import {
  Navbar,
  Products,
  Cart,
  Preview,
  Modal,
  Toggle,
  ItemAddedNotificatin,
  ItemAlreadyAdded
} from './components';


import './App.css';



const GET_LOCATIONS = gql`
  query Query {
    categories{
      __typename
       name
      products{
        id
        name
        inStock
        description
        gallery
        category
        brand
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
       prices{
        currency{
          label
          symbol
        }
        amount
      }
      }
    }
  }
  `;


function App() {

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  const [currency, setCurrency] = useState(0);
  const [category, setCategory] = useState(0);
  const [toggleItems, toggleItemsSet] = useState([]);
  const [viwedProduct, setViwedProduct] = useState(null);
  const [openFilter, setOpenFilter] = useState('flex');
  const [DarkTheme, setDarkTeme] = useState('#FFFFFF');
  const [menuToggler, setMenuToggler] = useState('none');
  const [cartDarkTheme, setCartDarkTheme] = useState('#FFFFFF');
  const [downArrow, setDownArrowVisibility] = useState('block');
  const [addedItemExist, setAddedItemExist] = useState('hidden');
  const [additionProduct, setAdditionProduct] = useState(null);
  const [additionWindow, setAdditionWindow] = useState('none');
  const [reloadSelectors, setReloadSelectors] = useState(false);
  const [toggleVisibility, setToggleVisibulity] = useState(false);
  const [filterVisibility, setFilterVisibility] = useState('none');
  const [isMenuTogglerOpened, setMenuTogglerOpened] = useState(false);
  const [categorySelectorUp, setCategorySelectorUp] = useState('none')
  const [categoryesVisibility, setCategoryVisbility] = useState('none');
  const [currrencyVisibility, setCurrencyVisibility] = useState(false);
  const [toggleVisibilitySrt, setToggleVisibulitySrt] = useState('none');
  const [productsCategoryName, setProductsCategoryName] = useState('All');
  const [isCategoryVisibility, setIsCategoryVisibility] = useState(false);
  const [categorySelectorDown, setCategorySelectorDown] = useState('flex');
  const [currencyVisibilityStr, setCurrencyVisibilityStr] = useState('none');
  const [addedItemNotification, setAddedItemsNotisication] = useState('hidden');


  const onCategorySelection = () => {

    switch (isCategoryVisibility) {
      case false:
        setToggleVisibulitySrt('none');
        setDarkTeme('#FFFFFF');
        setCartDarkTheme('#FFFFFF');
        setMenuToggler('none');
        setMenuTogglerOpened(false);
        setToggleVisibulity(false);
        setCurrencyVisibilityStr('none');
        setDownArrowVisibility('block');
        setCurrencyVisibility(false);
        setCategorySelectorDown('none');
        setCategorySelectorUp('flex');
        setCategoryVisbility('flex');
        setIsCategoryVisibility(true);
        break;

      case true:
        setCategoryVisbility('none');
        setCategorySelectorDown('flex');
        setCategorySelectorUp('none');
        setIsCategoryVisibility(false);
        break;
    }
  }

  const openAndCloseMenuToggler = () => {
    switch (isMenuTogglerOpened) {
      case false:
        setMenuToggler('block');
        setMenuTogglerOpened(true);
        break;
      case true:
        setMenuToggler('none');
        setMenuTogglerOpened(false);
        break;
    }
  }


  const onSelectCategory = () => {
    setCategoryVisbility('none');
    setCategorySelectorDown('flex');
    setCategorySelectorUp('none');
    setIsCategoryVisibility(false);
  }

  const OnSelectCurrency = (currency_index) => {
    setCurrencyVisibilityStr('none');
    setDownArrowVisibility('block');
    setCurrencyVisibility(false);
    setCurrency(currency_index)
  }

  const OpenAndCloseCurrencySelection = () => {

    switch (currrencyVisibility) {
      case false:
        setMenuToggler('none');
        setDarkTeme('#FFFFFF');
        setToggleVisibulity(false);
        setCurrencyVisibilityStr('block');
        setDownArrowVisibility('none');
        setToggleVisibulitySrt('none');
        setMenuTogglerOpened(false);
        setCartDarkTheme('#FFFFFF');
        setCurrencyVisibility(true);
        setCategoryVisbility('none');
        setCategorySelectorDown('flex');
        setCategorySelectorUp('none');
        setIsCategoryVisibility(false);
        break;

      case true:
        setCurrencyVisibilityStr('none');
        setDownArrowVisibility('block');
        setCurrencyVisibility(false);
        break;
    }
  }

  const OpenAndCloseToggle = () => {

    console.log('Switched');

    switch (toggleVisibility) {
      case false:
        setMenuToggler('none');
        setToggleVisibulitySrt('block');
        setMenuTogglerOpened(false);
        setDarkTeme('rgba(57, 55, 72, 0.22)');
        setCartDarkTheme('rgba(57, 55, 72, 0)');
        setCurrencyVisibilityStr('none');
        setDownArrowVisibility('block');
        setCurrencyVisibility(false);
        setToggleVisibulity(true);
        setCategoryVisbility('none');
        setCategorySelectorDown('flex');
        setCategorySelectorUp('none');
        setIsCategoryVisibility(false);
        break;
      case true:
        setToggleVisibulitySrt('none');
        setDarkTeme('#FFFFFF');
        setCartDarkTheme('#FFFFFF');
        setToggleVisibulity(false);
        break;
    }
  }

  const closeModalWindow = () => {
    setToggleVisibulitySrt('none');
    setDarkTeme('#FFFFFF');
    setCartDarkTheme('#FFFFFF');
    setToggleVisibulity(false);
  }

  const setAdditionWindowItem = (item) => {

    setAdditionProduct(item);
    setAdditionWindow('flex');
  }

  const approvedItem = (itemSize, itemColor, item) => {

    setAdditionWindow('none');
    const baseItem =
    {
      item_quantity: 0,
      size: itemSize,
      color: itemColor,
      selectedItem: item
    };

    !toggleItems.some(cartItem =>
      cartItem.size == baseItem.size && cartItem.color == baseItem.color &&
      cartItem.selectedItem.name.includes(baseItem.selectedItem.name) == true &&
      cartItem.selectedItem.brand.includes(baseItem.selectedItem.brand) == true &&
      cartItem.selectedItem.id.includes(baseItem.selectedItem.id) == true
    ) ? addToCart(baseItem) : setAddedItemExist('visible')

  }

  const addToCart = (item) => {
    toggleItemsSet([...toggleItems, item]);
    setAddedItemsNotisication('visible');
  }

  const viwedProductSetting = (product) => {

    setViwedProduct(product);

  }

  const ChangeCategoryValue = (category) => {

    setCategory(category);

    switch (category) {
      case 0:
        setProductsCategoryName('All');
        break;
      case 1:
        setProductsCategoryName('Clothes');
        break;
      case 2:
        setProductsCategoryName('Tech');
        break;
    }

  }

  const closeAllWindows = () => {
    setDarkTeme('#FFFFFF');
    setMenuToggler('none');
    setMenuTogglerOpened(false);
    setCategoryVisbility('none');
    setCategorySelectorDown('flex');
    setCategorySelectorUp('none');
    setIsCategoryVisibility(false);
    setCurrencyVisibilityStr('none');
    setDownArrowVisibility('block');
    setCurrencyVisibility(false);
    setToggleVisibulitySrt('none');
    setCartDarkTheme('#FFFFFF');
    setToggleVisibulity(false);
    setMenuToggler('none');
    setMenuTogglerOpened(false);
  }

  const hideAddedItemNotification = () => {
    setAddedItemsNotisication('hidden');
  }

  const hideAddedItemExist = () => {
    setAddedItemExist('hidden');
  }

  const changeItemQuantity = (itemNum, quantity) => {
    toggleItems[itemNum].item_quantity = quantity + 1;
  }

  const resetStorage = () => {
    localStorage.setItem('items', []);
    localStorage.setItem('clicked', null);
    toggleItemsSet([]);
  }

  useEffect(() => {
    const items = localStorage.getItem('items');
    const previwed = localStorage.getItem('clicked');
  
    if (items) {
      toggleItemsSet(JSON.parse(items));
    }

    if(previwed){
      setViwedProduct(JSON.parse(previwed))
    }
  }, [])

  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Escape') {
        closeAllWindows();
        closeModalWindow();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {

    if (toggleItems.length > 0) {
      localStorage.setItem('items', JSON.stringify(toggleItems));
    }
    
    if(viwedProduct){
      localStorage.setItem('clicked', JSON.stringify(viwedProduct))
    }
    
  }, [toggleItems, viwedProduct])



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <div className="App">
      <ToggleContext.Provider value=
        {{
          resetStorage,
          approvedItem,
          changeItemQuantity,
          setAdditionWindowItem
        }}>

        <Navbar visibility={currencyVisibilityStr} downArrow={downArrow} onCategorySelection={onCategorySelection}
          categoryesVisibility={categoryesVisibility} categorySelectorUp={categorySelectorUp} setCategor={setCategory}
          categorySelectorDown={categorySelectorDown} onSelectCategory={onSelectCategory} cartItemsQuantityIcon={toggleItems.length}
          closeAllWindows={closeAllWindows} openAndCloseToggle={OpenAndCloseToggle} changeCategoryValue={ChangeCategoryValue}
          openAndCloseCurrencySelection={OpenAndCloseCurrencySelection} onSelectCurrency={OnSelectCurrency} menuToggler={menuToggler}
          openAndCloseMenuToggler={openAndCloseMenuToggler} setOpenFilter={setOpenFilter} setFilterVisibility={setFilterVisibility}
          setReloadSelectors={setReloadSelectors} closeModalWindow={closeModalWindow} 

        />
        <div style={{ position: 'relative' }}>
          <ItemAddedNotificatin visibility={addedItemNotification} hideAddedItemNotification={hideAddedItemNotification} />
          <ItemAlreadyAdded visibility={addedItemExist} hideAddedItemExist={hideAddedItemExist} />
          <Modal isOpened={toggleVisibilitySrt} closeModalWindow={closeModalWindow} />
          <Toggle cartItems={toggleItems} isVisibele={toggleVisibilitySrt} currencySelector={currency}
            OpenAndCloseToggle={OpenAndCloseToggle} changeItemQuantity={changeItemQuantity}
          />
          <Routes>
            <Route path='/' element={

              <Products
                products={data.categories[category].products} setVisibility={toggleVisibilitySrt}
                DarkTheme={DarkTheme} getNeededProduct={viwedProductSetting}
                cartDarkTheme={cartDarkTheme} currencySelector={currency} closeModalWindow={closeModalWindow}
                closeAllWindows={closeAllWindows} productsCategoryName={productsCategoryName} additionProduct={additionProduct}
                additionWindow={additionWindow} openFilter={openFilter} setOpenFilter={setOpenFilter} filterVisibility={filterVisibility}
                setFilterVisibility={setFilterVisibility} reloadSelectors={reloadSelectors}
              />
            }
            />
            <Route path='/cart-items' element={<Cart items={toggleItems} currencySelector={currency} />} />
            <Route path='/preview' element={
              <Preview needed_product={viwedProduct} setNeededProduct={viwedProductSetting}
                currencySelector={currency} approvedItem={approvedItem} />
            } />
          </Routes>
        </div>
      </ToggleContext.Provider>
    </div>
  );
}

export default App;
