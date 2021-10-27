import styles from './Home.module.scss';
import NavBar from "./../../components/NavBar";
import { feature_title } from "./../../media/feature_title.jsx";
import Carousel from '../../components/Carousel';
import SearchBar from "./../../components/SearchBar";
import ItemGridCards from "./../../components/ItemGridCards";



const Home = () => {

  //feature_title dispalys 25% from top of 200vh homepage

  //scroll position
    //changes feature_title height
    //changes sheer opacity
    //changes gradient opacity

  return (
    <div className={ styles.Home }>

      <div id="background" className={ styles.Home__background_img }></div>

      {/* <div id="sheer" className={ styles.Home__sheer }></div> */}

      <div id="homeGradient" className={ styles.Home__gradient }></div>

      <NavBar />
      { feature_title }
      <div id="booster" className={ styles.booster }></div>
     
      
    </div>
  )
}

export default Home;

//<div id="store" className={ styles.Store }>
        //<div className={ styles.Store__content }>
          //<Carousel />
          //<div className={ styles.Store__itemGrid }>
            //<SearchBar />
            //<div className={ styles.Store__itemGrid_container }>
              {/* map through itemGrid cards */}
              //<ItemGridCards />
            //</div>
          //</div>
        //</div>
     // </div>