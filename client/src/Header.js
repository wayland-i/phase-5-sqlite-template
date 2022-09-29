import React from 'react'
import { NavLink, useHistory } from "react-router-dom"

function Header({ currentUser, updateUser, setDummy, setCurrentUser }) {

    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            setCurrentUser(null)
            history.push('/login')
        })
   
    }


    // if (currentUser.errors.User === "Not Authorized") {
    //     console.log("hello")
    // }


  return (
    <div>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : null}
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <br></br>
            <NavLink to="/about">
                About
            </NavLink>
            <br></br>
            {currentUser === null ? null : <div><NavLink to="/user_page">User Page</NavLink></div>}
            {currentUser === null ? <div><NavLink to="/login">Login</NavLink></div> : null}
            {currentUser === null ? <div><NavLink to="/sign_up">Sign Up</NavLink></div> : null}
        </nav>
    </div>
  )
}

export default Header