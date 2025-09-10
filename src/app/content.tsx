"use client"

import Counter from "./Counter/Counter";
import RecipeList from "./RecipeList/recipeList";
import Toolbar from "./Toolbar/toolbar";
import { useState } from "react";

function Content() {
  const styles = {
    margin: '8px',
  };

  const [view, setView] = useState(0);

  return(
    <div style={styles}>
      <Toolbar setView={setView} view={view}/>
      <RecipeList view={view}/>
      <Counter initialValue={2}/>
    </div>
  );
}

export default Content