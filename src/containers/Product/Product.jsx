import styles from './Product.module.scss';
import NavBar from '../../components/NavBar';
import SimilarImg from "./../../components/SimilarImg";
import { favouriteFalse, favouriteTrue } from '../../media/icons';

import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { findPlant, updatePlant } from '../../services/products';
 
const Product = () => {

  const [favValue, setFavValue ] = useState(null);
  const [cartValue, setCartValue ] = useState(null);
  const [plant, setPlant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const addPlantInfo = async () => {
      const data = await findPlant(id);
      setPlant(data);
      if (favValue === null){
        setFavValue(data.favourite);
      }
      if (cartValue === null){
        setCartValue(data.cart);
      }
    }
    addPlantInfo();
    console.log("new Fav", favValue);
  }, [id, favValue, cartValue])

  //when toggling the favButton
  const toggleFav = async () => {
    const newBoolean = { favourite : !favValue }
    setFavValue(newBoolean.favourite);
    await updatePlant( id, newBoolean);
  }

  //when clicking 'add to cart'
  const toggleCart = async () => {
    const newBoolean = { cart : !cartValue };
    setCartValue(newBoolean.cart);
    await updatePlant( id, newBoolean);
  }

  //mapthrough product similar plants
  const similarSrc= "yep";
 
  return (
    <div>
      <div className={ styles.Product__backgroundImage }></div>
      <div id="sheer" className={ styles.Product__sheer }></div>

      <img src={ plant && plant.image } className={ styles.Product__image } alt="" />

      <div id="productImgWindow" className={ styles.Product__imgWindow }>

        <div id="productGradient" className={ styles.Product__gradient }></div>

        <div id="productGradient2" className={ styles.Product__gradient_2 }>
          <h1 className={ styles.Product__title }>
            { plant && plant.name }
          </h1>
        </div>

      </div>

      <NavBar id={ plant && plant.id }/>

      <div id="productInformation" className={ styles.Product__productInformation }>
        <p className={ styles.Product__status }>{ plant && plant.status.toUpperCase() }</p>
        <p className={ styles.Product__text }>{ `Size: ${plant && plant.size}` }</p>
        <p className={ styles.Product__text }>{ plant && plant.description }</p>
        <span className={ styles.Product__spanBar }>
          <p className={ styles.Product__price }>{ `$${ plant && plant.price.toFixed(2) }` }</p>
          <div className={ styles.Product__buttonBar } >

            <button className={ styles.Product__favButton} onClick={ toggleFav }>{ plant && plant.favourite ? favouriteTrue : favouriteFalse }</button>

            <button className={ styles.Product__button } onClick={ toggleCart }>{ cartValue && cartValue ? "Delete in Cart": "Add to Cart" }</button> 

          </div>
        </span>
      </div> 
      <div className={ styles.Product__similarContainer }>
        <p className={ styles.Product__text_white }>Similar to this plant:</p>
        {/* map through */}
        <SimilarImg similarSrc={ similarSrc }/>
      </div>
      
    </div>
  )
}

export default Product;