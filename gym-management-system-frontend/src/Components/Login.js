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
            [e.target.name]:[e.target.value]
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        // fetch("http://localhost:3001/login"){

        // }

        this.props.setCurrentUser(this.state.email)
    }
    render() {
        console.log("props from login", this.props)
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
