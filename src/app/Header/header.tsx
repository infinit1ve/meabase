import styles from './header.module.css'
import HamburgerIcon from '../icons/menu-burger.svg'
import NewButton from './NewButton/newButton';

function Header() { // bigger clickable area on hamburgermenu and cursor pointer
  return(
    <>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <div className={styles.menuLogo}>
            <div className={styles.button}>
              <HamburgerIcon className={styles.icon}/> 
            </div>
            <h1>Meabase</h1>
          </div>
          <NewButton/>
        </div>
        <div className={styles.headerEmptySpace}/>
      </header>
      <div className={styles.headerExclude}/>
    </>
  );
}

export default Header