import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/routing/Header';
import Footer from './components/routing/Footer';

function RootLayout() {
  return (
    <div>
      <Header/>
      <div style={{ minHeight:'80vh'}}>
      <Outlet/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default RootLayout;