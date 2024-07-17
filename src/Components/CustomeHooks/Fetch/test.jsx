import React from "react";
import useFetch from "./inex";

export default function UseFetchHookTest() {
  const url = "https://dummyjson.com/products";
  const { data, error, loading } = useFetch(url,{});
  console.log(data,error,loading)
  return (
    <div>
      {loading ? <h3>pending ...</h3> : null}
      {data && data?.products && data?.products?.length
        ? data.products.map((product) => <p key={product.id}>{product.description}</p>)
        : null}
    </div>
  );
}
