import React from 'react'
import Nav from './Nav'
import PropTypes from 'prop-types'

function Home(props) {
    return (
        <div>
            <Nav/>
            <h1>Welcome, please login or sign up to continue.</h1>
        </div>
    )
}

Home.propTypes = {

}

export default Home

