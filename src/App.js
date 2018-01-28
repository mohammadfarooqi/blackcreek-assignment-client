import React, { Component } from 'react';
import './App.css';

import HomeComponent from './components/home/home.component';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Blackcreek Take-Home Assignment</h1>  

        <HomeComponent />
      </div>
    );
  }
}

export default App;
