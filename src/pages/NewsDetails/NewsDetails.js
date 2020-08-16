import React from "react";

import { newsList } from "../../mockData/categories";
import './news-details.scss'


export default function NewsDetails(props) {
  const newsId = props.newsId;
  const currentNewsItem = newsList.find((item) => item.id === newsId);
  return (
    <div class = "news-detail-wrapper" >
      <img src = {currentNewsItem.imgUrl} class = "banner-image" />
      <h2 class = "article-heading" >{currentNewsItem.caption}</h2>
      <p class = "date-time" > {currentNewsItem.date} | {currentNewsItem.time} </p>
      {currentNewsItem.details.map((details, index) => {
        return <p class = "article-content" >{details}</p>;
      })}

    </div>
  );
}
