
"use client"
import React from 'react'
import NavBar from './NavBar'
import { usePathname } from 'next/navigation'

const NavBarWrapper = () => {
  const pathName = usePathname()
  const hideNavBar = pathName === '/login' || pathName === '/register'
  if (hideNavBar) return null
  return (
    <>
      <NavBar />
    </>
  )
}

export default NavBarWrapper