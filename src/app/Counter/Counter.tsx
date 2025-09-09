"use client"

import styles from './counter.module.css'
import MinusIcon from '../icons/minus-small.svg'
import PlusIcon from '../icons/plus-small.svg'

import { useState } from 'react'

function Counter(props: {initialValue: number}) {
  const [ value, setValue ] = useState(props.initialValue);

  type Option = { name: string; value: number }

  const possibleValues: Option[] = [ {name: '1/4', value: 0.25}, {name: '1/2', value: 0.5}, {name: '1', value: 1}, {name: '2', value: 2}, {name: '3', value: 3}, {name: '4', value: 4}, {name: '5', value: 5} ]

  const incrementHandler = () => {
    if (value < possibleValues.length - 1) {
      setValue(value + 1);
    }
  }

  const decrementHandler = () => {
    if (value) {
      setValue(value - 1);
    }
  }

  return(
    <div className={styles.counter}>
      <div className={styles.button} onClick={decrementHandler}>
        <MinusIcon className={styles.icon}/>
      </div>
      <p>{possibleValues[value].name}</p>
      <div className={styles.button} onClick={incrementHandler}>
        <PlusIcon className={styles.icon}/>
      </div>
    </div>
  );
}

export default Counter