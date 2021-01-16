import React, { Component } from 'react'
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { Route, Router } from 'react-router-dom'

 class App extends Component {

  state ={
    currentUser: ""
  }

  
  render() {
    return (
      <div>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/' component={Home}/>
        <Home/>
        
        
        
      </div>
    )
  }
}
export default App

