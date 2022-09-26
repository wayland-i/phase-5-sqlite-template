import React from 'react'
import { NavLink, Link, useHistory } from "react-router-dom"

function Header({ currentUser, updateUser }) {

    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        updateUser(null)
        history.push('/login')
    }


  return (
    <div>
        <span>This is the header</span>
        <button onClick={handleLogout}>Logout</button>
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <br></br>
            <NavLink to="/about">
                About
            </NavLink>
            <br></br>
            <NavLink to="/user_page">
                User Page
            </NavLink>
            <br></br>
            <NavLink to="/login">
                Login
            </NavLink>
            <br></br>
            <NavLink to="/sign_up">
                Sign Up
            </NavLink>
        </nav>
    </div>
  )
}

export default Header