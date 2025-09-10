import styles0 from './recipeCardSmall.module.css';
import styles1 from './recipeCardMedium.module.css';

interface RecipeCard {
  key: number,
  view: number,
  name: string;
  image?: string;
  cookMinutes?: number;
  prepMinutes?: number;
  servings?: number;
}

import ClockIcon from '../icons/clock-three.svg';
import PortionIcon from '../icons/plate-utensils.svg'

function RecipeCard(props: RecipeCard) {
  const placeholderImage: string = 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg';
  
  var formattedCookTime: string = '';
  if(props.cookMinutes || props.prepMinutes) {
    var formattedCookTime = (() => {
      const cookMinutes = props.cookMinutes ? props.cookMinutes : 0
      const prepMinutes = props.prepMinutes ? props.prepMinutes : 0

      const totalTime = cookMinutes + prepMinutes;
      const hours = Math.floor(totalTime / 60);
      const minutes = totalTime % 60;
  
      const hourText = hours ? `${hours} hour${hours > 1 ? 's' : ''} ` : '';
      const minuteText = minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  
    return hourText + minuteText;
    })();
  }

  var stylesSize
  if(props.view == 0) {
    stylesSize = styles0;
  } else {
    stylesSize = styles1;
  }

  return(<div key={props.key} className={stylesSize.recipeCard}>
    <img src={props.image ? props.image : placeholderImage}/>
    <div className={stylesSize.recipeInfo}>
      <h5>{props.name}</h5>
      <div className={stylesSize.recipeProperties}>
        {props.cookMinutes ? <div><ClockIcon className={stylesSize.icon}/><small>{formattedCookTime}</small></div> : <></>}
        {props.servings ? <div><PortionIcon className={stylesSize.icon}/><small>{`${props.servings} serving${props.servings > 1 ? 's' : ''}`}</small></div> : <></>}
      </div>
    </div>
  </div>);
}

export default RecipeCard;