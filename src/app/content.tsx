import Counter from "./Counter/Counter";
import SmallViewButton from "./ViewButtons/Small/smallViewButton";
import MediumViewButton from "./ViewButtons/Medium/mediumViewButton";
import SearchBar from "./SearchBar/searchBar";
import RecipeList from "./RecipeList/recipeList";

function Content() {
  const styles = {
    margin: '8px'
  };

  return(
    <div style={styles}>
      <SearchBar/>
      <RecipeList/>
      <Counter initialValue={2}/>
      <SmallViewButton state={true}/>
      <MediumViewButton state={false}/>
    </div>
  );
}

export default Content