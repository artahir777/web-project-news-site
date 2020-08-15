import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar(props) {
  return (
    <div>
      <div class="news-logo">
        <Link to="/">
          <img src="/images/news-logo.png" />
        </Link>
      </div>
      <ul class="navbar">
        <li>
          <Link to="/category/pakistan"> Pakistan </Link>
        </li>
        <li>
          <Link to="/category/technology"> Technology </Link>
        </li>
        <li>
          <Link to="/category/latest"> Latest News </Link>
        </li>
        <li>
          <Link to="/category/sports"> Sports </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
