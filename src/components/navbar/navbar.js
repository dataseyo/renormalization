import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Navbar = () => {
  return (
    <header className='navbar-container'>
        <h1 className='navbar-title'>Renorm App</h1>
        <div className='navbar-sub-container'>
            <FontAwesomeIcon icon={faGear} className='navbar-icon' size='2xl'/>
            <FontAwesomeIcon icon={faBars} className='navbar-icon' size='2xl'/>
        </div>
    </header>

  )
}

export default Navbar