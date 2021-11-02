import styles from './Carousel.module.scss';
import { new_stamp, sale_stamp } from '../../media/icons';
import { findStatusPlants } from '../../services/products';
// import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [caroItems, setCaroItems] = useState(null);

  //slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  };

  //get data from firestore
  useEffect(() => {
    const gatherCaroItems = async () => {
      const data = await findStatusPlants();
      setCaroItems(data);
    }
    gatherCaroItems();
  }, []);

  let stamp;

  if ( caroItems ) {
    stamp = caroItems.status === "new" ? new_stamp : sale_stamp
  }

  return (
      <Slider { ...settings } className={ styles.Carousel }>
        { caroItems && caroItems.map((item) => {
          return <div className={ styles.Carousel__itembox }>
            <div className={ styles.Carousel__item }>
            <img src={item.image} alt={ item.name } className={ styles.Carousel__image }/>
            <div className={ styles.Carousel__stamp }>{ new_stamp }</div>
            <p className={ styles.Carousel__price }>{`$${item.price.toFixed(2)}`}</p>
            </div>
          </div> 
        })}
      </Slider>
  )
}
  
export default Carousel;