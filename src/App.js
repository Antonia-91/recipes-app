import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";

const YOUR_APP_ID = "34673d55";
const API_KEY = "f2a39e865965230d3b313e71dd0a7594";

// fetch data
//const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

class App extends Component {
  state = {
    recipes: [],
  };

  // method getRecipe
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}`
    );

    const data = await api_call.json();
    console.log(data.hits[3].recipe.label);

    // set state to data
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipesProps={this.state.recipes} />
      </div>
    );
  }
}

export default App;
