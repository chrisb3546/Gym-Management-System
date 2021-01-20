import React, { Component } from 'react'
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Nav from './Components/Nav'
import LoggedOut from './Components/LoggedOut'
import { Route, Router } from 'react-router-dom'


 class App extends Component {

  state ={
    currentUser: null
  }

  setCurrentUser = (user) => {
    debugger
    this.setState({
      currentUser: user.email
    })
  }
  
  render() {
    return (
      <div>
        <Route exact path='/login' render={()=><Login currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />}/>
        <Route exact path='/signup' render={()=><Signup currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>}/>
        {this.state.currentUser!= null ? <Route exact path='/' render={()=><Home currentUser={this.state.currentUser}/>}/>:<Route exact path='/' render={()=><LoggedOut currentUser={this.state.currentUser}/>}/>}
        <Nav currentUser={this.state.currentUser}/>
        
        
      </div>
    )
  }
}
export default App

