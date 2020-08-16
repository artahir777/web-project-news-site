import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import NewsCard from "../../components/Card/Card";
import Section from "../../components/Section/Section";

import "../../styles/common.scss";
import "./home.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { newsSlider, newsList } from "../../mockData/categories";

function Home() {
  const latestNews = newsList.filter((item) => item.type === "latest");
  const techNews = newsList.filter((item) => item.type === "technology");
  const pakNews = newsList.filter((item) => item.type === "pakistan");

  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="homepage-wrapper">
      <div class="carousel">
        <Slider {...settings}>
          {newsSlider.map((sliderItem, index) => {
            return (
              <NewsCard class="news-carousel"
                imgPath={sliderItem.imgUrl}
                caption={sliderItem.caption}
                date={sliderItem.date}
                time={sliderItem.time}
              />
            );
          })}
        </Slider>
      </div>
      <Section className="latest-news" heading="Sidebar">
        <div className="latest-news-wrapper">
          {latestNews.map((latest, index) => {
            return (
              <Link to={"/news-details/" + latest.id}>
                <NewsCard
                  class="news-card"
                  imgPath={latest.imgUrl}
                  caption={latest.caption}
                  date={latest.date}
                  time={latest.time}
                />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="pakistan-news" heading="Latest News">
        <div className="pakistan-news-wrapper">
          {latestNews.map((latest, index) => {
            return (
              <Link to={"/news-details/" + latest.id}>
                <NewsCard
                  class="news-card"
                  imgPath={latest.imgUrl}
                  caption={latest.caption}
                  date={latest.date}
                  time={latest.time}
                  type="vertical"
                />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="technology-wrapper" heading="Technology">
        <div className="technology-list">
          {techNews.map((tech, index) => {
            return (
              <Link to={"/news-details/" + tech.id}>
                <NewsCard
                  class="news-card"
                  imgPath={tech.imgUrl}
                  caption={tech.caption}
                  date={tech.date}
                  time={tech.time}
                  type="vertical"
                />
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="sports-wrapper" heading="Sports">
        <div className="sports-list-wrapper">
          {pakNews.map((pak, index) => {
            return (
              <Link to={"/news-details/" + pak.id}>
                <NewsCard
                  class="news-card"
                  imgPath={pak.imgUrl}
                  caption={pak.caption}
                  date={pak.date}
                  time={pak.time}
                  type="vertical"
                />
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

export default Home;
