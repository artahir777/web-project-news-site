import React, { useState } from "react";
import './card.scss'

function NewsCard(props){
    
    return (

        <div class={`news-card ${props.type === "vertical" ? "column" : "row"}`}>
            <a href="" ><img src= {props.imgPath}  alt=""/></a>
            <div class="news-card-inner-text">
                <p class = "news-caption" ><a href = "" > {props.caption} </a> </p>
                <p class="date-time" > {props.date} | {props.time} </p>
            </div>
        </div>


    );
}

export default NewsCard;