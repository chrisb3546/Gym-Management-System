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
import Members from './Components/Members'

 class App extends Component {

  state ={
    currentUser: null,
    userId: null,
    memberships: [],
    members: []
    
  }

  componentDidMount = () => {
    this.findCurrentUser()
    this.getMemberships()
    this.getMembers()
  }

  getMembers = () => {
    debugger
    fetch("http://localhost:3001/members")
    .then(res => res.json())
    .then(members => {
      members.forEach( member => this.setMembers(member) )
    })
  }

  setMembers = (member) => {
    debugger
    if(this.state.currentUser != null){
      this.setState({
        members: [...this.state.members, member]
      })
    }
  }

  getMemberships = () => {
    fetch("http://localhost:3001/memberships")
    .then(res => res.json())
    .then(memberships => {
      memberships.forEach(membership => this.setMemberships(membership))
    }
      )
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
      currentUser: user.email,
      userId: user.id
    })
  }

  setMemberships = (membership) => {
    if (this.state.currentUser != null){
      this.setState({
        memberships: [...this.state.memberships, membership]
      })
    }
    
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
        <Route exact path='/newmemberships' render={()=><CreateMemberships setMemberships={this.setMemberships} />}/>
        <Route exact path='/newmembers' render={()=><CreateMember memberships={this.state.memberships} currentUserId={this.state.userId} />}/>
        <Route exact path='/members' render={()=><Members members={this.state.members}/>} />
        <Nav currentUser={this.state.currentUser}/>
        
        
      </div>
    )
  }
}
export default App

