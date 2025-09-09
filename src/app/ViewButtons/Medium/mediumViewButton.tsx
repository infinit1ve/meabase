"use client"

import SmallViewIcon from '../../icons/category-alt2.svg'
import stylesActive from './mediumViewButtonActive.module.css'
import styles from './mediumViewButton.module.css'

import { useState } from 'react'

interface button {
  view: boolean
  setView: any
}

function MediumViewButton(props: button) {

  const clickHandler = () => {
    props.setView(false);
  }

  if(props.view) {
    return(
      <div className={stylesActive.button}>
        <SmallViewIcon className={styles.icon}/>
      </div>
    );
  } else {
    return(
      <div onClick={clickHandler} className={styles.button}>
        <SmallViewIcon className={styles.icon}/>
      </div>
    );
  }
}

export default MediumViewButton