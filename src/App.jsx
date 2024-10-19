import "./App.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { Menu } from "./components/Product/Menu";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <main>
        <ProductsProvider>
          <div className="grid grid-cols-1 gap-4 p-3 md:px-8 xl:grid-cols-[70%_auto] xl:gap-4 xl:p-16">
            <Menu />
            <Cart />
          </div>
        </ProductsProvider>
      </main>
    </>
  );
}

export default App;
