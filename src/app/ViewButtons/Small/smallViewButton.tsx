"use client"

import SmallViewIcon from '../../icons/category-alt.svg'
import stylesActive from './smallViewButtonActive.module.css'
import styles from './smallViewButton.module.css'

import { useState } from 'react'

interface button {
  state: boolean
  onClick?: any
}

function SmallViewButton(props: button) {

  const [state, setState] = useState(props.state);

  const clickHandler = () => {
    setState(!state);
    console.log(!state);
  }

  if(state) {
    return(
      <div onClick={clickHandler} className={stylesActive.button}>
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