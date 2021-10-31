import styles from './Cart.module.scss';
import NavBar from '../../components/NavBar';
import Carousel from "./../../components/Carousel";
import CartItem from "./../../components/CartItem";
import { useState, useEffect } from "react";
import { getProducts } from '../../services/products';

const Cart = () => {

  const [plants, setPlants] = useState(null);
  const [cartItems, setCartItems] = useState(null);

  //get data from firestore
  useEffect(() => {
    const gatherProducts = async () => {
      const data = await getProducts();
      setPlants(data);
    }
    gatherProducts();
    console.log(plants.cart);
  }, []);

  const cartItemArr=[];
  

  //if more than 4 cart items, hide carousel
  const favClasses = [ styles.Cart__favBar ];

  //fix correct values
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
          {/* { cartItems && cartItems.map((item) => {
              return <CartItem 
                key={ plant.id }
                id={ plant.id }
                name={ plant.name }
                size={ plant.size }
                light={ plant.light }
                price={ plant.price }
                favourite={ plant.favourite }
                cart={ plant.cart }
                totalItemPrice={ totalItemPrice }
              />
            })} */}
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