import RecipeCard from "../RecipeCard/recipeCard";
import styles from './recipeList.module.css'

function RecipeList() {

  // divide the list into two and make two columns, and put near each other
  // instead of display: grid of flex
  // on bigger viewports maybe switch to flex or more columns

  return(
  <div className={styles.recipeList}>
    <RecipeCard name='Lasagna' cookMinutes={70} prepMinutes={15} servings={4}/>
    <RecipeCard name='The Best Ratatouille' cookMinutes={10} servings={1} image='https://d2vsf1hynzxim7.cloudfront.net/production/media/26345/responsive-images/8489901_FNK_the-best-ratatouille_H___default_2480_1860.webp'/>
    <RecipeCard name='Dark Chocolate & Caramelised Banana Pie' cookMinutes={60} servings={12} image='https://d2vsf1hynzxim7.cloudfront.net/production/media/22745/responsive-images/CCBKN210_3001___default_1077_807.jpg'/>
    <RecipeCard name='California BLT Egg-in-a-Hole' cookMinutes={25} servings={1} image='https://d2vsf1hynzxim7.cloudfront.net/production/media/12521/responsive-images/foodnetwork-image-835c2e85-dd2f-449d-8772-cd20c8ece0a1___default_572_429.webp'/>
  </div>);
}

export default RecipeList;