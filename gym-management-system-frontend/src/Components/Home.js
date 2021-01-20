import React from 'react'



function Home(props) {
    console.log(props,"home")
    
    const logout = () => {
        fetch("http://localhost:3001/logout",{
            credentials: "include",
            method: "DELETE"
        })
    }
    
    return (
       
        <div>
            <h1>Logged In</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}



export default Home

