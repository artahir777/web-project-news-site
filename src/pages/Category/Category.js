import React, { useState } from "react";

import './category.scss'
import NewsCard from "../../components/Card/Card"
import Section from "../../components/Section/Section"

import {techNews} from "../../mockData/categories"

function Category(props){

    return (
        <div class = "grid-two-with-sidebar" >
            <Section heading = {props.heading} className = "grid-two-col" >
            {
                techNews.map(( tech, index )=>{
                    return (
                        <NewsCard class = "news-card" imgPath = {tech.imgUrl} caption={tech.caption}
                        date={tech.date} time={tech.time} />
                    )
                })
            }
            </Section>

            <Section heading = {props.heading} className = "sidebar" >
            {
                techNews.map(( tech, index )=>{
                    return (
                        <NewsCard 
                            class = "news-card" 
                            imgPath = {tech.imgUrl} 
                            caption={tech.caption}
                            date={tech.date} 
                            time={tech.time} 
                        />
                    )
                })
            }
            </Section>

        </div>
    );

}

export default Category;