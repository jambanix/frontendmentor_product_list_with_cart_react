import "./App.css";
import { ProductsProvider } from "./context/ProductsProvider";
import { Menu } from "./components/Product/Menu";
import { Cart } from "./components/Cart/Cart";
import { ConfirmationModal } from "./components/Modal/ConfirmationModal";

function App() {


  return (
    <>
      <main>
        <div className="relative">
          <ProductsProvider>
            <div className="grid grid-cols-1 gap-4 p-4 md:px-8 xl:grid-cols-[70%_auto] xl:gap-4 xl:p-16">
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
