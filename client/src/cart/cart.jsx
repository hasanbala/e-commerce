import { AppCartContext } from "../context";
import { OrderModal } from "./orderModal";
import { useState } from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import "react-responsive-modal/styles.css";

export const Cart = () => {
  const { items, removeCart } = AppCartContext();
  const [open, setOpen] = useState(false);

  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  const handleOrder = () => setOpen(true);

  return (
    <div className="sepet-details">
      <h1>Cart Details</h1>
      {items.length < 1 && "ANY ITEMS"}
      {items.length > 0 && (
        <div className="sepet">
          <ul>
            <div className="sepet-titles">
              <li>Item Image</li>
              <li>Item Title</li>
              <li>Item Price</li>
              <li></li>
            </div>
            {items.map((item, index) => (
              <li className="sepet-det" key={index}>
                <Link to={`product/${item._id}`}>
                  <img width="400" height="300" src={item.photos} alt="img" />
                </Link>
                <div>{item.title} </div>
                <p>
                  <small>$</small>
                  <b>{item.price}</b>
                </p>
                <Button
                  onclick={() => removeCart(item._id)}
                  btn="btn-hover rmv"
                  message="Remove Item"
                />
              </li>
            ))}
          </ul>
          <div className="total">
            <Button
              onclick={handleOrder}
              btn="btn-hover addcart"
              message="Order"
            ></Button>
            <small> $</small>
            {total}
          </div>
          <OrderModal open={open} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};
