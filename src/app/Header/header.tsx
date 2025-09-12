"use client"

import styles from './header.module.css'
import HamburgerIcon from '../icons/menu-burger.svg'
import NewButton from './NewButton/newButton';
import { useWindowWidth } from '@react-hook/window-size';

function Header() { 
  const width = useWindowWidth();
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
          {width < 601 ? <NewButton/> : ''}
        </div>
        <div className={styles.headerEmptySpace}/>
      </header>
      <div className={styles.headerExclude}/>
    </>
  );
}

export default Header

// Menu structure

// Add Recipe
// Favourites
// My Recipes
// Tags
// 
// Settings