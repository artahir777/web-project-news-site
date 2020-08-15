import React, { useState } from "react";

import NewsCard from '../Card/Card'
import "./section.scss"


function Header(props){
    
    return (

        <div class = "section-heading" >
            <hr/>
              <p class = "heading" > {props.heading} </p> 
            <hr/>
        </div>
    
    );
}

function Section(props)
{
    return (
        <div className= {props.className} >
            <Header heading = {props.heading} />
            
            {
                props.children
            }
        </div>
    );
    
}



export default Section;