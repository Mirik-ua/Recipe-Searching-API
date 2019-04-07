import React, { Component } from 'react';
import './App.css';
import Forms from './Components/Form';
import Recipes from './Components/Recipes';

const API_KEY = '9b0a4f20b9cbe7b2d12eab67108c174d'

export default class App extends Component {
  state = {
    recipes: []
  }

  getRecipes = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.searchValue.value

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)
    const data = await api_call.json()

    this.setState({
      recipes: data.recipes
    })
  }
  componentDidMount = () => {
    const json = localStorage.getItem('recipes')
    const recipes = JSON.parse(json)
    this.setState({
      resipes: recipes
    })
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem('recipes', recipes)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Recipe Search</h1>
          <Forms getRecipes={this.getRecipes} />
        </div>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}
