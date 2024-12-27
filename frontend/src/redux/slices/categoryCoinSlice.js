import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategoryCoins = createAsyncThunk(
	'categoryCoins/fetchCategoryCoins',
	async (category, { rejectWithValue }) => {
		try {
			const response = await fetch(`${BASE_URL}/coins/${category}`);
			if (!response.ok) {
				throw new Error('Failed to fetch category coins');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message || 'Failed to fetch category coins');
		}
	}
);

const categoryCoinsSlice = createSlice({
	name: 'categoryCoins',
	initialState: {
		coins: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategoryCoins.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategoryCoins.fulfilled, (state, action) => {
				state.loading = false;
				state.coins = action.payload;
			})
			.addCase(fetchCategoryCoins.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default categoryCoinsSlice.reducer;
