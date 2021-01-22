import React, { Component } from 'react'
import Checkbox from './Checkbox'
import RadioButton from './RadioButton'

 class CreateMember extends Component {

    state ={
        name:'',
        email: '',
        membership:{
            id: '',
            name:'',
            price:''
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleClick = (e) => {
        debugger
        this.setState({
            membership: {
                id: e.target.id,
                name: e.target.value,
                price: e.target.dataset.price
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        debugger
        let name = this.state.name
        let email = this.state.email
        let membership_id = this.state.membership.id
        let user_id = this.props.currentUserId
        fetch("http://localhost:3001/members",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                name,
                email,
                membership_id,
                user_id
            })
        })
        .then(res => res.json())
        .then(member => console.log(member))
    }
   
    render() {
        let membershipOption = this.props.memberships.map( m => <RadioButton handleClick={this.handleClick}{...m}/>)
       console.log(membershipOption,"membershipOption")
       console.log(this.props, "creatememberprops")
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    {membershipOption}
                    <input type="submit" value="Create Member"/>
                </form>
            </div>
        )
    }
}
export default CreateMember
