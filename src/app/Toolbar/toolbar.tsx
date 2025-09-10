"use client"

import SearchBar from "../SearchBar/searchBar";
import MediumViewButton from "../ViewButtons/Medium/mediumViewButton";
import SmallViewButton from "../ViewButtons/Small/smallViewButton";
import styles from './toolbar.module.css';
import { useState } from "react";

function Toolbar(props: {setView: any, view: number}) {
  
  return(
    <div className={styles.toolbar}>
      <SearchBar/>
      <SmallViewButton setView={props.setView} view={props.view}/>
      <MediumViewButton setView={props.setView} view={props.view}/>
    </div>
  );
}

export default Toolbar