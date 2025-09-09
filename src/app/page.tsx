import RecipeList from './RecipeList/recipeList';
import SearchBar from './SearchBar/searchBar';

export default async function Home() {
  return (
    <>
      <SearchBar/>
      <RecipeList/>
    </>
  );
};