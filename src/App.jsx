import "./App.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { Menu } from "./components/Product/Menu";
import { Cart } from "./components/Cart/Cart";


function App() {

  return (
    <>
      <main>
        <div className="relative flex justify-center">
          <ProductsProvider>
            <div className="grid grid-cols-1 gap-4 p-8 md:px-12 xl:grid-cols-[70%_auto] xl:gap-4 xl:p-16 max-w-[1600px]">
              <Menu />
              <Cart />
            </div>
          </ProductsProvider>
        </div>
      </main>
    </>
  );
}

export default App;
