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

  componentDidMount = () => {
    this.findCurrentUser()
  }

  findCurrentUser = () => {
    fetch("http://localhost:3001/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            
    }) 
    .then(res => res.json())
    .then(user => {
        if(user.error){
            console.log(user.error)
        }
        else{
            this.setCurrentUser(user)
        }

    })
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user.email
    })
  }

  logout = () => {
    debugger
    fetch("http://localhost:3001/logout",{
      credentials: "include",
      method: "DELETE"
  })
}
  
  render() {
    return (
      <div>
        <Route exact path='/login' render={()=><Login currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />}/>
        <Route exact path='/signup' render={()=><Signup currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>}/>
        {this.state.currentUser!= null ? <Route exact path='/' render={()=><Home logout={this.logout}/>}/>:<Route exact path='/' render={()=><LoggedOut currentUser={this.state.currentUser}/>}/>}
        <Nav currentUser={this.state.currentUser}/>
        
        
      </div>
    )
  }
}
export default App

