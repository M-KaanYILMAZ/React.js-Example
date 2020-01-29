import React, { Component } from "react";
import NewsCard from "../NewsCard";
import { InfoConsumer } from "../context";

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.news.map(newsitem => {
            return <NewsCard key={newsitem.id} newsitem={newsitem} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default News;
