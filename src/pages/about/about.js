import React from 'react'

import Menu from '../../components/menu/menu'

const About = ({open, setOpen}) => {
  return (
    <div>
      <Menu open={open} setOpen={setOpen}/>
      About
    </div>
  )
}

export default About