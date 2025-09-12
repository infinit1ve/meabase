"use client"

import Counter from "./Counter/Counter";
import RecipeList from "./RecipeList/recipeList";
import Toolbar from "./Toolbar/toolbar";
import styles from './content.module.css'
import { useState } from "react";

function Content() {

  const [view, setView] = useState(0);

  return(
    <div className={styles.main}>
      <Toolbar setView={setView} view={view}/>
      <RecipeList view={view}/>
      <Counter initialValue={2}/>
    </div>
  );
}

export default Content