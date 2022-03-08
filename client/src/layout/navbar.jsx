import { AppCartContext, AppUseContext } from "../context";
import { useEffect, useRef } from "react";
import { Toggle } from "./toogle";
import { Link } from "react-router-dom";
import { Button } from "../components";
import "../styles/navbar.css";

export const Navbar = () => {
  const { logged, user } = AppUseContext();
  const { items } = AppCartContext();
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
          <Link to="/signin">
            <Button btn="btn-hover login" message="Log In" />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Button btn="btn-hover signup" message="Sign Up" />
          </Link>
        </li>
      </>
    );
  };

  const profile = () => {
    return (
      <>
        <li style={{ marginRight: "20px" }}>
          {items.length > 0 && (
            <Link to="/cart">
              <Button
                btn="btn-hover cart"
                message="Cart"
                icon={true}
                len={items.length}
              />
            </Link>
          )}
        </li>
        <li>
          <Link to="/profile">
            <Button btn="btn-hover goprofile" message="Go Profile" />
          </Link>
        </li>
      </>
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
          {user?.role === "admin" && (
            <Link to="/admin">
              <Button btn="btn-hover admin" message="Admin" />
            </Link>
          )}
          {!logged && logPro()}
          {logged && profile()}
        </ul>
      </nav>
      <Toggle closeNavX={closeNavX} closeNav={closeNav} />
    </div>
  );
};
