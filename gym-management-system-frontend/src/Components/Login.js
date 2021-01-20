import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

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

    login = (credentials) =>{
        console.log("credentials are", credentials)
        fetch("http://localhost:3001/login", {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
    
            },
            body: JSON.stringify(credentials)
        }) 
        .then(res => res.json())
        .then(user => {
            
            if(user.error){
                alert(user.error)
            }
            else{
                this.props.setCurrentUser(user)
            }

        })
        
    }



    handleSubmit = e =>{
        debugger
        e.preventDefault()
        this.login(this.state)
    }
    render(){
        return (
            <div>
                {this.props.currentUser != null ? <Home/> :
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="login"/>
                </form>
                }
            </div>
        
        )
    }
}
