import "./index.css";
import React from "react";
// TODO: Import RecipeTitle
import RecipeTitle from "./RecipeTitle";

// TODO: Import IngredientList
import IngredientList from "./IngredientList";
import RecipeStep from "./RecipeStep";

function App() {
  // TODO: Add recipe object
  const recipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
    steps: [
      { step: "Adicione as batatas cortadas a uma panela com água e sal." },
      { step: "Leve a panela para ferver." },
      { step: "Ferva as batatas até ficarem macias, por cerca de 15 a 20 minutos." },
      { step: "Coe as batatas." },
      { step: "Coloque-as novamente na panela" },
      { step: "Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto." },
      { step: "Amasse as batatas." },
      { step: "Tempere novamente e adicione a manteiga e o creme de leite conforme desejado." },
    ],
  };

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />

      <RecipeStep steps={recipe.steps} />
    </article>
  );
}

export default App;
