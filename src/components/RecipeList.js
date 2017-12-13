import React from 'react';
import Recipe from './Recipe'

class RecipeList extends React.Component {
  getRecipes() {
    return this.props.recipes.map((recipeObject) => {
      return <Recipe recipe={recipeObject} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe}/>
    })
  }

  editRecipe = (id) => {
    this.props.editRecipe(parseInt(id, 10))
  }

  deleteRecipe = (id) => {
    this.props.deleteRecipe(parseInt(id, 10))
  }

  render() {
    const recipes = this.getRecipes()

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }

}

export default RecipeList
