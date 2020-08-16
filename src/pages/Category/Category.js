import React, { useState } from "react";
import { Link } from "react-router-dom"

import "./category.scss";
import NewsCard from "../../components/Card/Card";
import Section from "../../components/Section/Section";

import { newsList } from "../../mockData/categories";

function Category(props) {
  const id = props.categoryId;
  const currentNewsItem = newsList.filter((item) => item.type === id);
  
  return (
    <div>
      <Section heading={id} className="categories-wrapper">
        <div className="category-grid">
          {currentNewsItem.map((tech, index) => {
            return (
              <Link to={`/news-details/${tech.id}`}>
                <NewsCard
                  class="news-card"
                  type="vertical"
                  imgPath={tech.imgUrl}
                  caption={tech.caption}
                  date={tech.date}
                  time={tech.time}
                />
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

export default Category;
