import React from 'react'
import { NavLink, Link, useHistory } from "react-router-dom"

function Header({ currentUser, updateUser, setDummy }) {

    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        updateUser(null)
        history.push('/login')
    }

    const handleClick = () => {
        setDummy(dummy => !dummy)
    }


  return (
    <div>
        <span>This is the header</span>
        <button onClick={handleClick}>re-render</button>
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
            {currentUser ? <div><NavLink to="/user_page">User Page</NavLink></div> : null}
            {currentUser ? null : <div><NavLink to="/login">Login</NavLink></div>}
            {currentUser ? null : <div><NavLink to="/sign_up">Sign Up</NavLink></div>}
        </nav>
    </div>
  )
}

export default Header