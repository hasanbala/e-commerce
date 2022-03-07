import "../styles/button.css";

export const Button = ({ btn, message, onclick, len, icon }) => {
  return (
    <button className={btn} type="submit" onClick={onclick}>
      {message}{" "}
      {icon ? <i className="fa-solid fa-basket-shopping">{len}</i> : ""}
    </button>
  );
};
