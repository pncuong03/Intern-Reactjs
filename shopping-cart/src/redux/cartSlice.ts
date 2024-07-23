import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "~/types";

export interface CartState {
    cart: IProduct[];
}

interface IncreasePayload {
    id: number;
  }
  
  interface DecreasePayload {
    id: number;
  }

  interface RemovePayload {
    id: number;
  }

const cartSlice = createSlice({
    name:"cart",
    initialState: { cart : []} as CartState,
    reducers: {
        addToCart: (state, action) => {
            const itemCart = state?.cart.find((item)=> item.id === action.payload.id)  
                if(itemCart &&  itemCart.qty !== undefined){
                    itemCart.qty++;
                }else{
                    state.cart.push({...action.payload, qty: 1})
               }
                },
                
        inQty: (state, action: PayloadAction<IncreasePayload>) => {
            const item = state.cart.find((item)=> item.id === action.payload.id)
            if(item && item.qty !== undefined){
                item.qty++;
            }
        },

        deQty: (state, action: PayloadAction<DecreasePayload>) => {
            const item = state.cart.find((item)=> item.id === action.payload.id)
            if(item && item.qty !== undefined && item.qty > 0) {
                item.qty--;
            }
            if(item?.qty === 0){
                state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
            }
        },
        removeCart: (state, action: PayloadAction<RemovePayload>) => {
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
        },
      
}
})

export const { addToCart, inQty, deQty, removeCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;