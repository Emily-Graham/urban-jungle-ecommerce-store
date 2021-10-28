import styles from './CartItem.module.scss';

const CartItem = ({ name, quantity, price, status, thumbnail, totalItemPrice }) => {

  //should not exceed item quantity
  let cartQty;

  //display total price
  
  //useState to watch changing qty 

  return (
    <div className={ styles.CartItem__container }>

      <img href={ thumbnail } className={ styles.CartItem__image }/>

      <p className={ styles.CartItem__name }>{ name }</p>

      <div className={ styles.CartItem__qtyContainer }>
        { cartQty }
      </div>

      <div>
        { totalItemPrice }
      </div>
      
    </div>
  )
}

export default CartItem;