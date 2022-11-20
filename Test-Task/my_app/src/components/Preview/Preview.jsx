import React, {useState} from 'react';
import PreviewUnits_Lg from './PreviewUnits/PreviewUnits_Lg';
import PreviewUnits_Sm from './PreviewUnits_Sm/PreviewUnits_Sm';
import { Link } from 'react-router-dom';

import classes from './Preview.module.css'
import Buttons from './Buttons/Buttons';
import Color from './Color/Color';

function Preview({ needed_product, currencySelector, setCartItems }) {

  const [itemImage, setItemImage] = useState(0);

  const ChangeItemImage = (image) => {
    setItemImage(image);
  }
  
  return (

    needed_product.gallery != null && needed_product.attributes  != null  ?

    <div className={classes.preview_container} >
      <div className={classes.preview_insider}>
        <div className={classes.preview_items}>
          <div className={classes.picture_icon}>
            {needed_product.gallery.map((image, index) => (<PreviewUnits_Lg key={image} image={image} id={index}
            unitId={needed_product.id} itemImage={ChangeItemImage} index={index}/>))}
          </div>
          <div className={classes.image_container}>
            <img src={needed_product.gallery[itemImage]} alt="" className={classes.preview_image} />
          </div>
        </div>
        <div className={classes.selection_items}>
          <div className={classes.selection_tems_container}>
            <div className={classes.name_and_title}>
              <h1 className={classes.item_name}>{needed_product.brand}</h1>
              <h1 className={classes.item_title}>{needed_product.name}</h1>
            </div>
            <div className={classes.selection_buttons}>
              <div className={classes.size_title}>
                <h1 className={classes.size_title_text}>SIZE:</h1>
              </div>
              <div className={classes.size_buttons_container}>
                <div className={classes.size_buttons}>
                  {needed_product.category == 'clothes' ?
                    needed_product.attributes[0].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[0].id != null &&
                    needed_product.attributes[0].id.includes('Color') == false ?
                    needed_product.attributes[0].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
                    needed_product.attributes[1].id.includes('Color') == false ?
                    needed_product.attributes[1].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>))
                    : <span className={classes.no_size_span}>No Size</span>}
                </div>
              </div>
              <div className={classes.color_and_title}>
                <h1 className={classes.color_title_text}>COLOR</h1>
                <div className={classes.color_button_container}>
                    {needed_product.category == 'clothes' && needed_product.attributes != null && needed_product.attributes.lenght > 0 
                    && needed_product.attributes[0].id.includes('Color') ? needed_product.attributes[0].items.map((size, index) => 
                    (<Color key={size.id} color={size.value} id={index}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[0].id != null &&
                    needed_product.attributes[0].id.includes('Color') == true ?
                    needed_product.attributes[0].items.map((size, index) => (<Color key={size.id} color={size.value} id={index}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
                    needed_product.attributes[1].id.includes('Color') == true ?
                    needed_product.attributes[1].items.map((size, index) => (<Color key={size.id} color={size.value} id={index}/>))
                    : <span className={classes.no_size_span}>No Color Selection</span>} 
                </div>
                <h1 className={classes.price_title}>PRICE:</h1>
              </div>
            </div>
            <div className={classes.confirm_container}>
              <h1 className={classes.price_title_presenter}>{needed_product.prices[currencySelector].currency.symbol + ' ' 
              + needed_product.prices[currencySelector].amount}</h1>
              <button className={classes.add_to_cart} onClick={() => {
                setCartItems(needed_product);
              }}>ADD TO CARD</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.items_icons_sm}>
        <div className={classes.items_icon_container}>
          {needed_product.gallery.map((image, index) => (<PreviewUnits_Sm key={image} image={image} id={index} 
          unitId={needed_product.id} itemImage={ChangeItemImage}/>))}
        </div>
      </div>
      <div className={classes.selection_items_sm}>
      <div className={classes.selection_tems_container}>
            <div className={classes.name_and_title}>
              <h1 className={classes.item_name}>{needed_product.brand}</h1>
              <h1 className={classes.item_title}>{needed_product.name}</h1>
            </div>
            <div className={classes.selection_buttons}>
              <div className={classes.size_title}>
                <h1 className={classes.size_title_text}>SIZE:</h1>
              </div>
              <div className={classes.size_buttons_container}>
                <div className={classes.size_buttons}>
                  {needed_product.category == 'clothes' ?
                    needed_product.attributes[0].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[0].id != null &&
                    needed_product.attributes[0].id.includes('Color') == false ?
                    needed_product.attributes[0].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
                    needed_product.attributes[1].id.includes('Color') == false ?
                    needed_product.attributes[1].items.map((size, index) => (<Buttons key={size.id} size={size.value} id={index} 
                    identifier={needed_product.id}/>))
                    : <span className={classes.no_size_span}>No Size</span>}
                </div>
              </div>
              <div className={classes.color_and_title}>
                <h1 className={classes.color_title_text}>COLOR</h1>
                <div className={classes.color_button_container}>
                    {needed_product.category == 'clothes' && needed_product.attributes != null && needed_product.attributes.lenght > 0 
                    && needed_product.attributes[0].id.includes('Color') ? needed_product.attributes[0].items.map((size, index) => 
                    (<Color key={size.id} color={size.value} id={index}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[0].id != null &&
                    needed_product.attributes[0].id.includes('Color') == true ?
                    needed_product.attributes[0].items.map((size, index) => (<Color key={size.id} color={size.value} id={index}/>)) :
                    needed_product.category == 'tech' && needed_product.attributes.length > 0 && needed_product.attributes[1].id != null &&
                    needed_product.attributes[1].id.includes('Color') == true ?
                    needed_product.attributes[1].items.map((size, index) => (<Color key={size.id} color={size.value} id={index}/>))
                    : <span className={classes.no_size_span}>No Color Selection</span>} 
                </div>
                <h1 className={classes.price_title}>PRICE:</h1>
              </div>
            </div>
            <div className={classes.confirm_container}>
              <h1 className={classes.price_title_presenter}>{needed_product.prices[currencySelector].currency.symbol + ' ' 
              + needed_product.prices[currencySelector].amount}</h1>
              <button className={classes.add_to_cart} onClick={() => {
                setCartItems(needed_product);
              }}>ADD TO CARD</button>
            </div>
          </div>
      </div>
      <div className={classes.link_container}>
        <div className={classes.link_container_left}></div>
        <div className={classes.link_container_right}>
          <a className={classes.link_text_title}>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</a>
        </div>
      </div>
    </div> :
    <div className={classes.empty_product_warning}> <h1  color='primary'>{':( Usp '}  Something Went Wrong Please Try Again </h1> 
      <Link to='/' className={classes.link_decoration}>Click here</Link>
     </div>
    

  )
}

export default Preview