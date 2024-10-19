import { useProductsContext } from "../../context/ProductsProvider";
import { ProductCard } from "./ProductCard";

export const Menu = () => {
  const productContext = useProductsContext();

  return (
      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold">Desserts</h2>
        <div className="grid md:grid-cols-3 md:gap-8 justify-center">
          {productContext.products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
  );
};
