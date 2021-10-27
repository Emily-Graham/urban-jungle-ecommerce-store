import styles from './SearchBar.module.scss';
import { search_outline } from "./../../media/icons"

const SearchBar = () => {


  return (
    <form className="searchBar__form" >
      {/* type of search */}
      <select name="searchType" id="searchType" className={styles.searchBar__select}>
        <option value="intitle:" >Title</option>
        <option value="inauthor:">Author</option>
        <option value="subject:">Subject</option>
        <option value="inpublisher:">Publisher</option>
        <option value="">Anywhere</option>
      </select>
      {/* search and submit container  */}
      <div className={ styles.searchBar__searchButtonContainer }>
        <input name="searchPhrase" type="text" placeholder="Find your perfect plant" className={ styles.searchBar__textInput }/>

        {/* submit via button */}
        <button type="submit" className={ styles.searchBar__submit }>
          {/* searchBar__icon */}
          { search_outline }</button>
      </div>
    </form>
  )
}

export default SearchBar;