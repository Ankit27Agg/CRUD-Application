import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'

function Wrapper(props) {
  return (
      <React.Fragment>
          <Navbar />
          <SideBar>
          <div> {props.children} </div>
          </SideBar>
      </React.Fragment>
    
  )
}

export default Wrapper