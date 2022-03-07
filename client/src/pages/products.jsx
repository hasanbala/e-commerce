import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "./fetches.jsx";
import { Product } from "../components";
import "../styles/products.css";

export const Products = () => {
  const {
    status,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage?.length === 12) return;
      return pages.length + 1;
    },
  });

  if (status === "loading") return "Loading..";
  if (status === "error") return "An error has occured..";

  return (
    <div className="products">
      <h1>prodücts</h1>
      <div className="products-core">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Product key={item._id} item={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="more">
        <button
          // className="buttonload"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};
