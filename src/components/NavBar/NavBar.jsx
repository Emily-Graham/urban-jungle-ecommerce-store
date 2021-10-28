import styles from './NavBar.module.scss';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { store_outline, store, cart_outline, cart, return_arrow } from "./../../media/icons";

const NavBar = ({ id }) => {

  const path = window.location.pathname;
  console.log("PATH", path); //delete later
  const hash = window.location.hash;
  console.log("HASH", `.${hash}.`); //delete later
  console.log(`/product/${id}`);

  let left = "Home";
  let leftLink = "/#";
  let right1 = store_outline;
  let right1Link = "/#store";
  let right2 = cart_outline;
  let right2Link = "/cart";

  //set icons and paths for different navbars
  if (hash === "#store") {
    right1 = store;
  } else if (path === "/cart") {
    right2 = cart;
  } else if (path === `/product/${id}`) {
    left = return_arrow;
    leftLink = "/#store";
    right1 = "";
    right1Link = "";
  }

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