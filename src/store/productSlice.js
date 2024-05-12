import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { fetchProducts } = productSlice.actions
export default productSlice.reducer

export function getProducts() {
    return async function getProductThunk(dispatch, getState) {
        const data = await fetch("https://fakestoreapi.com/products")
        const res = await data.json()
        console.log(res);
        dispatch(fetchProducts(res))
    }
}