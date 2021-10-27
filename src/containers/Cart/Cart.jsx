import styles from './Cart.module.scss';
import NavBar from '../../components/NavBar';
import Carousel from "./../../components/Carousel";

const Cart = () => {

  //if more than 4 cart items, hide carousel
  const classes = "";

  return (
    <div>
      <NavBar />
      <div>

      </div>
      <div className={ classes }>
        <p>Add a favourite to your cart?</p>
        <Carousel />
      </div>
    </div>
  )
}

export default Cart;