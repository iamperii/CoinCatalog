import { configureStore } from '@reduxjs/toolkit';
import fetchCoinsReducer from '../slices/fetchCoinsSlice';
import categoryCoinsReducer from '../slices/categoryCoinSlice';
import searchReducer from '../slices/searchSlice';
const store = configureStore({
	reducer: {
		coins: fetchCoinsReducer,
		categoryCoins: categoryCoinsReducer,
		search: searchReducer,
	},
});

export default store;
