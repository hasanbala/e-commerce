import { useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import "../styles/card.css";
import { AppCartContext, AppUseContext } from "../context";
import { toast } from "react-toastify";

export const Product = ({ item }) => {
  const [ihover, setIhover] = useState(false);
  const handleHover = () => setIhover(!ihover);
  const { items, addCart } = AppCartContext();
  const { logged, stylex } = AppUseContext();
  let choosenItem = items.find((key) => key._id === item._id);

  const handleBuy = () => {
    logged ? addCart(item, choosenItem) : toast.error("Please Sign In", stylex);
    choosenItem = false;
  };
  console.log(choosenItem);

  return (
    <div className="cards">
      <div
        className="column"
        onPointerEnter={handleHover}
        onPointerLeave={handleHover}
      >
        <Link to={`/product/${item._id}`}>
          <img
            width="360"
            height="240"
            src={
              !ihover
                ? "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            }
            alt="img"
          />
        </Link>
        <div className="cart-exp"> {item.title} </div>
        <div className="cart-cost">
          <p>
            <small>$</small>
            <b>{item.price}</b>
          </p>
        </div>
        {ihover && (
          <Button
            btn={choosenItem ? "btn-hover rmv" : "btn-hover addcart"}
            message={choosenItem ? "Remove Item" : "Add to cart"}
            onclick={handleBuy}
          />
        )}
      </div>
    </div>
  );
};
