const API_KEY = "7f95128455ec4334b9508766d738b8f6";


async function getRecipes(){
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

  const data = await response.json()

  response data.recipes
}


async function init(){
    const recipes = await getRecipes();
    console.log(recipes);
}

init()