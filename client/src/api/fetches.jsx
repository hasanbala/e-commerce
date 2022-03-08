import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowOrigins = ["http://localhost:4000"];
    const token = localStorage.getItem("access-token");
    if (allowOrigins.includes(origin)) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.rejeect(error);
  }
);

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

export const fetchLogin = async (input) => {
  const { data } = await axios.post(`http://localhost:4000/auth/login`, input);
  return data;
};

export const fetchProfile = async () => {
  const { data } = await axios.get("http://localhost:4000/auth/me");
  return data;
};

export const fetchOut = async () => {
  const { data } = await axios.post(`http://localhost:4000/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
};

export const fetchOrder = async (input) => {
  const { data } = await axios.post(`http://localhost:4000/order`, input);
  return data;
};

export const fetchAdminOrders = async () => {
  const { data } = await axios.get("http://localhost:4000/order");
  return data;
};

export const fetchAdminDeletes = async (id) => {
  const { data } = await axios.delete(`http://localhost:4000/product/${id}`);
  return data;
};

export const fetchAdminUpdateProduct = async (input, id) => {
  const { data } = await axios.put(
    `http://localhost:4000/product/${id}`,
    input
  );
  return data;
};
export const fetchAdminAddNewProduct = async (input) => {
  const { data } = await axios.post(`http://localhost:4000/product/`, input);
  return data;
};
