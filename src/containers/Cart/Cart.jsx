import styles from './Cart.module.scss';
import NavBar from '../../components/NavBar';
import Carousel from "./../../components/Carousel";
import CartItem from "./../../components/CartItem";
import { useState } from "react";

const Cart = () => {

  //if more than 4 cart items, hide carousel
  const favClasses = [ styles.Cart__favBar ];

  // const gettotalPrice = () => {
  //   for (let i = 0; i < noOfCartItems; i++){

  //   }
  // }
  //get id of each CartItem, and set that as the key. Then, use the key to get the totalItemPrice and add them. 
  const totalCartPrice = "$101.60";
  const totalItemPrice = "cartQty*price";
  const priceTally = [styles.Cart__tallySection, styles.Cart__tallySection_price].join(" ");

  return (
    <div className={ styles.Cart }>

      <div id="background" className={ styles.Cart__background_img }></div>

      <div id="sheer" className={ styles.Cart__sheer }></div>

      <NavBar location={ "Cart" }/>

      <h1  className={ styles.Cart__title }>Cart</h1>

      <div id="cartItemContainer" className={ styles.Cart__ItemContainer }>
        
        <div id="cartItems" className={ styles.Cart__items }>
          {/* map cart items here */}
          <CartItem totalItemPrice={ totalItemPrice }/>
        </div>

        <div id="tallyContainer" className={ styles.Cart__tallyContainer } > 
          <form  className={ styles.Cart__tallySection }>
            <div type="text" className={ styles.Cart__couponInput }>Coupon Code</div>
            <button className={ styles.Cart__couponButton }>Apply</button>
          </form>
          <div className={ priceTally }><p className={ styles.Cart__tallySection_shipping }>Shipping:</p><p className={ styles.Cart__tallySection_shipping }>$9.50</p></div>
          <div className={ priceTally }><p className={ styles.Cart__tallySection_total }>Total:</p><p className={ styles.Cart__tallySection_total }>{ totalCartPrice }</p></div>
          <button className={ styles.Cart__purchaseButton }>Purchase</button>
          

        </div>
      </div>

      <div id="favBarContainer" className={ favClasses }>
        <p className={ styles.Cart__favBar_heading }>Add a favourite to your cart?</p>
        <Carousel />
      </div>
      
    </div>
  )
}

export default Cart;