// import styles from '@/components/NavBar/Nav.module.css'
import {FaRobot} from "react-icons/fa";

const Nav = ({username="%username%"}) => {
  return (
    <div className="navBar">
        <ul className="navList">
            <li className="navItems" ><FaRobot size={36} color="whitesmoke"/></li>
            <li className="navItems" >2</li>
            <li className="navItems" >{username}</li>
        </ul>
    </div>
  )
}

export default Nav