import Link from "next/link";
import { FaRobot } from "react-icons/fa";

const Nav = ({ username = "%username%" }) => {
  return (
    <div className="navBar">
      <ul className="navList">
        <li className="navItems">
          <Link href={"/"}>
            <FaRobot size={36} color="whitesmoke" />
          </Link>
        </li>
        <li className="navItems">2</li>
        <li className="navItems dropdown">
          {username}{" "}
          <div className="dropdown-content">
            <p>User Details</p>
            <p>Logout</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
