import React from "react";

import { newsList } from "../../mockData/categories";

export default function NewsDetails(props) {
  const newsId = props.newsId;
  const currentNewsItem = newsList.find((item) => item.id === newsId);
  return (
    <div>
      <h2>{currentNewsItem.caption}</h2>
      {currentNewsItem.details.map((data, index) => {
        return <p>{data}</p>;
      })}
    </div>
  );
}
