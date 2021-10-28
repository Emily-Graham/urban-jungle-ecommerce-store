import styles from './NavBar.module.scss';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { store_outline, store, cart_outline, cart } from "./../../media/icons";

const NavBar = ({ location }) => {

  let left = "Home";
  let leftLink = "/#";
  let right1 = store_outline;
  let right1Link = "/#store";
  let right2 = cart_outline;
  let right2Link = "/cart";

  //right = store_outline, cart_outline
  if (location === "Home") {
    right1Link = "/#store";
  } else if (location === "Cart") {
    right2 = cart;
  } else if (location === "Store") {
    right1 = store;
  }
    
  //else if location is home/store
    //right = store, cart_outline
  //else if location = :id
    //left = Return Arrow
    //right = cart
  //else 
    //right = store_outline, cart

  return (
    <div className={ styles.NavBar }>
      <HashLink smooth to={ leftLink } className={ styles.NavBar__home }>{ left }</HashLink>
      <div>
        <HashLink smooth to={ right1Link } className={ styles.right1 } >{ right1 }</HashLink>
        <Link to={ right2Link } >{ right2 }</Link>
      </div>
    </div>
  )
}

export default NavBar;