import React, { Component } from 'react'

 class CreateMember extends Component {

    state ={
        name:'',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}
export default CreateMember
