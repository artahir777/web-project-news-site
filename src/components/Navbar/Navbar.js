import React, { useState } from "react";

import './navbar.scss'


function Navbar(props)
{
  return (
    <div>
        <div class = "news-logo" >
             <img src="/images/news-logo.png"/>
        </div>
        <ul class = "navbar" >
            <li><a href=""> Latest </a></li>
            <li><a href=""> Covid-19 </a></li>
            <li><a href=""> Pakistan </a></li>
            <li><a href=""> International </a></li>
            <li><a href=""> Sports </a></li>
            <li><a href=""> Business </a></li>
            <li><a href=""> Technology </a></li>
            <li><a href=""> About </a></li>
        </ul>
    </div>
  );
}

export default Navbar;