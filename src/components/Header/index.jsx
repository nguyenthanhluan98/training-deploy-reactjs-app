import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
