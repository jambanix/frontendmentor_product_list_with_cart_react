import './App.css'
import { ProductsProvider } from './context/ProductsProvider'
import { Menu } from './components/Menu'
import { Cart } from "./components/Cart"

function App() {

  return (
    <>
      <main>
        <ProductsProvider>
          <Menu />
          <Cart />
        </ProductsProvider>
      </main>
    </>
  )
}

export default App
