import Counter from "./Counter/Counter";
import RecipeList from "./RecipeList/recipeList";
import Toolbar from "./Toolbar/toolbar";

function Content() {
  const styles = {
    margin: '8px'
  };

  return(
    <div style={styles}>
      <Toolbar/>
      <RecipeList/>
      <Counter initialValue={2}/>
    </div>
  );
}

export default Content