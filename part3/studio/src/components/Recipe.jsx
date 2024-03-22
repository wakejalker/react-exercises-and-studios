import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.seriouseats.com/";
   let authorPhoto = "https://www.seriouseats.com/thmb/kxhWyfRheIx6o1Uuwed5cehy76c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__mt-static__support__uploads__Caroline-5ce5101ce4ab4f81b12e23c6907ac7b5.jpg";
   let authorName = "Caroline Russock";

   return (
      <div>
         <img src={authorPhoto} alt = "Caroline Russock" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["fresh lemon juice", "ground coriander seed", "garlic cloves", "olive oil", "chicken thighs"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Halal Cart Chicken</h1>
            <p>The chicken is marinated with herbs, lemon, and spices; the rice golden; the sauce, as white and creamy as ever.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.seriouseats.com/thmb/glW6wJHxJSeCHuyzbn1C8T82hio=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210710-halal-chicken-rice-diana-chistruga-seriouseats-1-a6e13a5ffd844e568d421aec70d8bb55.jpg" alt="Halal Cart Chicken" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
