import { useState } from "react";
import { ProductButton } from "./ProductButton";
import { useProductsContext } from "../../context/ProductsProvider";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const ProductCard = ({ product }) => {

  const imageType = useScreenWidth();

  return (
    <>
      <article className="flex flex-col gap-8">
        <div className="relative">
          <img
            src={product.image[imageType]}
            alt={`Picture of ${product.name}`}
            className="rounded-lg"
          />
          <ProductButton product={product}/>
        </div>
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <h3 className="text-red-500 font-semibold">£{product.price}</h3>
        </div>
      </article>
    </>
  );
};
