import React from 'react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <ul className='navList'>
            <li>
                <img className='logoList' width={200} height={60} src={logo} alt='logo'/>
            </li>
            <div className='navLink'>
            <li className='homeList'><Link to = '/'>Home</Link></li>
            <li className='tourList'><Link to = '/tour'>Tour</Link></li>
            <li className='loginList'><Link to = '/login'>Login</Link></li>
            <li className='registerList'><Link to = '/register'>Register</Link></li>
            </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
