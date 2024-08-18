import { NavLink } from "react-router-dom";
import logo from "./Screenshot from 2024-07-17 17-10-45.png"
import "./NavBar.css";

function NavBar({logout}) {
  return (
    <nav>
      <NavLink to="/" > <img src={logo} alt={"Panthera Africa"} className="nav-logo"/> </NavLink>

      <NavLink to="/" className="nav-link">Home </NavLink>

      <NavLink to="/tools" className="nav-link">Tools </NavLink>

      {/* <NavLink to="/login" className="nav-link">Login</NavLink> */}

      <button id="logout-btn" onClick={logout}> LOGOUT</button>
    </nav>
  );
};

export default NavBar;