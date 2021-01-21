import React, { Component } from 'react'

class CreateMemberships extends Component {
    state ={
        name:'',
        price: null
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="integer" name="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default CreateMemberships
