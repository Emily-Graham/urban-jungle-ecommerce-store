import styles from './Cart.module.scss';
import NavBar from '../../components/NavBar';
import Carousel from "./../../components/Carousel";
import { useState } from "react";

const Cart = () => {

  //if more than 4 cart items, hide carousel
  const favClasses = [ styles.Cart__favBar ];

  return (
    <div className={ styles.Cart }>
      <div id="background" className={ styles.Cart__background_img }></div>

      <div id="sheer" className={ styles.Cart__sheer }></div>

      <NavBar location={ "Cart" }/>
      <h1  className={ styles.Cart__title }>Cart</h1>
      <div id="cartItemContainer" className={ styles.Cart__ItemContainer }></div>

      <div id="favBarContainer" className={ favClasses }>
        <p className={ styles.Cart__favBar_heading }>Add a favourite to your cart?</p>
        <Carousel />
      </div>
      
    </div>
  )
}

export default Cart;