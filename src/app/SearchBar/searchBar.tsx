import SearchIcon from '../icons/search.svg'
import styles from './searchBar.module.css'

function SearchBar() {
  return(
    <div className={styles.searchWrapper}>
      <input placeholder='Search...'/>
      <div>
        <SearchIcon className={styles.icon}/>
      </div>
    </div>
  );
}

export default SearchBar;