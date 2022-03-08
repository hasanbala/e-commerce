import { AppCartContext, AppUseContext } from "../context";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../styles/profile.css";

export const Profile = () => {
  const { user, logout, stylex } = AppUseContext();
  const { emptyCart } = AppCartContext();

  const handleOut = async () => {
    logout();
    emptyCart();
    toast.info("Goodbye baby", stylex);
  };
  return (
    <div className="detail">
      <div className="detail-head">
        <b>
          <h2>PROFILE DETAILS</h2>
        </b>
      </div>
      <div className="detail-body">
        <div className="detail-body-div">
          <label>{user.role}</label>
        </div>
        <div className="detail-body-div">
          <label>{user.email}</label>
        </div>
        <Link to="/">
          <Button btn="btn-hover out" message="Log Out" onclick={handleOut} />
        </Link>
      </div>
    </div>
  );
};
