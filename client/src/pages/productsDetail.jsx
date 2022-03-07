import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./fetches";
import { useQuery } from "react-query";
import { Button } from "../components";
import "../styles/productsdetail.css";
import { AppCartContext, AppUseContext } from "../context";
import { toast } from "react-toastify";

export const ProductsDetail = () => {
  const { logged, stylex } = AppUseContext();
  const { addCart, items } = AppCartContext();
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;

  const images = data.photos.map((url) => ({ original: url }));
  let choosenItem = items.find((item) => item._id === product_id);

  const handleBuy = () => {
    logged ? addCart(data, choosenItem) : toast.error("Please Sign In", stylex);
    choosenItem = null;
  };
  return (
    <div className="products-details">
      <h1>Product Detail</h1>
      <h3>{data.title} </h3>
      <ImageGallery items={images} />
      <h3>Details</h3>
      <div className="products-desc">{data.description}</div>
      <p>
        <small>$</small>
        <b>{data.price}</b>
      </p>
      <Button
        btn={choosenItem ? "btn-hover rmv" : "btn-hover addcart"}
        message={choosenItem ? "Remove Item" : "Add to cart"}
        onclick={handleBuy}
      />
    </div>
  );
};
