import React, { Component } from 'react'
import './App.css';
import Login from './Components/Login'

 class App extends Component {

  state ={
    currentUser: ""
  }

  
  render() {
    return (
      <div>
        <h1>Welcome, please login or sign up to continue.</h1>
        <Login setCurrentUser = {this.state.currentUser}/>
      </div>
    )
  }
}
export default App

