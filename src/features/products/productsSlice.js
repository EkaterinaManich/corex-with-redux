import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false;
    },
    sortMinPrice: (state) => {
      state.products = [...state.products].sort(
        (a, b) => a["min-price"] - b["min-price"]
      );
    },
    sortMaxPrice: (state) => {
      state.products = [...state.products].sort(
        (a, b) => b["max-price"] - a["max-price"]
      );
    },
    sortManufacturer: (state) => {
      state.products = [...state.products].sort((a, b) =>
        a.manufacturer.localeCompare(b.manufacturer)
      );
    },
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
});

export const {
  fetchProducts,
  sortMinPrice,
  sortMaxPrice,
  sortManufacturer,
} = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(fetchProducts(data));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.products.products;
export const selectIsLoading = (state) => state.products.isLoading;

export default productsSlice.reducer;
