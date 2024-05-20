export const fetchProducts = async () => {
  try {
    const response  = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data.products
  } catch (error) {
    throw new Error('Error al obtener los datos');
  }
}