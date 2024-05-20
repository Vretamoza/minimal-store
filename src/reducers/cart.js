export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CHECK_PRODUCT_IN_CART: 'CHECK_PRODUCT_IN_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { payload } = action
    const productInCart = state.find(item => item.id === payload.id)

    if (productInCart) {
      const newCart = state.map(item => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      updateLocalStorage(newCart)
      return newCart
    }
    const newCart = [...state, {...payload, quantity: 1}]
    updateLocalStorage(newCart)
    return newCart
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { payload } = action
    const newCart = state.filter(item => item.id !== payload.id)
    updateLocalStorage(newCart)
    return newCart
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage(initialState)
    return initialState
  }
}

export const reducer = (state, action) => {
  const updateState = UPDATE_STATE_BY_ACTION[action.type]
  return updateState ? updateState(state, action) : state
}