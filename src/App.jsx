import './App.css'
import { ProductsProvider } from './context/ProductsProvider'
import { Menu } from './components/Menu'
import { Cart } from "./components/Cart"

function App() {
  return (
    <>
      <ProductsProvider>
        <h2>Desserts</h2>
        <Menu />
        <Cart />
      </ProductsProvider>
    </>
  )
}

export default App
