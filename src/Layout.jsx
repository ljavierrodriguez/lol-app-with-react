import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Paths from './routes'

const Layout = () => {
  return (
    <BrowserRouter>
        <Paths />
    </BrowserRouter>
  )
}

export default Layout