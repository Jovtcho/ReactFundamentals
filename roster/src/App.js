import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
//import ImageList from './components/ImageList';
import Character from './components/Character';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Slider  />        
        <Character />
      </div>
    );
  }
}

export default App;
