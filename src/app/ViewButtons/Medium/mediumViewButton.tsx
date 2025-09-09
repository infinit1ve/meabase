"use client"

import SmallViewIcon from '../../icons/category-alt2.svg'
import stylesActive from './mediumViewButtonActive.module.css'
import styles from './mediumViewButton.module.css'

import { useState } from 'react'

interface button {
  state: boolean
  onClick?: any
}

function MediumViewButton(props: button) {

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

export default MediumViewButton