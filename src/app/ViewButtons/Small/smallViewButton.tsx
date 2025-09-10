"use client"

import SmallViewIcon from '../../icons/category-alt.svg'
import stylesActive from './smallViewButtonActive.module.css'
import styles from './smallViewButton.module.css'

import { useState } from 'react'

interface button {
  view: number
  setView: any
}

function SmallViewButton(props: button) {

  const clickHandler = () => {
    props.setView(0);
  }

  if(props.view == 0) {
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

export default SmallViewButton