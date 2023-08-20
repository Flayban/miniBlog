import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to ="/">
            Blog <span>Flay</span>            
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to ="/" className={({ isActive }) => (isActive ? styles.active : "")}> Home </NavLink>                
            </li>
            <li>
                <NavLink to ="/About" className={({ isActive }) => (isActive ? styles.active : "")}> About </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar