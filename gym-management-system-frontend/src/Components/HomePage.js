import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function HomePage(props) {
    console.log(props, "HomePage")
    const logout = () => {
        debugger
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
                <Link to='/login'>Login</Link><br/><Link to='/signup'>Signup</Link>
                </div> }
            
        </div>
    )
}





export default HomePage

