import { Link } from "react-router-dom";
import { Button } from "../components";
import { AppUseContext } from "../context";
import "../styles/profile.css";

export const Profile = () => {
  const { user, logout } = AppUseContext();

  const handleOut = async () => {
    logout();
    localStorage.removeItem("cart");
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
        <Link className="drop-link" to="/">
          <Button btn="btn-hover out" message="Log Out" onclick={handleOut}>
            <b>Log Out</b>
          </Button>
        </Link>
      </div>
    </div>
  );
};
