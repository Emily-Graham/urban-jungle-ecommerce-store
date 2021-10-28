import styles from './SearchBar.module.scss';
import { search_outline } from "./../../media/icons"

const SearchBar = () => {


  return (
    <form className={ styles.searchBar__form } >

      {/* type of search */}
      <select name="searchType" id="searchType" className={styles.searchBar__select}>
        <option value="name" >Name</option>
        <option value="careLevel">Care Level</option>
        <option value="priceLH">Lowest Price</option>
        <option value="priceHL">Highest Price</option>
      </select>

      <div className={ styles.searchBar__searchButtonContainer }>

        <input name="searchPhrase" type="text" placeholder="Find your perfect plant" className={ styles.searchBar__textInput }/>

        <button type="submit" className={ styles.searchBar__submit }>
          {/* searchBar__icon */}
          { search_outline }</button>

      </div>
    </form>
  )
}

export default SearchBar;