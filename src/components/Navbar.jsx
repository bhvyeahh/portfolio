import React from "react";
import "../styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate =useNavigate()
  return (
    <div className="navbar">
      <div onClick={()=>navigate('/')} className="nav-name">
        bhavya's portfolio
      </div>
      <ul className="flex">
        <NavLink to="/projects">
          <li>PROJECTS</li>
        </NavLink>

        <NavLink to="/contact">
          <li>CONTACT</li>
        </NavLink>

        <NavLink to="/socials">
          <li>SOCIALS</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
