import React from "react";
import { Link } from "react-router-dom";
import placeHolderImage from "../images/no_image_placeholder.png";

export default function Card({ tool }) {
  return (
    <div className="card bg-dark rounded-lg" style={{ maxHeight: "500px" }}>
      <h4
        className="m-0"
        style={{ position: "absolute", right: -20, top: -20 }}
      >
        <span
          className={`badge badge-${
            tool.available ? "success" : "danger"
          } badge-pill`}
        >
          {tool.available ? "Available" : "Unavailable"}
        </span>
      </h4>
      <img
        src={tool.image ? tool.image : placeHolderImage}
        alt={tool.name}
        className="card-img-top img-thumbnail"
        style={{ objectFit: "contain", minHeight: "200px", maxHeight: "200px" }}
      />
      <div className="card-body overflow-auto">
        <h5 className="card-title">{tool.name}</h5>
        <p className="card-text overflow-auto" style={{ height: "150px" }}>
          {tool.description}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/rent-a-tool/tool/${tool.name}`} className="btn btn-secondary">
          View
        </Link>
      </div>
    </div>
  );
}
