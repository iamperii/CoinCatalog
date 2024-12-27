import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../index';

export const fetchCoins = createAsyncThunk(
	'coins/fetchCoins',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/coins`);
			if (!response.ok) {
				throw new Error('Failed to fetch coins');
			}
			const data = await response.json();
			console.log('API Response:', data);

			if (data && typeof data === 'object') {
				let allCoins;
				if (Array.isArray(data)) {
					allCoins = [...data].reverse(); 
				} else {
					allCoins = Object.values(data).flat().reverse();
				}
				return allCoins;
			} else {
				throw new Error('Invalid data format');
			}
		} catch (error) {
			console.error('Fetch error:', error);
			return rejectWithValue(error.message || 'Failed to fetch coins');
		}
	}
);

const fetchCoinsSlice = createSlice({
	name: 'coins',
	initialState: {
		coins: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCoins.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCoins.fulfilled, (state, action) => {
				state.loading = false;
				state.coins = action.payload;
			})
			.addCase(fetchCoins.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default fetchCoinsSlice.reducer;
