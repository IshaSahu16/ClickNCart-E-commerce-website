import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',

    // initialState: [],
    initialState: {
        cart: [],
        // items: productData,
        totalQuantity: 0,
        totalPrice: 0,
    },

    reducers: {
        add(state, action) {
            let find = state.cart.find((item) => item.datas.id === action.payload.datas.id);
            state.totalQuantity += action.payload.datas.price
            if (find) {
                cart: state.cart.map((i) =>
                    i.datas.id === action.payload.datas.id ? action.payload : i
                );
                find.quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
            // state.push(action.payload);
        },
        remove(state, action) {
            // state.cart = state.cart.filter((item) => item.datas.id !== action.payload.datas.id)
            const k = state.cart.filter((e) => {
                return e.datas.id !== action.payload.datas.id;
              });
              state.cart = k;
        },
    },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;