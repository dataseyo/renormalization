import React from 'react'

import './styles.css'
import Menu from '../../components/menu/menu'

const Science = ({open, setOpen}) => {
  return (
    <section>
        <Menu open={open} setOpen={setOpen}/>
        Science 
    </section>
  )
}

export default Science