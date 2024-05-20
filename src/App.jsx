import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { fetchProducts } from "./api"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./Context/cart"

function App() {
  const [products, setProducts] = useState(null)
  const {filteredProducts} = useFilters({products})

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
    getData()
  }, [])


  return (
    <CartProvider>
      <Header />
      <Cart />
      {filteredProducts && <Products products={filteredProducts}></Products>}
      <Footer />
    </CartProvider>
  )
}

export default App
