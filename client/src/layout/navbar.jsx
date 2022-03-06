import { useEffect, useRef } from "react";
import { Toggle } from "./toogle";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Button } from "../components";
import { AppUseContext } from "../context";

export const Navbar = () => {
  const { logged } = AppUseContext();
  const openNav = useRef();
  const closeNavX = useRef();
  const closeNav = useRef();

  useEffect(() => {
    openNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "100%");
    };
    closeNavX.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
    closeNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
  }, []);

  const logPro = () => {
    return (
      <>
        <li style={{ marginRight: "20px" }}>
          <Link className="drop-link" to="/signin">
            <Button btn="btn-hoverx color-8" message="Log In">
              <b>Log In</b>
            </Button>
          </Link>
        </li>
        <li>
          <Link className="drop-link" to="/signup">
            <Button btn="btn-hoverx color-11" message="Sign Up">
              <b>Sign Up</b>
            </Button>
          </Link>
        </li>
      </>
    );
  };

  const profile = () => {
    return (
      <li>
        <Link className="drop-link" to="/profile">
          <Button btn="btn-hover color-5" message="Go Profile">
            <b>Go Profile</b>
          </Button>
        </Link>
      </li>
    );
  };

  return (
    <div className="navbar">
      <nav className="navbarsub">
        <div className="navbarsub-list">
          <ul id="myTopnav">
            <li className="title">
              <h2>E-COMMERCE</h2>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/" data-hover="General">
                General
              </Link>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/products" data-hover="Products">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <ul
          className="item"
          style={{
            marginRight: "40px",
          }}
        >
          <li className="toggle" ref={openNav}>
            <i className="fas fa-align-justify" />
          </li>
          {!logged && logPro()}
          {logged && profile()}
        </ul>
      </nav>
      <Toggle closeNavX={closeNavX} closeNav={closeNav} />
    </div>
  );
};
