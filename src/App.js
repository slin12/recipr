import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import RecipeList from './components/RecipeList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentRecipe: {titleValue: "", steps: {1: ""}, ingredients: {1: ""}, id: null}
    }
  }

  handleClick = (recipe) => {

    if(recipe.id) {
      let copyArray = [...this.state.recipes]
      copyArray[recipe.id-1] = recipe
      this.setState({
        recipes: copyArray,
        currentRecipe: {titleValue: "", steps: {1: ""}, ingredients: {1: ""}, id: null}
      })
    } else {
      const lastRecipe = this.state.recipes.length > 0 ? this.state.recipes[this.state.recipes.length - 1] : {id: 0}
      this.setState({
        recipes: [...this.state.recipes, Object.assign({}, recipe, {id: lastRecipe.id + 1})]
      })
    }
  }

  editRecipe = (id) => {
    const recipe = this.state.recipes.find(recipe => recipe.id === id)
    this.setState({
      currentRecipe: recipe
    })
  }

  deleteRecipe = (id) => {
    const recipe = this.state.recipes.find(recipe => recipe.id === id)
    let copyArray = [...this.state.recipes]
    const idx = copyArray.indexOf(recipe)
    copyArray.splice(idx, 1)
    console.log(copyArray)
    this.setState({
      recipes: copyArray
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <Form handleClick={this.handleClick} currentRecipe={this.state.currentRecipe}/>
        <RecipeList recipes={this.state.recipes} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe}/>
      </div>
    )
  }
}

export default App;
