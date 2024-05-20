import { FiltersContext } from "../Context/filters"
import { useContext, useState, useEffect } from "react"

export function useFilters({products}) {

  const {filters, setFilters} = useContext(FiltersContext)

  const [filteredProducts, setFilteredProducts] = useState(null)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  useEffect(() => {
    if (products) {
      const filtered = filterProducts(products)
      setFilteredProducts(filtered)
    }
  }, [products, filters])

  return { filteredProducts, setFilters }
}