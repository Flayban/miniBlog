import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useAuthentication } from "../Hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

const Navbar = () => {

  const {user} = useAuthValue()


  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to ="/">
            Cloud <span>Blog</span>            
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to ="/" className={({ isActive }) => (isActive ? styles.active : "")}> Home </NavLink>                
            </li>
            {!user &&(
                <>
                    <li>
                        <NavLink to ="/Register" className={({ isActive }) => (isActive ? styles.active : "")}> Register </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/Login" className={({ isActive }) => (isActive ? styles.active : "")}> Login </NavLink>
                    </li>
                </>
            )}
            {user &&(
                <>
                    <li>
                        <NavLink to ="/posts/creat" className={({ isActive }) => (isActive ? styles.active : "")}> Criar Postagem </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}> Dashboard </NavLink>
                    </li>
                </>
            )}
            <li>
                <NavLink to ="/About" className={({ isActive }) => (isActive ? styles.active : "")}> About </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar