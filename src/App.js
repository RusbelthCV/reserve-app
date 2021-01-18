import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
// Components
import Mainscreen from './components/Mainscreen'
class App extends Component {
  render = () =>{
    return(
      <BrowserRouter>
        <div className="">
          <Route exact path="/" component={Mainscreen}/>
        </div>
      </BrowserRouter>
    )
  } 
}

export default App;