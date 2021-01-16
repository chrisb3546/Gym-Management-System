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

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
    debugger
  }
  
  render() {
    return (
      <div>
        <Route exact path='/login' render={()=><Login setCurrentUser={this.setCurrentUser}/>}/>
        <Route exact path='/signup' ender={()=><Signup setCurrentUser={this.setCurrentUser}/>}/>
        <Route exact path='/' render={()=><Home currentUser={this.state.currentUser}/>}/>
       
        
        
      </div>
    )
  }
}
export default App

