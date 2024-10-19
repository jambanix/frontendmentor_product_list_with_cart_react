import './App.css'
import { ProductsProvider } from './context/ProductsProvider'

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
