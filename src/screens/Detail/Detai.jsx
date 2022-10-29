import React from "react";
import Bar from "../../components/Bar/Bar";
import { Link, useParams } from "react-router-dom";
import image15 from "../../assets/images/17.jpg";
import image16 from "../../assets/images/18.jpg";
import image17 from "../../assets/images/19.jpg";
import image18 from "../../assets/images/20.jpg";
import image19 from "../../assets/images/21.jpg";
import image20 from "../../assets/images/22.jpeg";
import items from "../../data";
import "./Detai.css";
const Detai = () => {
  let params = useParams();

  const [image, setImage] = React.useState(image15);
  const [color, setColor] = React.useState("black");
  const [product, setProduct] = React.useState(items[params.id - 1]);

  const array = [
    {
      back: [
        {
          link: "Home",
          to: "/",
        },
        {
          link: "Products",
          to: "/products",
        },
      ],
      fils: product.title,
    },
  ];
  return (
    <>
      <Bar data={array} />
      <section className="contaienr__detail container">
        <div className=" btn__back">
          <Link to={"/products"}>
            <button className="btn">BACK TO PRODUCTS</button>
          </Link>
        </div>
        <article className="product__detail">
          <div className="product__images">
            <div className="image__top">
              <img src={image} alt="" />
            </div>
            <div className="images__bottom">
              <img
                src={image15}
                className={image15 == image ? "active" : ""}
                onClick={() => setImage(image15)}
                alt=""
              />
              <img
                src={image17}
                className={image17 == image ? "active" : ""}
                onClick={() => setImage(image17)}
                alt=""
              />
              <img
                src={image20}
                className={image20 == image ? "active" : ""}
                onClick={() => setImage(image20)}
                alt=""
              />
              <img
                src={image18}
                className={image18 == image ? "active" : ""}
                onClick={() => setImage(image18)}
                alt=""
              />
              <img
                src={image19}
                className={image19 == image ? "active" : ""}
                onClick={() => setImage(image19)}
                alt=""
              />
            </div>
          </div>
          <div className="product__abouts">
            <h1 className="product__title">{product.title}</h1>
            <h3 className="product__price">${product.price}</h3>
            <p className="product__desc">{product.desc}</p>
            <div className="product__info">
              <h4>
                Avaible:
                <del>
                  <span className="info__rep">{product.available}</span>
                </del>
              </h4>
            </div>
            <div className="product__info">
              <h4>
                <del>
                  SKU: <span className="info__rep">{product.sku}</span>{" "}
                </del>
              </h4>
            </div>
            <div className="product__info">
              <h4>
                <del>
                  Brand: <span className="info__rep">{product.brand}</span>{" "}
                </del>
              </h4>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Detai;
