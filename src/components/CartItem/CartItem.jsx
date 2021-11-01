import styles from './CartItem.module.scss';
import { addButton, subtractButton } from '../../media/icons';
import { useState, useEffect } from 'react';

const CartItem = ({ name, quantity, price, thumbnail, totalCartPrice, setTotalCartPrice }) => {
  const [cartQty, setCartQty] = useState(1);
  useEffect(()=>{
    setTotalCartPrice(totalCartPrice => totalCartPrice = totalCartPrice + price);console.log("PRICE", totalCartPrice);
  }, [])
  

  //total item price
  const totalItemPrice=(price*cartQty).toFixed(2);

  //totalCartPrice increments with change in cartQty
  const incrementTotal = () => {
    if ( cartQty < quantity ) {
      setCartQty(cartQty + 1);
    setTotalCartPrice(totalCartPrice + price);
    }
  }
  const decrementTotal = () => {
    if ( cartQty > 0 ){
      setCartQty(cartQty - 1);
      setTotalCartPrice(totalCartPrice - price);
    }
  }

  return (
    <div className={ styles.CartItem__container }>

      <img src={ thumbnail } className={ styles.CartItem__image }/>

      <div className={ styles.CartItem__textContainer }>
        <p className={ styles.CartItem__name }>{ name }</p>

        <div className={ styles.CartItem__qtyContainer }>
          <button className={ styles.CartItem__button} onClick={ decrementTotal }>{ subtractButton }</button> 
          { cartQty }
          <button className={ styles.CartItem__button} onClick={ incrementTotal }>{ addButton }</button>
        </div>

        <div className={ styles.CartItem__itemPrice}>
          { `$${ totalItemPrice }` }
        </div>
        
      </div>
    </div>
  )
}

export default CartItem;