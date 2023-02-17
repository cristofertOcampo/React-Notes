import { Link } from "react-router-dom";
import Style from "./navBar.module.css"
const imgLogo = "https://res.cloudinary.com/dqzq2hemz/image/upload/v1676060067/Notas-react/Pair_programming_zv0zq8.png"
const Items = [
  { title: "Home", url: "/" },
  { title: "About us", url:"/AboutUs"}
];


export const NavbarHomer = () => {

  return (
    <nav className={Style.nav}>
      <div className={Style.containerLogo}>
        <img className={Style.imgLogo} src={imgLogo} alt="" />
      </div>
      <ul className={Style.ul}>
        {
        Items.map((item) => (
          <li className={Style.li}>
            <a to={item.url} className={Style.link}>{item.title}</a>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
