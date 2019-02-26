import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <head>
<title>Quinoa and Kale Salad Recipe</title>
</head>

<body>

<img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-2/salad.jpg" alt="Kale Caeasar Salad"/>
<h1>Kale Caesar Quinoa Salad with Roasted Chicken</h1>
<p className="description">Kale and quinoa provide a healthy base for roasted chicken topped with a light Caesar sauce.</p>

<p id="cook-time">Total time: 45 minutes</p>

<h2>Ingredients</h2>
<ul className="ingredients">
  <li>1/4 cup kale</li>
  <li>1 cup Quinoa</li>
  <li>2 tbsp Olive Oil</li>
  <li>1 chicken breast</li>
  <li>Caesar Dressing</li>
</ul>

<h2>Preparation</h2>
<ol>
  <li>
    <p>Prepare quinoa and roast chicken until golden brown and 165 in middle.</p>
    <p className="time">Time: 40 minutes</p>
  </li>
  <li>
    <p>Toss quinoa, chicken, kale, and Caesar dressing until coated.</p>
    <p className="time">Time: 4 minutes</p>
  </li>
  <li>
    <p>Add walnuts and olive oil as garnish.</p>
    <p className="time">Time: 1 minute</p>
  </li>
</ol>

<p className="citation">Find this recipe and more <a href="http://www.myrecipes.com/recipe/kale-caesar-salad-chicken" target="_blank" className="external-link">here</a>.</p>

</body>
      </div>
    );
  }
}

export default App;
