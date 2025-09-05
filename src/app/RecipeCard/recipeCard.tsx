import styles from './recipeCard.module.css';
interface RecipeCard {
  name: string;
  image?: string;
  cookMinutes?: number;
  servings?: number;
}

function RecipeCard(props: RecipeCard) {
  const placeholderImage: string = 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg';
  
  var formattedCookTime: string = '';
  if(props.cookMinutes) {
    var formattedCookTime = (() => {
    const hours = Math.floor(props.cookMinutes / 60);
    const minutes = props.cookMinutes % 60;
  
    const hourText = hours ? `${hours} hour${hours > 1 ? 's' : ''} ` : '';
    const minuteText = minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  
    return hourText + minuteText;
    })();
  }

  return(<div className={styles.recipeCard}>
    <img src={props.image ? props.image : placeholderImage}/>
    <div className={styles.recipeInfo}>
      <h2>{props.name}</h2>
      <div className={styles.recipeProperties}>
        {props.cookMinutes ? <div><i className="fi fi-tr-clock-three"></i><p>{formattedCookTime}</p></div> : <></>}
        {props.servings ? <div><i className="fi fi-tr-plate-utensils"></i><p>{`${props.servings} serving${props.servings > 1 ? 's' : ''}`}</p></div> : <></>}
      </div>
    </div>
  </div>);
}

export default RecipeCard;