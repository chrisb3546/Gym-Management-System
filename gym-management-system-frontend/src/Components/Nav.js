import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import CreateMemberships from './CreateMemberships'


function Nav(props) {
    console.log(props, "nav")
    return (
        <div>
    {props.currentUser!=null ? 
    <div>
        <h1>User logged in</h1>
        <Link to='/memberships/new'>Add New Membership</Link>
        <Link to='members/new'>Add New Member</Link>
    </div> 
    :
    <div> 
        <Link to='/login'>Login</Link><br/><Link to='/signup'>Signup</Link></div>}
    </div>
    )
}



export default Nav

