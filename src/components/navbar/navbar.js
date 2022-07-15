import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import './styles.css'

const Navbar = ({open, setOpen}) => {
  const navigate = useNavigate()

  return (
    <header className='navbar-container'>
        <h1 className='navbar-title' onClick={() => navigate('/renormalization')}>Renorm App</h1>
        <div className='navbar-sub-container'>

            {open ? 
              <FontAwesomeIcon icon={faX} className='navbar-icon' size='2xl' onClick={() => setOpen(!open)}/>
              :
              <FontAwesomeIcon icon={faBars} className='navbar-icon' size='2xl' onClick={() => setOpen(!open)}/>
            }
        </div>
    </header>

  )
}

export default Navbar