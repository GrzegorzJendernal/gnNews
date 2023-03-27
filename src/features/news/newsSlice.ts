import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/App/store";

const newsSlice = createSlice({
	name: "news",
	initialState: {
		listView: true,
	},
	reducers: {
		changeView: state => {
			state.listView = !state.listView;
		},
	}
});

export const {changeView} = newsSlice.actions;

const selectNewsState = (state: RootState) => state.news;

export const selectView = (state: RootState) => selectNewsState(state).listView;

export default newsSlice.reducer;