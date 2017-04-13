import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () =>  (
      <div className="navbar">
        <h2>PokéRacer</h2>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/races"> Races</NavLink>
      </div>
    )

export default Navbar
