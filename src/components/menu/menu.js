import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { animated, useSpring, useTransition } from '@react-spring/web'

import './styles.css'

const Menu = ({open, setOpen}) => {
  const navigate = useNavigate()

  // animation state
  const [animate, setAnimate] = useState(true)

  const onClick = (destination) => {
    navigate(`/renormalization/${destination}`)
    setOpen(false)
  }

  const slideOpen = useSpring({
    from: { height: '0%'},
    to: { height: open ? '100%' : '0%'},
    leave: { height: '0%'}
  })

  const textEnter = useSpring({
    from: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    to: {
      opacity: 100,
      transform: 'translateY(0px)',
      color: 'blue'
    },
    leave: {
      opacity: 0,
      transform: 'translateY(20px)'
    }
  })

  return (
    
    <animated.nav 
      style={slideOpen}
      className={`menu-container ${open ? 'menu-open' : 'menu-closed'}`}>
        <ul className='menu-items'>
            <li className='menu-item' onClick={() => onClick('')}>Home</li>
            <li className='menu-item' onClick={() => onClick('about')}>About</li>
            <li className='menu-item' onClick={() => onClick('science')}>The Science</li>
            <li className='menu-item' onClick={() => onClick('papers')}>Papers</li>
        </ul>
    </animated.nav>
  )
}

export default Menu