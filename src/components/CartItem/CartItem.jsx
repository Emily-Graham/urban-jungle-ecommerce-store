import styles from './CartItem.module.scss';
import { useState } from 'react';

const CartItem = ({ name, quantity, price, thumbnail, sendTotalItemPrice }) => {

  const [cartQty, setCartQty] = useState(1);
  //total item price
  const totalItemPrice=(price*cartQty).toFixed(2);

  //should not exceed item quantity

  
  //useState to watch changing qty 

  return (
    <div className={ styles.CartItem__container }>

      <img src={ thumbnail } className={ styles.CartItem__image }/>

      <div className={ styles.CartItem__textContainer }>
        <p className={ styles.CartItem__name }>{ name }</p>

        <div>
          <div className={ styles.CartItem__qtyContainer }>
            { cartQty }
          </div>
        </div>

        <div className={ styles.CartItem__itemPrice}>
          { `$${ totalItemPrice }` }
        </div>
        
      </div>
    </div>
  )
}

export default CartItem;