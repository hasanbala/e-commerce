import { Link } from "react-router-dom";
import { Button } from "../components";
import { AppCartContext } from "../context";
import "../styles/cartdetails.css";

export const Cart = () => {
  const { items, removeCart } = AppCartContext();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

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
                  <img
                    width="400"
                    height="300"
                    src={
                      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                    }
                    alt="img"
                  />
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
            TOTAL :<small>$</small> {total}
          </div>
        </div>
      )}
    </div>
  );
};
