import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

// with redux-thunk 'async(dispatch,getState)' can be used, i.e function inside a function
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async(dispatch,getState) =>{
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
// updating localStorage with new update state
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

// getState is used to get all the items from redux-state
