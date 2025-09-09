import RecipeList from './RecipeList/recipeList';
import SearchBar from './SearchBar/searchBar';
import MediumViewButton from './ViewButtons/Medium/mediumViewButton';
import SmallViewButton from './ViewButtons/Small/smallViewButton';

export default async function Home() {
  return (
    <>
      <SmallViewButton state={false}/>
      <MediumViewButton state={true}/>
      <SearchBar/>
      <RecipeList/>
    </>
  );
};