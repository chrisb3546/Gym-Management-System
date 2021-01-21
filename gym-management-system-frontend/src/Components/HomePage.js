import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function HomePage(props) {
    console.log(props, "HomePage")
    const logout = () => {
        fetch("http://localhost:3001/logout",{
            credentials: "include",
            method: "DELETE"
        })
    }
    return (
        <div>
            {props.currentUser != null ? 
            <div>
            <h1>Logged In</h1>
            <button onClick={logout}>Log Out</button>
            </div>
             : 
             <div> 
                <h1>Please Log in or Signup</h1>
                </div> }
            
        </div>
    )
}





export default HomePage

