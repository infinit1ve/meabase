"use client"

import SearchBar from "../SearchBar/searchBar";
import MediumViewButton from "../ViewButtons/Medium/mediumViewButton";
import SmallViewButton from "../ViewButtons/Small/smallViewButton";
import styles from './toolbar.module.css';
import { useState } from "react";

function Toolbar() {

  const [view, setView] = useState(true);
  console.log(view);
  
  return(
    <div className={styles.toolbar}>
      <SearchBar/>
      <SmallViewButton setView={setView} view={view}/>
      <MediumViewButton setView={setView} view={!view}/>
    </div>
  );
}

export default Toolbar