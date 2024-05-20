import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Products.css";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCard = (product) => {
    console.log('products', cart.some(item => item.id === product.id))
    return cart.some(item => item.id === product.id)
  }

  const handleClick = (product, productInCard) => {
    productInCard ? removeFromCart(product) : addToCart(product)
  }
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCard(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button 
                  style={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                  onClick={() => handleClick(product, isProductInCart)}>
                  { isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
