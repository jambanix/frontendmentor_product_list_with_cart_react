import { useProductsContext } from "../../context/ProductsProvider";
import { ProductCard } from "./ProductCard";

export const Menu = () => {
  const productContext = useProductsContext();

  return (
      <section className="flex flex-col gap-4">
        <h2 className="text-4xl font-extrabold">Desserts</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-8 justify-center">
          {productContext.products.map((product) => <ProductCard product={product} key={product.id}/>)}
        </div>
      </section>
  );
};
