import React from 'react';
import { Component } from 'react'
import './App.css';
import Greet from './components/Greet'


class App extends Component{
  render(){
    return (
          <div className="App">
           <h3>Hello World from CLASS</h3>
           <Greet></Greet>
          </div>
        );
  }
}
export default App;
