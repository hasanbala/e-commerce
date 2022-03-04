import { Link } from "react-router-dom";

export const Toggle = ({ closeNavX, closeNav }) => {
  return (
    <div id="myNav" className="overlay">
      <a href="#!" className="closebtn" ref={closeNavX}>
        &times;
      </a>
      <div className="overlay-content">
        <ul>
          <div ref={closeNav}>
            <li>
              <Link className="link" to="/">
                navi.home
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                navi.contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
