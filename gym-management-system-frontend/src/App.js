import React, { Component } from 'react'
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import HomePage from './Components/HomePage'
import Nav from './Components/Nav'
import LoggedOut from './Components/LoggedOut'
import CreateMember from './Components/CreateMember'
import { Route, Router } from 'react-router-dom'
import CreateMemberships from './Components/CreateMemberships';


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
        <Route exact path='/' render={()=><HomePage testProp="hello" currentUser={this.state.currentUser}/>}/>
        <Route exact path='/memberships/new' render={()=><CreateMemberships />}/>
        <Route exact path='/members/new' render={()=><CreateMember />}/>

        <Nav currentUser={this.state.currentUser}/>
        
        
      </div>
    )
  }
}
export default App

