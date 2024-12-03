import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from './Top'
const Layout = () => {
  return (
    <>
      <Top /> 
      <Outlet />
    </>
  )
}

export default Layout