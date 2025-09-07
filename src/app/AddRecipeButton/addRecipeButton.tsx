"use client"

import styles from './addRecipeButton.module.css'
import { useRouter  } from 'next/navigation';

function AddRecipeButton() {
  const router = useRouter();
  const handleAddRecipe = () => {
    router.push('/new')
  }

  return(
    <button onClick={handleAddRecipe} className={styles.addRecipeButton}><i className="fi fi-tr-plus-small"></i><p> Add Recipe</p></button>
  );
}

export default AddRecipeButton;