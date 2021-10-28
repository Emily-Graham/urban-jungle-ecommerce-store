import styles from './Home.module.scss';
import NavBar from "./../../components/NavBar";
import Feature_title from "../../media/Feature_title.jsx";
import Carousel from '../../components/Carousel';
import SearchBar from "./../../components/SearchBar";
import ItemGridCards from "./../../components/ItemGridCards";
import { useState } from "react";

const Home = () => {

  const [isInvisible, setIsInvisible] = useState(true);

  //scroll position
    //changes feature_title height
    //changes sheer opacity
    const sheerClass = isInvisible ? [ styles.Home__sheer ] : [styles.Home__sheer, styles.Home__sheer_visible];

    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log(`scrolling down!`);
        console.log(window.scrollY);
        setIsInvisible(false);
      } else {
        console.log(`scrolling up!`);
        setIsInvisible(true);
        console.log(window.scrollY);
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

      <Feature_title />

      <div id="store" className={ styles.Store }> 

        <div className={ styles.Store__featureContent }>

          <Carousel />

        </div>

        <div className={ styles.Store__itemGrid }>

          <SearchBar />

          <div className={ styles.Store__itemGrid_container }>
            {/* map through itemGrid cards */}
            {/* <ItemGridCards /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;