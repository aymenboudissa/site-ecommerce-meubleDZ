import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Product = ({ Display, product }) => {
  return (
    <article className="product">
      <div className="product__image">
        <img src={product.image} alt="" />
        <div className="search">
          <Link to={"/Detail/" + product.id}>
            <AiOutlineSearch className="btn__search" />
          </Link>
        </div>
      </div>
      <div className="product__about">
        <h4 className="product__title">{product.title}</h4>
        <h4 className="product__price">${product.price}</h4>
        <div className={Display ? "" : "d-none"}>
          <p className="product__desc overflow">{product.desc}</p>
          <Link to={"/Detail/" + product.id}>
            <button className="btn btn__detail">DETAILS</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Product;
