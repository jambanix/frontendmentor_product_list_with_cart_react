import "./App.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { Menu } from "./components/Product/Menu";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <main>
        <ProductsProvider>
          <div className="grid grid-cols-1 px-3 py-3 md:px-8 xl:grid-cols-[70%_auto] xl:gap-4">
            <Menu />
            <Cart />
          </div>
        </ProductsProvider>
      </main>
    </>
  );
}

export default App;
