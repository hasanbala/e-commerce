import { useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { AppCartContext, AppUseContext } from "../context";
import { toast } from "react-toastify";
import "../styles/product.css";

export const Product = ({ item }) => {
  const [ihover, setIhover] = useState(false);
  const handleHover = () => setIhover(!ihover);
  const { items, addCart } = AppCartContext();
  const { logged, stylex, user } = AppUseContext();
  let choosenItem = null;

  if (logged) {
    choosenItem = items.find((key) => key._id === item._id);
  }
  const handleBuy = () => {
    if (logged) {
      addCart(item, choosenItem);
    } else {
      toast.error("Please Sign In", stylex);
    }
  };

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
                ? item.photos[0] ||
                  "https://images.unsplash.com/photo-1502054195739-505158fe7855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                : item.photos[1] ||
                  "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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

        {user?.role === "admin"
          ? null
          : ihover && (
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
