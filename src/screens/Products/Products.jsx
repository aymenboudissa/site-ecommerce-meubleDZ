import React from "react";
import Bar from "../../components/Bar/Bar";
import "./Products.css";

import { BsList } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import items from "../../data";
import Product from "../../components/Product";
import { CircularProgress } from "@mui/material";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = React.useState(items);
  const [loaded, setLoaded] = React.useState(true);
  const [color, setColor] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [selectCategory, setSelectCategory] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [Display, setDisplay] = React.useState(false);
  const [SearchTerme, setSearchTerme] = React.useState("");
  const [View, setView] = React.useState(9);

  // const getProductsFromDB = async () => {
  //   const res = await axios.get("http://localhost:8000/api/products");

  //   return res.data.products;
  // };

  // React.useEffect(() => {
  //   getProductsFromDB().then((products) => {
  //     setData(products);
  //     setLoaded(true);
  //   });
  // }, []);

  const updateFilters = () => {
    let updateProducts = items;
    if (selectCategory) {
      updateProducts = updateProducts.filter(
        (product) => product.category == selectCategory
      );
    }
    if (color) {
      updateProducts = updateProducts.filter(
        (product) => product.color == color
      );
    }
    if (SearchTerme) {
      updateProducts = updateProducts.filter((product) =>
        product.title.toLowerCase().includes(SearchTerme.toLowerCase())
      );
    }
    if (company && company !== "All") {
      updateProducts = updateProducts.filter(
        (product) => product.brand == company
      );
    }
    if (Price != 0) {
      updateProducts = updateProducts.filter(
        (product) => product.price <= Price
      );
    }
    setProducts(updateProducts);
  };
  React.useEffect(() => {
    updateFilters();
  }, [selectCategory, SearchTerme, company, Price, color]);
  const getProducts = () => {
    return products.slice(0, View).map((product) => {
      return <Product Display={Display} key={product.id} product={product} />;
    });
  };
  const array = [
    {
      back: [
        {
          link: "Home",
          to: "/",
        },
      ],
      fils: "Products",
    },
  ];
  return (
    <>
      <Bar data={array} />
      <div className="container__product  ">
        <section className="products__filters">
          <div className="product__search">
            <input
              type="text"
              value={SearchTerme}
              onChange={(e) => setSearchTerme(e.target.value)}
              placeholder="Search"
              className="input__search"
            />
          </div>
          <div className="categories">
            <h4>Cateory</h4>

            <ul className="list__categories">
              <li
                className={
                  selectCategory === "" ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory("")}
              >
                All
              </li>
              <li
                className={
                  selectCategory === 1 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(1)}
              >
                Office
              </li>
              <li
                className={
                  selectCategory === 2 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(2)}
              >
                Living Room
              </li>
              <li
                className={
                  selectCategory === 3 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(3)}
              >
                Kitchen
              </li>
              <li
                className={
                  selectCategory === 4 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(4)}
              >
                Badroom
              </li>
              <li
                className={
                  selectCategory === 5 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(5)}
              >
                Dining
              </li>
              <li
                className={
                  selectCategory === 6 ? "category active" : "category"
                }
                onClick={(e) => setSelectCategory(6)}
              >
                Kids
              </li>
            </ul>
          </div>

          <div className="fournisseurs">
            <h4>Company</h4>
            <select
              name=""
              id=""
              className="list_fournisseurs select"
              onChange={(e) => setCompany(e.target.value)}
            >
              <option className="fournisseur" selected>
                All
              </option>
              <option className="fournisseur">Liddy</option>
              <option className="fournisseur">Marcos</option>
              <option className="fournisseur">Caressa</option>
              <option className="fournisseur">Ikea</option>
            </select>
          </div>
          <div className="colors">
            <h4>Colors</h4>

            <ul className="list__colors">
              <li
                className={color == "" ? "category active" : "category"}
                onClick={() => setColor("")}
              >
                All
              </li>
              <li
                className={color == "red" ? "color active" : "color"}
                onClick={() => setColor("red")}
                id="red"
              >
                {color == "red" ? <BsCheckLg className="icon__approved" /> : ""}
              </li>
              <li
                className={color == "green" ? "color active" : "color"}
                onClick={() => setColor("green")}
                id="green"
              >
                {color == "green" ? (
                  <BsCheckLg className="icon__approved" />
                ) : (
                  ""
                )}
              </li>
              <li
                className={color == "bleu" ? "color active" : "color"}
                onClick={() => setColor("bleu")}
                id="bleu"
              >
                {color == "bleu" ? (
                  <BsCheckLg className="icon__approved" />
                ) : (
                  ""
                )}
              </li>
              <li
                className={color == "black" ? "color active" : "color"}
                onClick={() => setColor("black")}
                id="black"
              >
                {color == "black" ? (
                  <BsCheckLg className="icon__approved" />
                ) : (
                  ""
                )}
              </li>
              <li
                className={color == "yellow" ? "color active" : "color"}
                onClick={() => setColor("yellow")}
                id="yellow"
              >
                {color == "yellow" ? (
                  <BsCheckLg className="icon__approved" />
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
          <div className="price">
            <h4>Price</h4>
            <h4>{Price} DA</h4>
            <input
              type="range"
              name="price"
              min={0}
              max={750}
              id=""
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </section>
        <div className="products__lists">
          <div className="products__lists-filters container">
            <div className="products__display">
              <HiViewGrid
                onClick={(e) => setDisplay((prev) => !prev)}
                className={Display ? "icon card" : "icon card active"}
              />
              <BsList
                onClick={(e) => setDisplay((prev) => !prev)}
                className={Display ? "icon card active" : "icon card "}
                id="iconCard"
              />
            </div>

            <p className="count__products">{products.length} Products Found </p>
            <div className="lign"></div>
            <p>Sort By</p>
            <div className="sort">
              <select name="" id="filter__select">
                <option value="">Name(A-Z)</option>
                <option value="">Price(Lowest)</option>
                <option value="">Price(Lowest)</option>
              </select>
            </div>
          </div>
          <section
            className="products "
            id={Display ? "products-display-none" : "page__products"}
          >
            {loaded ? getProducts() : <CircularProgress color="success" />}
          </section>
          <div className="btn__view">
            {View >= products.length ? (
              ""
            ) : (
              <button
                className="btn-view"
                onClick={() => setView((prev) => prev + 6)}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
