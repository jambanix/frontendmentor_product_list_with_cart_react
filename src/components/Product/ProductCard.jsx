
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { ProductButton } from "./ProductButton";
import { ProductDescription } from "./UI/ProductDescription";
import { ProductImage } from "./UI/ProductImage";

export const ProductCard = ({ product }) => {
  const imageType = useScreenWidth();

  return (
    <article className="flex flex-col gap-8">
      <div className="relative">
        <ProductImage src={product.image[imageType]} name={product.name} />
        <ProductButton product={product} />
      </div>
      <ProductDescription {...product}/>
    </article>
  );
};
