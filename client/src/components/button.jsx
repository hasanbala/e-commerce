import "../styles/button.css";

export const Button = ({ btn, message }) => {
  return (
    <button className={btn} type="submit">
      {message}
    </button>
  );
};
