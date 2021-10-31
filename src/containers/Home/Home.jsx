import styles from './Home.module.scss';
import NavBar from "./../../components/NavBar";
import FeatureTitle from "../../media/FeatureTitle.jsx";
import Carousel from '../../components/Carousel';
import SearchBar from "./../../components/SearchBar";
import ItemGridCards from "./../../components/ItemGridCards";

import { useState } from "react";
import { useEffect } from "react";
import { findCartPlants, getProducts } from '../../services/products';

const Home = () => {
  const [plants, setPlants] = useState(null);
  const [isInvisible, setIsInvisible] = useState(true);

  //get data from firestore
  useEffect(() => {
    const gatherProducts = async () => {
      const data = await getProducts();
      setPlants(data);
    }
    gatherProducts();
    //get cart plants
    console.log(findCartPlants());
  }, []);

  //scroll position styling
  const sheerClass = isInvisible ? [ styles.Home__sheer ] : [styles.Home__sheer, styles.Home__sheer_visible];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsInvisible(false);
    } else {
      setIsInvisible(true);
    }
  };
    
  window.addEventListener("scroll", handleScroll);

  

  return (
    <div className={ styles.Home }>

      <div id="background" className={ styles.Home__background_img }></div>

      <div id="sheer" className={ sheerClass.join(" ") }></div>

      <div id="homeGradient" className={ styles.Home__gradient }></div>

      <NavBar location={ Home }/>

      <div id="landingPageSpace" className={ styles.Home__landingPageSpace }></div>

      <FeatureTitle />

      <div id="store" className={ styles.Store }> 

        <div className={ styles.Store__featureContent }>
          <Carousel />
        </div>

        <div className={ styles.Store__itemGrid }>
          <SearchBar />
          <div className={ styles.Store__itemGrid_container }>
            { plants && plants.map((plant) => {
              return <ItemGridCards 
                key={ plant.id }
                id={ plant.id }
                name={ plant.name }
                size={ plant.size }
                light={ plant.light }
                price={ plant.price }
                favourite={ plant.favourite }
                cart={ plant.cart }
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;