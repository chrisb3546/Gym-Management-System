import React, { Component } from 'react'
import HomePage from './HomePage'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    signup = (credentials) => {
        debugger
        const userInfo ={
            user: credentials
        }
        fetch("http://localhost:3001/users", {
              credentials: "include", 
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json"
  
                  },
                  body: JSON.stringify(userInfo)
                  
          }) 
          .then(res => res.json())
          .then(user => {
              debugger
              if(user.error){
                  alert(user.error)
              }
              else{
                  this.props.setCurrentUser(user)
              }
  
          })
          
      }
    
    handleSubmit = e =>{
        e.preventDefault()
        this.signup(this.state)
        
       

    }
    render() {
        return (
            <div>
                {this.props.currentUser !== null ? <div> <HomePage/> </div> :
                <div>
                <h1>Welcome, please create an account!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="signup"/>
                </form>
                </div>
    }
                
            </div>
        )
    }
}