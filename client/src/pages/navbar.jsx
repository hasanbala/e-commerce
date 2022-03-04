import { useEffect, useRef } from "react";
import { Toggle } from "./toogle";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
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
              <Link className="link" to="/" data-hover="navi.home">
                navi.home
              </Link>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/" data-hover="navi.contact">
                navi.contact
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
          <li style={{ marginRight: "20px" }}>
            <Link className="drop-link" to="/login">
              <div className="dropdown">
                <button className="dropbtn">
                  <b>Log In</b>
                </button>
              </div>
            </Link>
          </li>
          <li>
            <Link className="drop-link" to="/login">
              <div className="dropdown">
                <button className="dropbtn">
                  <b>Sign Up</b>
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Toggle closeNavX={closeNavX} closeNav={closeNav} />
    </div>
  );
};
