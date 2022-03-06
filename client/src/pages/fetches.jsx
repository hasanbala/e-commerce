import axios from "axios";

export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    "http://localhost:4000/product?page=" + pageParam
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/product/${id}`);
  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/register`,
    input
  );
  return data;
};
