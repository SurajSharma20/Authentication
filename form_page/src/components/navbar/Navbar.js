import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_main_contaienr">
      <ul className="navbar_lists">
        <Link to="/" className="linkSStyle">
        <li className="navbar_sub_lists" style={{textDecoration:"none" , listStyle:"none"}}>Signup</li>
        </Link>
         
      

        <Link to="/login"  className="linkSStyle">
          <li className="navbar_sub_lists">Login</li>
        </Link>

        <Link to="/forgotpassword"  className="linkSStyle">
          <li className="navbar_sub_lists">Forgot Password</li>
        </Link>
        
      </ul>
    </div>
  );
}

export default Navbar;

