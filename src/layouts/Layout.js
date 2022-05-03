import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import MessengerPopUp from '../components/MessengerPopUp'

const Layout = ({ children }) => {
  return (
    <div style={{paddingTop:"78px"}}>
      <Header />
      {children}
      {/* <MessengerPopUp/> */}
    </div>
  )
}

export default Layout