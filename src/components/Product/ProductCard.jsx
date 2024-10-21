

import { ProductButton } from "./ProductButton";
import { ProductDescription } from "./UI/ProductDescription";
import { ProductImage } from "./UI/ProductImage";

export const ProductCard = ({ product }) => {
  

  return (
    <article className="flex flex-col gap-8">
      <div className="relative">
        <ProductImage {...product}/>
        <ProductButton {...product} />
      </div>
      <ProductDescription {...product}/>
    </article>
  );
};
