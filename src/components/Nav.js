import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav