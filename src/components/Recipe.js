import React from 'react';

class Recipe extends React.Component {
  getSteps = () => {
    const keys = Object.keys(this.props.recipe.steps)
    return keys.map(stepNum => {
      return <li key={stepNum}>{this.props.recipe.steps[stepNum]}</li>
    })
  }

  getIngredients = () => {
    const keys = Object.keys(this.props.recipe.ingredients)
    return keys.map(stepNum => {
      return <li key={stepNum}>{this.props.recipe.ingredients[stepNum]}</li>
    })
  }

  render() {
    const steps = this.getSteps();
    const ingredients = this.getIngredients();
    return (
      <div className="recipe-card" key={this.props.recipe.id}>
        <h1>{this.props.recipe.titleValue}</h1>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Steps:</h4>
        <ul>
          {steps}
        </ul>
        <button id={this.props.recipe.id} onClick={(event) => {this.props.editRecipe(event.target.id)}} className="waves-effect waves-light btn">Edit</button>
        <br /><br />
        <button id={this.props.recipe.id} className="waves-effect waves-light btn" onClick={(event) => {this.props.deleteRecipe(event.target.id)}}>Delete</button>
      </div>
    )
  }

}

export default Recipe
