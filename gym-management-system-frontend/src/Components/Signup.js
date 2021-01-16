import React, { Component } from 'react'

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
        
       

    }
    render() {
        return (
            <div>
                Welcome, please create an account!
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="login"/>
                </form>
                
            </div>
        )
    }
}