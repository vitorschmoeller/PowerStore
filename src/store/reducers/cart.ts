import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Suplement from '../../models/product'

type CartState = {
  items: Suplement[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Suplement>) => {
      const suplement = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (suplement === undefined) {
        state.items.push(action.payload)
      } else {
        alert('Attention you add the same product in the cart')
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, close, open, remove, clear } = cartSlice.actions
export default cartSlice.reducer
