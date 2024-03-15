function IngredientList(props) {
  let { ingredients } = props.recipe;

  const ingredientListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  return<div>{ingredientListItems}</div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 