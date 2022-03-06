import { Button } from "../components";
import "../styles/contact.css";
import "../styles/button.css";

export const SignIn = () => {
  return (
    <div className="contact">
      <h2 style={{ color: "#000" }}>LOG IN</h2>
      <div className="contact-sub">
        <form className="contact-forms">
          <input
            className="fname"
            type="text"
            placeholder="contact.firstNameHolder"
          />
          <input
            className="femail"
            type="email"
            placeholder="email@example.com"
            autoComplete="hidden"
          />
          <input
            className="fpassword"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            minLength="8"
          />
          <Button
            type="submit"
            className="btn-hover color-3"
            data="contact.button"
          />
        </form>
      </div>
    </div>
  );
};
