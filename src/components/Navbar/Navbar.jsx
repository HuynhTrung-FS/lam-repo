import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>{" "}
      {"  |   "}
      <NavLink
        to={"/bloglist"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        BlogList
      </NavLink>
      {"   |  "}
      <NavLink
        to={"/blogdetail/1"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blog#1
      </NavLink>
    </nav>
  );
}

export default Navbar;
