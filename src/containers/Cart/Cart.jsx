import styles from './Cart.module.scss';
import NavBar from '../../components/NavBar';
import Carousel from "./../../components/Carousel";
import CartItem from "./../../components/CartItem";
import { useState, useEffect } from "react";
import { findCartPlants } from '../../services/products';

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  //get data from firestore
  useEffect(() => {
    const gatherCartItems = async () => {
      const data = await findCartPlants();
      setCartItems(data);
    }
    gatherCartItems();
  }, []);

  //if more than 4 cart items, hide carousel
  const favClasses = [ styles.Cart__favBar ];

  return (
    <div className={ styles.Cart }>

      <div id="background" className={ styles.Cart__background_img }></div>

      <div id="sheer" className={ styles.Cart__sheer }></div>

      <NavBar location={ "Cart" }/>

      <h1  className={ styles.Cart__title }>Cart</h1>

      <div id="cartItemContainer" className={ styles.Cart__ItemContainer }>
        
        <div id="cartItems" className={ styles.Cart__items }>
          { cartItems && cartItems.map((item) => {
              return <CartItem 
                key={ item.id }
                name={ item.name }
                price={ item.price }
                quantity={ item.quantity }
                thumbnail={ item.thumbnail }
                totalCartPrice={ totalCartPrice }
                setTotalCartPrice={ setTotalCartPrice }
              />
            })}
        </div>

        <div id="tallyContainer" className={ styles.Cart__tallyContainer } > 
          <form  className={ styles.Cart__tallySection }>
            <div type="text" className={ styles.Cart__couponInput }>Coupon Code</div>
            <button className={ styles.Cart__couponButton }>Apply</button>
          </form>
          <div className={ styles.Cart__tallySection_price }><p className={ styles.Cart__tallySection_shipping }>Shipping:</p><p className={ styles.Cart__tallySection_shipping }>$9.50</p></div>
          <div className={ styles.Cart__tallySection_price }><p className={ styles.Cart__tallySection_total }>Total:</p><p className={ styles.Cart__tallySection_total }>{ `$${totalCartPrice.toFixed(2)}` }</p></div>
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