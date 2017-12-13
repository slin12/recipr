import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      steps: {1: ""},
      ingredients: {1: ""}
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.currentRecipe)
  }

  handleChange = (event) => {
    this.setState({
      titleValue: event.target.value
    })
  }

  handleStepIngredientChange = (target, arg) => {
    const name = target.name
    const value = target.value
    this.setState({
        [arg]: Object.assign({}, this.state[arg], {[name]: value})
      })
  }

  handleClick = (event, arg) => {
    const previous = parseInt(Object.keys(this.state[arg]).pop(), 10)
    this.setState({
      [arg]: Object.assign({}, this.state[arg], {[previous+1]: ""})
    })
  }

  deleteStepIngredient = (event, arg) => {
    let copy = Object.assign({}, this.state[arg])
    delete copy[event.target.id]
    this.setState({
      [arg]: copy
    })
  }

  getStepInputs(arg) {
    if(arg === 'steps') {
      let steps = [];
      for(let i = 0; i < Object.keys(this.state.steps).length; i++) {
        let name = Object.keys(this.state.steps)[i]
        steps.push(<div><input type="text" name={name} key={name} placeholder="Enter Step Here" value={this.state.steps[name]} onChange={(e) => this.handleStepIngredientChange(e.target, 'steps')}/><button id={name} className="waves-effect waves-light btn" onClick={(e) => this.deleteStepIngredient(e, 'steps')}>Delete</button></div>)
      }
      return steps
    } else if (arg === 'ingredients') {
      let ingredients = [];
      for(let i = 0; i < Object.keys(this.state.ingredients).length; i++) {
        let name = Object.keys(this.state.ingredients)[i]
        ingredients.push(<div><input type="text" name={name} key={name} placeholder="Enter Ingredient Here" value={this.state.ingredients[name]} onChange={(e) => this.handleStepIngredientChange(e.target, 'ingredients')}/><button id={name} className="waves-effect waves-light btn" onClick={(e) => this.deleteStepIngredient(e, 'ingredients')}>Delete</button></div>)
      }
      return ingredients
    }

  }

  handleSubmit = () => {
    this.props.handleClick(this.state)
    this.setState({
      titleValue: "",
      steps: {1: ""},
      ingredients: {1: ""}
    })
  }


  render() {
    const steps = this.getStepInputs("steps")
    const ingredients = this.getStepInputs("ingredients")
    return (
      <div className="form">
        <h1>Add A Recipe</h1>
        <input type="text" name="title" placeholder="Enter Title Here" value={this.state.titleValue} onChange={this.handleChange}/>
        <h4>Steps</h4>
        {steps}
        <br />
        <button className="waves-effect waves-light btn" onClick={(e) => this.handleClick(e, 'steps')}>Add Step</button>
        <br /><br />
        <h4>Ingredients</h4>
        {ingredients}
        <br />
        <button className="waves-effect waves-light btn" onClick={(e) => this.handleClick(e, 'ingredients')}>Add Ingredient</button>
        <br /><br /><br />
        <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Form
