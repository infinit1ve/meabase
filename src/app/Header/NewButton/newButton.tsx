"use client"

import styles from './newButton.module.css';
import PlusIcon from '../../icons/plus-small.svg';
import { useRouter } from 'next/navigation';

function NewButton() {

  const router = useRouter();

  return(
    <button onClick={() => router.push('/new')} className={styles.button}>
      <PlusIcon className={styles.icon}/>
      <h5 className={styles.text}>New</h5>
    </button>
  );
}

export default NewButton