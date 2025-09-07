import RecipeList from './RecipeList/recipeList';
import AddRecipeButton from './AddRecipeButton/addRecipeButton';

export default async function Home() {
  return (
    <>
      <RecipeList/>
      <AddRecipeButton/>
    </>
  );
};