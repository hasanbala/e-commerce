import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./fetches";
import { useQuery } from "react-query";
import { Button } from "../components";
import "../styles/productsdetail.css";

export const ProductsDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["product", id], () =>
    fetchProduct(id)
  );

  if (isLoading) return <div>Loading..</div>;
  if (error) return <div>An error has occured..</div>;

  const images = data.photos.map((url) => ({ original: url }));

  return (
    <div className="details">
      <h1>product detail</h1>
      <h3>{data.title} </h3>
      <ImageGallery items={images} />
      <div className="detail">{data.description}</div>
      <p>
        <small>$</small>
        <b>{data.price}</b>
      </p>
      <Button btn="btn-hover color-5" message="Add to cart" />
    </div>
  );
};
