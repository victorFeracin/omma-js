const companyName = "Omma\n";

console.log(`Welcome to ${companyName}`);

const ommaRecipes = [];

const createRecipe = (
  code,
  title,
  level,
  ingredients,
  instructions,
  link,
  vegan
) => {
  const newRecipe = {
    code,
    title,
    level,
    ingredients,
    instructions,
    link,
    vegan,
  };

  ommaRecipes.push(newRecipe);

  console.log(`\n${newRecipe.title} successfully registered!\n`);
};

const showRecipes = () => {
  ommaRecipes.forEach((recipe) => {
    console.log("**************************************************\n");
    console.log(`Title: ${recipe.title} \n`);
    console.log(`Ingredients: ${recipe.ingredients} \n`);
    console.log(`Vegan: ${recipe.vegan} \n\n\n`);
  });
};

const deleteRecipe = (code) => {
  let flag = 0;
  ommaRecipes.forEach((recipe) => {
    if (code === recipe.code) {
      ommaRecipes.splice(ommaRecipes.indexOf(recipe), 1);
      flag++;
    }
  });
  if (flag > 0) {
    console.log("\nRecipe deleted!\n\n\n");
  } else {
    console.log("\nRecipe not found.\n\n\n");
  }
};

const searchRecipe = (keyword) => {
  let flag = 0;
  let i = 0;
  ommaRecipes.forEach((recipe) => {
    let recipeTitle = ommaRecipes[i].title;
    let checkSearch = recipeTitle.includes(keyword);
    if (checkSearch === true) {
      flag++;
      console.log(ommaRecipes[i]);
    }
    checkSearch = null;
    i++;
  });
  i = 0;
  console.log(`\n\n${flag} result(s) found.\n`);
};

const updateRecipe = (code, newRecipe) => {
  let flag = 0;
  ommaRecipes.forEach((recipe) => {
    if (recipe.code === code) {
      if (recipe.title) recipe.title = newRecipe.title;
      if (recipe.level) recipe.level = newRecipe.level;
      if (recipe.ingredients) recipe.ingredients = newRecipe.ingredients;
      if (recipe.instructions) recipe.instructions = newRecipe.instructions;
      if (recipe.link) recipe.link = newRecipe.link;
      if (recipe.vegan) recipe.vegan = newRecipe.vegan;
      flag++;
    }
  });
  if (flag <= 0) {
    console.log("\nRecipe code not found. Please, try again.\n\n\n");
  } else {
    console.log("\nRecipe successfully updated.\n\n\n");
  }
};

// createRecipe(
//   1,
//   "Chocolate pie",
//   "hard",
//   ["1 ts of lala", "2 cups of lorem ipsum"],
//   "put it in the oven and jaaj",
//   "youtube.com",
//   true
// );

// createRecipe(
//   2,
//   "French fries",
//   "easy",
//   ["1 ts of lala", "2 cups of lorem ipsum"],
//   "heat the oil and jaaj",
//   "youtube.com",
//   false
// );

// createRecipe(
//   3,
//   "Doughnuts",
//   "moderate",
//   ["1 ts of lala", "2 cups of lorem ipsum"],
//   "heat the oil and jaaj",
//   "youtube.com",
//   true
// );

// createRecipe(
//   4,
//   "Pepperoni pizza",
//   "hard",
//   ["1 ts of lala", "2 cups of lorem ipsum"],
//   "put it in the oven and jaaj",
//   "youtube.com",
//   true
// );

// showRecipes();

// deleteRecipe(4);

// updateRecipe(2, {
//   title: "Sauté broccoli",
//   level: "easy",
//   ingredients: ["250g of fresh broccoli", "25g of butter", "1ts of salt"],
//   instructions: "heat the butter and put the broccoli until they are brown",
//   link: "instagram/saute-broccoli",
//   vegan: false,
// });

// showRecipes();