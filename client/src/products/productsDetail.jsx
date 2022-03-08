import { AppCartContext, AppUseContext } from "../context";
import { fetchProduct } from "../api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Button } from "../components";
import { toast } from "react-toastify";
import "../styles/productsdetail.css";
import ImageGallery from "react-image-gallery";

export const ProductsDetail = () => {
  const { logged, stylex, user } = AppUseContext();
  const { addCart, items } = AppCartContext();
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["product", id], () =>
    fetchProduct(id)
  );
  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;

  const images = data.photos.map((url) => ({ original: url }));
  let choosenItem = null;
  if (logged) {
    choosenItem = items.find((key) => key._id === data._id);
  }
  const handleBuy = () => {
    if (logged) {
      addCart(data, choosenItem);
    } else {
      toast.error("Please Sign In", stylex);
    }
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
      {user?.role === "admin" ? null : (
        <Button
          btn={choosenItem ? "btn-hover rmv" : "btn-hover addcart"}
          message={choosenItem ? "Remove Item" : "Add to cart"}
          onclick={handleBuy}
        />
      )}
    </div>
  );
};
