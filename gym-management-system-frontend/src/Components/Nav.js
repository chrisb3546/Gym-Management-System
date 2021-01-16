import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function Nav(props) {
    return (
        <div>
           <Link to='/login'>Login</Link>
           <br/>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav

