import {  useContext, useId } from 'react'
import './Filters.css'
import { FiltersContext } from '../Context/filters'

export function Filters () {

  const {filters, setFilters} = useContext(FiltersContext)

  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMaxPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Precio máximo:</label>
        <input
          type="range"
          id={maxPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMaxPrice}
          value={filters.maxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}