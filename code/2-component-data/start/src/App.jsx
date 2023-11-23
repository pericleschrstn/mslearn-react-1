import "./index.css";
import React from "react";
// TODO: Import RecipeTitle

// TODO: Import IngredientList
import IngredientList from "./IngredientList";
import RecipeStep from "./RecipeStep";

function App() {
  // TODO: Add recipe object

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      return (
      <article>
        <h1>Recipe Manager</h1>
        {/* TODO: Add RecipeTitle component */}
        <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

        {/* TODO: Add IngredientList component */}
      </article>
      );
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />
      <RecipeStep steps={recipe.steps} />
    </article>
  );
}

export default App;
