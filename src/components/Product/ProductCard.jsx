import { ProductButton } from "./ProductButton";
import { useScreenWidth } from "../../hooks/useScreenWidth"

export const ProductCard = ({ product }) => {

  const imageType = useScreenWidth();

  return (
    <article className="flex flex-col gap-8">
      <div className="relative">
      <img src={product.image[imageType]} alt={`Picture of ${product.name}`} className={`rounded-lg ${product.isActive ? "border-4 border-red" : null}`}/>
        <ProductButton {...product} />
      </div>
      <div>
        <p className="text-rose-400">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <h3 className="text-red">£{product.price.toFixed(2)}</h3>
        </div>
    </article>
  );
};
