import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
        <NavLink to ="/">
            Mini <span>Blog</span>            
        </NavLink>
        <ul>
            <li>
                <NavLink to ="/"> Home </NavLink>                
            </li>
            <li>
                <NavLink to ="/About"> About </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar