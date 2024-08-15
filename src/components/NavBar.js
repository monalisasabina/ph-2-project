import { NavLink } from "react-router-dom";
import logo from "./Screenshot from 2024-07-17 17-10-45.png"
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link"> <img src={logo} alt={"Panthera Africa"} className="nav-logo"/> </NavLink>

      <NavLink to="/" className="nav-link">Home </NavLink>

      <NavLink to="/tools" className="nav-link">Tools </NavLink>

      <NavLink to="/login" className="nav-link">Login</NavLink>
    </nav>
  );
};

export default NavBar;