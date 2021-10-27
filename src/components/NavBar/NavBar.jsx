import styles from './NavBar.module.scss';
import { store_outline, store, cart_outline, cart } from "./../../media/icons";

const NavBar = () => {

  let left = "Home";
  let right1 = store_outline;
  let right2 = cart_outline;

  //right = store_outline, cart_outline
  //if location is home
    //return
  //else if location is home/store
    //right = store, cart_outline
  //else if location = :id
    //left = Return Arrow
    //right = cart
  //else 
    //right = store_outline, cart

  return (
    <div className={ styles.NavBar }>
      <a className={ styles.NavBar__home }>{ left }</a>
      <div>
        <a className={ styles.right1 }>{ right1 }</a>
        <a>{ right2 }</a>
      </div>
    </div>
  )
}

export default NavBar;