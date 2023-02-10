import React from 'react'
import Style from './header.module.css'
import { NavbarHomer } from '../../ui/Navbar/NavbarHomer'

export const HeaderHome = () => {
  return (
    <header className={Style.header}>
      <NavbarHomer />
    </header>
  )
}
