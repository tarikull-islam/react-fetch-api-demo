import React, { useEffect, useState } from "react";
import "./newsboard.css";
import NewsItam from "../NewsItam/NewsItam";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center mt-4">
        Latest <span className="badge bg-danger text-light">News</span>
      </h2>
      {articles.map((article, index) => {
        return <NewsItam key={index} article={article} />;
      })}
    </div>
  );
};

export default NewsBoard;
