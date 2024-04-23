import React from "react";
import "./newsitam.css";

const NewsItam = ({ article }) => {
  const { content, description, publishedAt, source, title, url, urlToImage } =
    article;
  return (
    <div
      className="card bg-dark text-light m-3 p-2 d-inline-block"
      style={{ maxWidth: "340px" }}
    >
      <div className="d-flex justify-content-center">
        <img
          src={urlToImage}
          className="card-img-top img-fluid rounded-2"
          style={{ width: "300px", height: "200px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "this description is not loaded . please check your internet conection and try again"}
        </p>
        <p className="bg-info">{publishedAt}</p>
        <a href={url} className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default NewsItam;
