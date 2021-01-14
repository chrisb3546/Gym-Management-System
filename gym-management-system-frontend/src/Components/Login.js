import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="email" placeholder="email" value={this.state.email}/>
                    <input type="password" name="password" placeholder="password" value={this.state.password}/>
                </form>
                
            </div>
        )
    }
}
