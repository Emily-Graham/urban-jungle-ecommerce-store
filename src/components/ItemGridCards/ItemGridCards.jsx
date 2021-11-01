import styles from './ItemGridCards.module.scss';
import { favouriteFalse, favouriteTrue } from '../../media/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { updatePlant } from "./../../services/products";

const ItemGridCards = ({ name, size, light, price, favourite, id, cart, thumbnail }) => {

  const [favValue, SetFavValue ] = useState(favourite);

  const favouriteIcon = favourite ? favouriteTrue : favouriteFalse;

  const toggleFav = async () => {
    SetFavValue(!favValue);
    const newBoolean = { favourite : favValue }
    await updatePlant( id, newBoolean);
  }

  return (
    <Link to={ `/product/${id}` } className={ styles.ItemGridCards }>
      <img src={ thumbnail } className={ styles.ItemGridCards__image } alt="" />

      <button className={ styles.ItemGridCards__favIcon } onClick={ toggleFav }>{ favouriteIcon }</button>

      <div className={ styles.ItemGridCards__descContainer }>
        
        <p className={ styles.ItemGridCards__name }>{ name }</p>
        <div>
          <p className={ styles.ItemGridCards__text }>{ `size: ${size}` }</p>
          <p className={ styles.ItemGridCards__text }>{ light }</p>
        </div>
        <span className={ styles.ItemGridCards__spanBar }>
          <p className={ styles.ItemGridCards__price }>{ `$${price.toFixed(2)}` }</p>
          <button className={ styles.ItemGridCards__button }>{ cart && cart ? "Delete in Cart": "Add to Cart" }</button> 
        </span>
      </div>

    </Link>
  )
}

export default ItemGridCards;