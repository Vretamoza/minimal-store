import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden/>

      <aside className="cart">
        <ul>
          {
            cart.map(item => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <strong>{item.title}</strong> - ${item.price}
                </div>
                <footer>
                  <small>
                    Qty: {item.quantity}
                  </small>
                  <button onClick={() => addToCart(item)}>+</button>
                </footer>
              </li>
            ))
          }
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}