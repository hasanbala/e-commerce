import "../styles/button.css";

export const Button = ({ btn, message, onclick }) => {
  return (
    <button className={btn} type="submit" onClick={onclick}>
      {message}
    </button>
  );
};
