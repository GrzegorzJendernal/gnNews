import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/App/store";

const newsSlice = createSlice({
	name: "news",
	initialState: {
		listView: true,
		country: "pl",
	},
	reducers: {
		changeView: state => {
			state.listView = !state.listView;
		},
		setCountry: (state, { payload: short }) => {
			state.country = short;
		},
	}
});

export const {changeView, setCountry} = newsSlice.actions;

const selectNewsState = (state: RootState) => state.news;

export const selectView = (state: RootState) => selectNewsState(state).listView;
export const selectCountry = (state: RootState) => selectNewsState(state).country;

export default newsSlice.reducer;