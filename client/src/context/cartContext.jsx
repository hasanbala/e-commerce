import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();
export const AppCartContext = () => useContext(CartContext);
const defaultCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addCart = (data, choosenItem) => {
    if (!choosenItem) {
      return setItems((items) => [...items, data]);
    }
    const filterAdd = items.filter((item) => item._id !== choosenItem._id);
    setItems(filterAdd);
  };
  const removeCart = (id) => {
    const filterPop = items.filter((item) => item._id !== id);
    setItems(filterPop);
  };

  const contextValue = {
    items,
    setItems,
    addCart,
    removeCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
