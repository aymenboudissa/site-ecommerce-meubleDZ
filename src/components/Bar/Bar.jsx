import React from "react";

import "./Bar.css";
import { Link } from "react-router-dom";
const Bar = ({ data }) => {
  const getElements = () => {
    return data[0].back.map((value) => {
      return (
        <Link className="home" to={value.to}>
          {value.link} /
        </Link>
      );
    });
  };
  return (
    <div className="bar">
      <div className="container">
        <h2>
          {getElements()}
          {data[0].fils}
        </h2>
      </div>
    </div>
  );
};

export default Bar;
