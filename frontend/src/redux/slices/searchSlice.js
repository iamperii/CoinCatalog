import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchCoins = createAsyncThunk(
	'search/searchCoins',
	async (query, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`http://localhost:3000/search?query=${query}`
			);
			const data = await response.json();

			if (!response.ok) {
				return rejectWithValue(data.error);
			}
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		coins: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(searchCoins.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(searchCoins.fulfilled, (state, action) => {
				state.coins = action.payload;
				state.loading = false;
			})
			.addCase(searchCoins.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default searchSlice.reducer;
