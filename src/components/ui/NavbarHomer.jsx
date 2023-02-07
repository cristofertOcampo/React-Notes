import React from 'react'
import { Link } from "react-router-dom";
// import { LiComponent } from './LiComponent';

export const NavbarHomer = () => {
  return (
      <nav>
        <ul>
          <li text="hola">
            <Link href="">
              HOME
            </Link>
          </li>
          <li>
            <Link href="">
              ABOUT US 
            </Link>
          </li>
          <li>
            <Link href="">
              FAQ
            </Link>
          </li>
          {/* <LiComponent text='Mundo'></LiComponent> */}
        </ul>
      </nav>
    )
}
