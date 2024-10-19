import { useProductsContext } from "../../context/ProductsProvider";
import { ProductCard } from "./ProductCard";

export const Menu = () => {
  const products = useProductsContext();

  return (
    <>
      <section className="flex flex-col gap-6 px-4 py-2">
        <h2>Desserts</h2>
        <div className="grid">
          {products.products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </section>
    </>
  );
};
