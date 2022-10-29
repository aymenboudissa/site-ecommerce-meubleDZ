import React from "react";
import image from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import image3 from "../../assets/images/11.jpg";
import image5 from "../../assets/images/8.jpg";
import image6 from "../../assets/images/10.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import { CiGrid42 } from "react-icons/ci";
import { FiAperture } from "react-icons/fi";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";
import "./Content.css";
const Content = () => {
  const [view, setView] = React.useState(false);
  return (
    <>
      <div className="container">
        <section className="container__content">
          <article className="content-left">
            <h1>Design Your Comfort Zone</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to={"/products"}>
              <button className="btn btn__shop">SHOP NOW</button>
            </Link>
          </article>
          <article className="content-right">
            <img src={image} alt="" className="image" />
            <img src={image2} alt="" className="image__bottom" />
          </article>
        </section>
      </div>
      <div className="container__products ">
        <div className="container__products-header">
          <h1>Featured Products</h1>
          <div className="outline"></div>
        </div>
        <section className="products container">
          <article className="product">
            <div className="product__image">
              <img src={image3} alt="" />
              <div className="search">
                <AiOutlineSearch className="btn__search" />
              </div>
            </div>
            <div className="product__about">
              <h4 className="product__title">High-Back Bench</h4>
              <h4 className="product__price">$399.99</h4>
            </div>
          </article>
          <article className="product">
            <div className="product__image">
              <img src={image5} alt="" />
              <div className="search">
                <AiOutlineSearch className="btn__search" />
              </div>
            </div>
            <div className="product__about">
              <h4 className="product__title">High-Back Bench</h4>
              <h4 className="product__price">$399.99</h4>
            </div>
          </article>
          <article className="product">
            <div className="product__image">
              <img src={image6} alt="" />
              <div className="search">
                <AiOutlineSearch className="btn__search" />
              </div>
            </div>
            <div className="product__about">
              <h4 className="product__title">High-Back Bench</h4>
              <h4 className="product__price">$399.99</h4>
            </div>
          </article>
        </section>
        <div className="btn__all">
          <Link to={"/products"}>
            <button className="btn">ALL PRODUCTS </button>
          </Link>
        </div>
      </div>
      <div className="container__about" id="about">
        <div className="container">
          <div className="container__about-header">
            <h2>Custom Furniture Built Only For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur
            </p>
          </div>
          <section className="items">
            <article className="item">
              <div className="text-icon">
                <IoIosAirplane className="icon" />
              </div>
              <h3>Mission</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </article>
            <article className="item">
              <div className="text-icon">
                <CiGrid42 className="icon" />
              </div>
              <h3>Vision</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </article>
            <article className="item">
              <div className="text-icon">
                <FiAperture className="icon" />
              </div>
              <h3>History</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </article>
          </section>
        </div>
      </div>
      <section className="container" id="">
        <div className="container__contact">
          <div className="contact">
            <h3>City Meuble Déco</h3>
            <p>
              Design & élégance - Nous somme à votre disposition pour tout
              renseignement <br /> n'hésitez pas à nous contacter.
            </p>
          </div>
          <div className="">
            <button
              className="btn btn-contact"
              onClick={() => setView((prev) => !prev)}
            >
              NOUS CONATACTER
            </button>
          </div>
        </div>
        {view ? <Contact /> : ""}
      </section>
    </>
  );
};

export default Content;
