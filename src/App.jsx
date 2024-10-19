import "./App.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { Menu } from "./components/Product/Menu";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <main>
        <ProductsProvider>
          <div className="grid">
            <Menu />
            <Cart />
          </div>
        </ProductsProvider>
      </main>
    </>
  );
}

export default App;
