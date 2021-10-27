import styles from './Product.module.scss';
import NavBar from '../../components/NavBar';
import ProductInformation from "./../../components/ProductInformation";

const Product = () => {

  //use id params and asyngh/await to fetch data:
  const name = "Product Name Here";
  const image = "Image url here";

  const gClasses = [styles.Product__gradient, styles.Product__gradient_2]

  return (
    <div>
      <img href={ image } className={ styles.Product__image }/>
      <div id="productImgWindow" className={ styles.Product__imgWindow }>
        <div id="productGradient" className={ styles.Product__gradient }></div>
        <NavBar />
        <div id="productGradient2" className={ gClasses.join(" ") }>
          <h1 className={ styles.Product__title }>
            { name }
          </h1>
        </div>
      </div>
      <ProductInformation className={ styles.Product__productInformation }/> 
    </div>
  )
}

export default Product;