import React from 'react'

import Grid from '../../components/grid/grid'
import Menu from '../../components/menu/menu'

const Home = ({open, setOpen}) => {
  return (
    <div className='home-container'>
      <Menu open={open} setOpen={setOpen}/>
      <Grid />
    </div>
  )
}

export default Home