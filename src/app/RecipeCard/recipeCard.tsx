function RecipeCard() {
  const image: string = 'https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg'
  const name: string = ''
  return(<div>
    <img src={image}/>
    <div>
      <h2>Lasagna</h2>
      <div>
        <i className="fi fi-tr-clock-three"></i>
        <i className="fi fi-tr-plate-utensils"></i>
      </div>
    </div>
  </div>);
}

export default RecipeCard;