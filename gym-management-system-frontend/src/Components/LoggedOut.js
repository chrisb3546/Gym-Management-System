import React from 'react'
import PropTypes from 'prop-types'

function LoggedOut(props) {
    console.log(props, "loggedout")
    return (
        <div>
            <h1>Logged Out</h1>
        </div>
    )
}



export default LoggedOut

