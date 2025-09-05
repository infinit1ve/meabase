import '@flaticon/flaticon-uicons/css/all/all.css';
import './fonts.css'

import RecipeCard from './RecipeCard/recipeCard'

export default function Home() {
  return (
    <>
      <RecipeCard name='Lasagna' cookMinutes={8592} servings={121346}/>
      <RecipeCard name='Lasagna' cookMinutes={8592} servings={121346}/>
      <RecipeCard name='Lasagna' cookMinutes={8592} servings={121346}/>
      <RecipeCard name='Lasagna' cookMinutes={8592} servings={121346}/>
    </>
  );
};