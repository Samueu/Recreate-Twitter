'use client'

import './Navbar.css'


export default function Navbar() {
  return (
    <nav>
      <div className='wrapper'>
        <div className="logo">Samueu</div>
        <div className="links">
          <ul className="nav-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
