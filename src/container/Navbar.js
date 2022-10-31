import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className='container'>
        <NavLink to='/'>
          <h1>Workout List</h1>
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar