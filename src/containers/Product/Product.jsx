import styles from './Product.module.scss';
import NavBar from '../../components/NavBar';
// import ProductInformation from "./../../components/ProductInformation";
import { useParams } from 'react-router';
import { favouriteFalse, favouriteTrue } from '../../media/icons';

const Product = () => {

  const parameter = useParams();

  //use id params and asyngh/await to fetch data:
  const name = "Product Name Here";
  const price = "37.20";
  const favourite = true;
  const image = "image";
  const productId = "22";
  const productStatus = "Sale";
  const size = "23cm";
  const description = "yup yup";
  const displayPrice = `$${ price }`;
  const favouriteIcon = favourite ? favouriteTrue : favouriteFalse;

  return (
    <div>
      <div className={ styles.Product__backgroundImage }></div>
      <div id="sheer" className={ styles.Product__sheer }></div>

      <img src={ image } className={ styles.Product__image } alt="" />

      <div id="productImgWindow" className={ styles.Product__imgWindow }>

        <div id="productGradient" className={ styles.Product__gradient }></div>

        <div id="productGradient2" className={ styles.Product__gradient_2 }>
          <h1 className={ styles.Product__title }>
            { name }
          </h1>
        </div>

      </div>

      <NavBar id={ productId }/>

      <div id="productInformation" className={ styles.Product__productInformation }>
        <p className={ styles.Product__status }>{ productStatus.toUpperCase() }</p>
        <p className={ styles.Product__text }>{ size }</p>
        <p className={ styles.Product__text }>{ description }</p>
        <span className={ styles.Product__spanBar }>
          <p className={ styles.Product__price }>{ displayPrice }</p>
          <div className={ styles.Product__buttonBar } >
            { favouriteIcon }
            <button className={ styles.Product__button }>Add to Cart</button> 
          </div>
        </span>
      </div> 
    </div>
  )
}

export default Product;