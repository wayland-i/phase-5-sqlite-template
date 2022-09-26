import React from 'react'
import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <h1>Header</h1>
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
        </nav>
    </div>
  )
}

export default Header