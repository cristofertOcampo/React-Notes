import React from 'react'
import { Link } from "react-router-dom";
import Style from './footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";



{/*

 */
}



export const Footer = () => {

  const Icons = [
    { ic: <FaGithub />, url: "https://github.com/cristofertOcampo" },
    { ic: <CgMail />, url: "https://mail.google.com/" },
    { ic: <FaLinkedinIn />, url: "https://co.linkedin.com/" },
    { ic: <FaTwitter />, url: "https://twitter.com/?lang=es" },
    { ic: <FaFacebook />, url: "https://es-la.facebook.com/" }
  ]

  // const Icons = [<FaFacebook />, <FaTwitter />, <FaLinkedinIn />]


  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <h3>Foolish Developer</h3>
        <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
        <ul className={Style.socials}>
          {
            Icons.map((icon) => (
              <li>
                <Link to={icon.url}>{icon.ic}</Link>
              </li>
            ))
          }
        </ul>
        <p>
          <a href="https://github.com/cristofertOcampo">Cristofert Ocampo Developer</a> Copyright 2023&copy;
        </p>
      </div>
    </footer>
  )
}