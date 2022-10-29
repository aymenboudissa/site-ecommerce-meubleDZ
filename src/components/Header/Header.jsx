import React from "react";
import logo from "../../assets/images/logo.jpg";
import "./Header.css";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="header" id="home">
      <div className={toggle ? "navbar container vh" : "navbar container"}>
        <nav
          className={
            toggle ? "container__header  d-bolck" : "container__header "
          }
        >
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="header__lists">
            <Link to={"/"}>
              <li className="header__lists-list">
                <a href="#">Home</a>
              </li>
            </Link>
            <LinkScroll to={"about"}>
              <li className="header__lists-list">
                <Link to={"/"}>
                  {" "}
                  <a href="#about">About</a>
                </Link>
              </li>
            </LinkScroll>
            <Link to={"/products"}>
              <li className="header__lists-list">
                <a href="#products">Products</a>
              </li>
            </Link>
          </ul>
        </nav>
        <div className={toggle ? "close d-block" : "close"}>
          <AiOutlineClose onClick={() => setToggle((prev) => !prev)} />
        </div>
      </div>
      <header className={toggle ? "header-sm d-none" : "header-sm "}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={"btn__list d-none "}>
          {<BsList onClick={() => setToggle((prev) => !prev)} />}
        </div>
      </header>
    </div>
  );
};

export default Header;
