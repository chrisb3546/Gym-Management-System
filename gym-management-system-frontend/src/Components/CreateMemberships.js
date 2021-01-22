import React, { Component } from 'react'

class CreateMemberships extends Component {
    state ={
        name:'',
        price: null,
        membership:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
   
    handleSubmit = (e) => {
        e.preventDefault()
        this.createMembership(this.state)
    }

    createMembership = (membership) => {
        fetch('http://localhost:3001/memberships',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(membership)
        })
        .then(res => res.json())
        .then(membership => {
            this.props.setMemberships(membership)
        })
    }
   render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="integer" name="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default CreateMemberships
