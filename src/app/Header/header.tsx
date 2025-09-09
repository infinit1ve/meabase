import styles from './header.module.css'
import HamburgerIcon from '../icons/menu-burger.svg'

function Header() { // bigger clickable area on hamburgermenu and cursor pointer
  return(
    <>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <div>
            <HamburgerIcon className={styles.icon}/> 
            <h1>Meabase</h1>
          </div>
          <div>

          </div>
        </div>
        <div className={styles.headerEmptySpace}/>
      </header>
      <div className={styles.headerExclude}/>
    </>
  );
}

export default Header